
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Comment {
  id: number;
  text: string;
}

interface User {
  id: number;
  name: string;
}

const PageNotImplemented: React.FC = () => {
  const tools = [
    {
      name: "Asana",
      logo: "https://logo.clearbit.com/asana.com",
      url: "https://asana.com",
    },
    {
      name: "Jamboard",
      logo: "https://logo.clearbit.com/google.com",
      url: "https://jamboard.google.com",
    },
    {
      name: "Dropbox",
      logo: "https://logo.clearbit.com/dropbox.com",
      url: "https://www.dropbox.com",
    },
    {
      name: "Proofhub",
      logo: "https://logo.clearbit.com/proofhub.com",
      url: "https://www.proofhub.com",
    },
    {
      name: "LucidChart",
      logo: "https://logo.clearbit.com/lucidchart.com",
      url: "https://www.lucidchart.com",
    },
    {
      name: "Bit.ai",
      logo: "https://logo.clearbit.com/bit.ai",
      url: "https://bit.ai",
    },
    {
      name: "Notion",
      logo: "https://logo.clearbit.com/notion.so",
      url: "https://www.notion.so",
    },
    {
      name: "Microsoft 365",
      logo: "https://logo.clearbit.com/microsoft.com",
      url: "https://www.microsoft.com/en/microsoft-365",
    },
    {
      name: "Evernote",
      logo: "https://logo.clearbit.com/evernote.com",
      url: "https://evernote.com",
    },
    {
      name: "Zoom",
      logo: "https://logo.clearbit.com/zoom.us",
      url: "https://zoom.us",
    },
    {
      name: "ChatGPT",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/OpenAI_Logo_2022.svg/1024px-OpenAI_Logo_2022.svg.png",
      url: "https://chat.openai.com",
    },
    {
      name: "Slack",
      logo: "https://logo.clearbit.com/slack.com",
      url: "https://slack.com",
    },
  ];

  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center" as "center",
      alignItems: "center" as "center",
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      textAlign: "center" as "center",
      padding: "20px",
    },
    heading: {
      color: "#ffffff",
      fontSize: "36px",
      fontWeight: "bold" as "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      width: "100%",
      maxWidth: "1200px",
    },
    toolCard: {
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      textDecoration: "none",
      color: "inherit",
    },
    toolLogo: {
      width: "60px",
      height: "60px",
      objectFit: "contain" as "contain",
      marginBottom: "10px",
    },
    toolName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    footer: {
      marginTop: "30px",
      fontSize: "14px",
      color: "#fff",
    },
    sectionTitle: {
      color: "#fff",
      fontSize: "28px",
      marginTop: "40px",
    },
    input: {
      padding: "10px",
      width: "200px",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  };

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>The Most Common Collaborative Tools</h2>
      <div style={styles.grid}>
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.toolCard}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.transform = "scale(1)")
            }
          >
            <img src={tool.logo} alt={tool.name} style={styles.toolLogo} />
            <div style={styles.toolName}>{tool.name}</div>
          </a>
        ))}
      </div>

      <div>
  <h2>Collaboration Dashboard</h2>
  <p>Welcome to the collaboration dashboard. Choose an option:</p>
  <ul>
    <li>
      <Link to="/comments" target="_blank" rel="noopener noreferrer">
        Comments
      </Link>
    </li>
    <li>
      <Link to="/users" target="_blank" rel="noopener noreferrer">
        User List
      </Link>
    </li>
  </ul>
</div>

      <h2 style={styles.sectionTitle}>Comments Section</h2>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
          style={styles.input}
        />
        <button onClick={handleAddComment} style={styles.button}>
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <h2 style={styles.sectionTitle}>Collaborators</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div style={styles.footer}>Presented by CV-Crafter</div>
    </div>
  );
};

export default PageNotImplemented;
