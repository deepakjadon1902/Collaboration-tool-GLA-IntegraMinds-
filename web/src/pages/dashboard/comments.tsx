
import React, { useEffect, useState } from "react";

// Define the User interface for TypeScript
interface User {
  _id: string;
  name: string;
  profilePicture: string; // Assume this field is available
}

interface Comment {
  _id: string;
  username: string;
  comment: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // State for user list
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for the selected user
  const [comments, setComments] = useState<Comment[]>([]); // State for comments
  const [newComment, setNewComment] = useState<string>(""); // State for the new comment
  const [formError, setFormError] = useState<string>(""); // Error handling state

  // Set background image for the body
  useEffect(() => {
    document.body.style.backgroundImage = "url('background image.jpeg')"; // Replace with your image URL
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    // Clean up effect
    return () => {
      document.body.style.backgroundImage = ""; // Reset background on unmount
    };
  }, []);

  // Fetch users from the Flask API when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/"); // Replace with actual Flask URL for users
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:5000/comments"); // Replace with actual Flask URL for comments
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchUsers();
    fetchComments(); // Fetch comments along with users
  }, []);

  // Handle selecting a user from the list
  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  // Handle form input changes for the comment
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  // Handle comment submission
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) {
      setFormError("Please select a user to comment.");
      return;
    }
    if (!newComment.trim()) {
      setFormError("Comment cannot be empty.");
      return;
    }

    // POST the new comment to the server
    fetch("http://localhost:5000/add_comment", {
      // Replace with actual API endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: selectedUser.name,
        comment: newComment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the new comment to the state after successful submission
        setComments([...comments, data]);
        setNewComment("");
        setFormError("");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <div style={styles.userListContainer}>
      <h2 style={styles.title}>Collaborators</h2>
      <ul style={styles.userList}>
        {users.map((user) => (
          <li
            key={user._id}
            style={styles.userItem}
            onClick={() => handleSelectUser(user)}
          >
            <img
              src={user.profilePicture || "https://via.placeholder.com/50"}
              alt={`${user.name}'s profile`}
              style={styles.profilePicture}
            />
            <span style={styles.userName}>{user.name}</span>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div style={styles.commentSection}>
          <h3 style={styles.commentTitle}>Comment as {selectedUser.name}</h3>
          <form onSubmit={handleSubmitComment} style={styles.form}>
            <input
              type="text"
              placeholder="Enter your comment"
              value={newComment}
              onChange={handleCommentChange}
              style={styles.input}
            />
            <button type="submit" style={styles.submitButton}>
              Submit Comment
            </button>
          </form>
          {formError && <p style={styles.error}>{formError}</p>}
        </div>
      )}

      {/* Displaying comments from the MongoDB database */}
      <div style={styles.commentListContainer}>
        <h2 style={styles.commentListTitle}>Comments</h2>
        <ul style={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment._id} style={styles.commentItem}>
              <strong style={styles.commentUsername}>
                {comment.username}:
              </strong>{" "}
              <span style={styles.commentText}>{comment.comment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  userListContainer: {
    background: "linear-gradient(to right, #005bea, #00c6fb)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "700px",
    margin: "40px auto",
    color: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  userList: {
    listStyle: "none",
    padding: 0,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    color: "#333",
  },
  profilePicture: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  userName: {
    fontSize: "18px",
    fontWeight: "500",
    color: "black", // Change the username text color to black
  },
  commentSection: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    color: "#333",
  },
  commentTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  submitButton: {
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  commentListContainer: {
    marginTop: "30px",
  },
  commentListTitle: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  commentList: {
    listStyle: "none",
    padding: 0,
  },
  commentItem: {
    backgroundColor: "#f1f1f1",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  commentUsername: {
    fontWeight: "bold",
    color: "black", // Change the username text color to black
  },
  commentText: {
    marginLeft: "10px",
    color: "black", // Change the comment text color to black
  },
};

export default UserList;
