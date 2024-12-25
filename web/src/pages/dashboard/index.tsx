
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // useEffect to set background image on body
  useEffect(() => {
    document.body.style.backgroundImage = "url('background image.jpeg')"; // Replace with your image path
    document.body.style.backgroundSize = "cover"; // Cover the entire body
    document.body.style.backgroundPosition = "center"; // Center the image
    document.body.style.backgroundRepeat = "no-repeat"; // Do not repeat the image

    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.title}>Collaboration Dashboard</h2>
      <p style={styles.welcomeText}>
        Welcome to the collaboration platform. Explore the available options
        below:
      </p>
      <ul style={styles.navList}>
        {navLinks.map((link, index) => (
          <li style={styles.navItem} key={index}>
            <Link
              to={link.path}
              style={
                hoveredLink === link.name
                  ? { ...styles.navLink, ...styles.navLinkHover }
                  : styles.navLink
              }
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div style={styles.dropdownContainer}>
        <button
          style={
            hoveredButton
              ? { ...styles.actionButton, ...styles.buttonHover }
              : styles.actionButton
          }
          onMouseEnter={() => setHoveredButton(true)}
          onMouseLeave={() => setHoveredButton(false)}
          onClick={toggleDropdown}
        >
          Explore More Features
        </button>
        {dropdownVisible && (
          <div style={styles.dropdownMenu}>
            {moreFeatures.map((feature, index) => (
              <Link
                to={feature.path}
                key={index}
                style={styles.dropdownLink}
                onMouseEnter={() => setHoveredLink(feature.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {feature.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Links to display in navigation
const navLinks = [
  { name: "comments", label: "View Comments", path: "/comments" },
  { name: "users", label: "User List", path: "/users" },
  { name: "submit-comment", label: "Submit Comment", path: "/submit-comment" },
  { name: "rate-us", label: "Give Feedback", path: "/rate-us" },
];

// Additional features to display in dropdown
const moreFeatures = [
  { name: "analytics", label: "View Analytics", path: "/analytics" },
  { name: "help", label: "Help Center", path: "/help" },
];

const styles = {
  dashboardContainer: {
    background: "linear-gradient(to right, #005bea, #00c6fb)", // Semi-transparent background for contrast
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
  },
  title: {
    color: "#333",
    fontSize: "32px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  welcomeText: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15px",
  },
  navItem: {
    display: "block",
  },
  navLink: {
    color: "#fff",
    backgroundColor: "#008cba",
    textDecoration: "none",
    fontSize: "16px",
    padding: "12px 20px",
    borderRadius: "8px",
    transition: "background-color 0.3s, transform 0.3s",
    display: "block",
  },
  navLinkHover: {
    backgroundColor: "#005f73",
    transform: "scale(1.05)",
  },
  dropdownContainer: {
    position: "relative",
    display: "inline-block",
  },
  dropdownMenu: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    marginTop: "10px",
  },
  dropdownLink: {
    display: "block",
    padding: "10px 20px",
    color: "#005bea",
    textDecoration: "none",
    transition: "background-color 0.3s",
  },
  actionButton: {
    marginTop: "30px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#00d4ff",
    color: "#005bea",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s, transform 0.3s",
  },
  buttonHover: {
    backgroundColor: "#008cba",
    color: "#fff",
    transform: "scale(1.05)",
  },
};

export default Dashboard;
