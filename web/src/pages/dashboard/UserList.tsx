// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Define the interface for user data
// interface User {
//   _id: number;
//   name: string;
//   email: string;
//   Phonenumber: string;
// }

// // Main component for displaying users
// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Track hovered card

//   // Fetch users from the backend
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/getdata");
//         setUsers(response.data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div style={styles.userListContainer}>
//       <h1 style={styles.title}>Users</h1>
//       {loading && <p>Loading users...</p>}
//       {error && <p>{error}</p>}
//       <div style={styles.userList}>
//         {!loading && !error && users.length === 0 && <p>No users found</p>}
//         {users.map((user) => (
//           <div
//             key={user._id}
//             style={{
//               ...styles.userItem,
//               ...(hoveredCard === user._id ? styles.userItemHover : {}),
//             }}
//             onMouseEnter={() => setHoveredCard(user._id)} // Apply hover effect
//             onMouseLeave={() => setHoveredCard(null)} // Remove hover effect
//           >
//             <p>
//               <strong style={styles.commentUsername}>Name:</strong> {user.name}
//             </p>
//             <p>
//               <strong style={styles.commentUsername}>Email:</strong>{" "}
//               {user.email}
//             </p>
//             <p>
//               <strong style={styles.commentUsername}>Phone Number:</strong>{" "}
//               {user.Phonenumber}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Updated styles for the component
// const styles = {
//   userListContainer: {
//     background: "linear-gradient(to right, #4facfe, #00f2fe)",
//     padding: "30px",
//     borderRadius: "15px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
//     maxWidth: "800px",
//     margin: "40px auto",
//     textAlign: "center" as const,
//     color: "#fff",
//   },
//   title: {
//     fontSize: "30px",
//     fontWeight: "bold",
//     marginBottom: "30px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//   },
//   userList: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "20px",
//   },
//   userItem: {
//     backgroundColor: "#444",
//     padding: "20px",
//     borderRadius: "15px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     color: "#fff",
//     cursor: "pointer",
//     border: "2px solid #fc466b",
//     background:
//       "linear-gradient(135deg, rgba(63, 94, 251, 0.6), rgba(252, 70, 107, 0.6))",
//     position: "relative",
//     overflow: "hidden",
//     zIndex: 1,
//   },
//   userItemHover: {
//     transform: "scale(1.05)",
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
//     borderColor: "#3f5efb",
//   },
//   commentUsername: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "18px",
//   },
// };

// export default UserList; 
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the interface for user data
interface User {
  _id: number;
  name: string;
  email: string;
  Phonenumber: string;
}

// Main component for displaying users
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Track hovered card

  // Set the background image for the body
  useEffect(() => {
    document.body.style.backgroundImage = "url('background image.jpeg')"; // Replace with your image URL
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    // Clean up effect to reset body styles
    return () => {
      document.body.style.backgroundImage = ""; // Reset background on unmount
    };
  }, []);

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getdata");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={styles.userListContainer}>
      <h1 style={styles.title}>Users</h1>
      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <div style={styles.userList}>
        {!loading && !error && users.length === 0 && <p>No users found</p>}
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              ...styles.userItem,
              ...(hoveredCard === user._id ? styles.userItemHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(user._id)} // Apply hover effect
            onMouseLeave={() => setHoveredCard(null)} // Remove hover effect
          >
            <p>
              <strong style={styles.commentUsername}>Name:</strong> {user.name}
            </p>
            <p>
              <strong style={styles.commentUsername}>Email:</strong>{" "}
              {user.email}
            </p>
            <p>
              <strong style={styles.commentUsername}>Phone Number:</strong>{" "}
              {user.Phonenumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updated styles for the component
const styles = {
  userListContainer: {
    background: "linear-gradient(to right, #005bea, #00c6fb)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "800px",
    margin: "40px auto",
    textAlign: "center" as const,
    color: "#fff",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "30px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  userList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  userItem: {
    backgroundColor: "#444",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    color: "#fff",
    cursor: "pointer",
    border: "2px solid #fc466b",
    background:
      "linear-gradient(135deg, rgba(63, 94, 251, 0.6), rgba(252, 70, 107, 0.6))",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
  },
  userItemHover: {
    transform: "scale(1.05)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
    borderColor: "#3f5efb",
  },
  commentUsername: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default UserList;
