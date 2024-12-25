
import React, { useEffect } from "react";

const Analytics: React.FC = () => {
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
      <h2 style={styles.title}>View Analytics</h2>
      <p style={styles.description}>
        Here you can view analytics data related to your account.
      </p>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>User Engagement</h3>
        <div style={styles.card}>
          <p style={styles.stat}>
            Total Users: <strong>1,245</strong>
          </p>
          <p style={styles.stat}>
            Active Users: <strong>320</strong>
          </p>
          <p style={styles.stat}>
            New Signups This Month: <strong>150</strong>
          </p>
        </div>
        <div style={styles.chart}>
          <p style={styles.chartTitle}>User Engagement Over Time</p>
          <img
            src="https://via.placeholder.com/600x300.png?text=User+Engagement+Chart"
            alt="User Engagement Chart"
            style={styles.placeholderChart}
          />
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Sales Overview</h3>
        <div style={styles.card}>
          <p style={styles.stat}>
            Total Sales: <strong>$23,500</strong>
          </p>
          <p style={styles.stat}>
            Sales This Month: <strong>$5,000</strong>
          </p>
          <p style={styles.stat}>
            Average Order Value: <strong>$50</strong>
          </p>
        </div>
        <div style={styles.chart}>
          <p style={styles.chartTitle}>Sales Trend</p>
          <img
            src="https://via.placeholder.com/600x300.png?text=Sales+Trend+Chart"
            alt="Sales Trend Chart"
            style={styles.placeholderChart}
          />
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Traffic Sources</h3>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Organic Search:</strong>{" "}
              <span style={styles.percentage}>45%</span>
            </li>
            <li style={styles.listItem}>
              <strong>Direct Traffic:</strong>{" "}
              <span style={styles.percentage}>30%</span>
            </li>
            <li style={styles.listItem}>
              <strong>Referral Traffic:</strong>{" "}
              <span style={styles.percentage}>25%</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Recent Activity</h3>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li style={styles.listItem}>User John Doe signed up.</li>
            <li style={styles.listItem}>User Jane Smith made a purchase.</li>
            <li style={styles.listItem}>
              User Mark Johnson updated their profile.
            </li>
          </ul>
        </div>
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
    maxWidth: "800px",
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
  card: {
    padding: "10px",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  chart: {
    marginTop: "10px",
    padding: "10px",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    textAlign: "center",
  },
  chartTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  placeholderChart: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    maxWidth: "600px", // Limit the max width for better appearance
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  percentage: {
    float: "right",
    fontWeight: "bold",
    color: "#007bff",
  },
};

export default Analytics;
