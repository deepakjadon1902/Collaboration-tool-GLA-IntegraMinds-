

import React, { useEffect } from "react";

const HelpCenter: React.FC = () => {
  // Set the background image for the body
  useEffect(() => {
    document.body.style.backgroundImage = "url('background image.jpeg')"; // Change this to your desired image URL
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Help Center</h2>
      <p style={styles.description}>
        Here you can find help and support for various topics.
      </p>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Getting Started</h3>
        <p style={styles.stat}>
          To start using our platform, follow these steps:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Step 1:</strong> <em>Create an Account</em> - Click on the "Sign Up" button on the homepage and fill in your details.
          </li>
          <li>
            <strong>Step 2:</strong> <em>Verify Your Email</em> - Check your email for a verification link to activate your account.
          </li>
          <li>
            <strong>Step 3:</strong> <em>Complete Your Profile</em> - Log in and navigate to your profile settings to add more information.
          </li>
          <li>
            <strong>Step 4:</strong> <em>Explore Features</em> - Start exploring our features by visiting the dashboard.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Troubleshooting</h3>
        <p style={styles.stat}>
          If you encounter issues, try the following solutions:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Issue:</strong> Unable to log in. <br />
            <strong>Solution:</strong> Ensure that you have entered the correct username and password. If you've forgotten your password, click on "Forgot Password?" to reset it.
          </li>
          <li>
            <strong>Issue:</strong> Features not loading. <br />
            <strong>Solution:</strong> Clear your browser cache or try accessing the platform in incognito mode.
          </li>
          <li>
            <strong>Issue:</strong> Unable to submit a comment. <br />
            <strong>Solution:</strong> Make sure all required fields are filled out correctly before submission.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>FAQs</h3>
        <p style={styles.stat}>
          Frequently asked questions are addressed below:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Q: How can I reset my password?</strong> <br />
            <strong>A:</strong> Click on "Forgot Password?" on the login page and follow the instructions to reset your password.
          </li>
          <li>
            <strong>Q: Can I change my username?</strong> <br />
            <strong>A:</strong> Currently, usernames cannot be changed. If you need further assistance, please contact support.
          </li>
          <li>
            <strong>Q: How do I report a bug?</strong> <br />
            <strong>A:</strong> Please visit the "Contact Support" section below and fill out the form to report any issues.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Contact Support</h3>
        <p style={styles.stat}>
          For further assistance, you can contact our support team:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Email:</strong> support@CV-crafter.com
          </li>
          <li>
            <strong>Phone:</strong> +91 9194370081 & 8755600489.
          </li>
          <li>
            <strong>Support Hours:</strong> Monday - Friday, 9 AM - 5 PM (EST)
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "linear-gradient(to right, #005bea, #00c6fb)", // Slightly transparent background for better visibility
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "700px",
    margin: "50px auto",
    textAlign: "left",
  },
  title: {
    fontSize: "28px",
    marginBottom: "15px",
    color: "#005bea",
  },
  description: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  section: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#005bea",
  },
  stat: {
    marginBottom: "5px",
    fontSize: "16px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
};

export default HelpCenter;

