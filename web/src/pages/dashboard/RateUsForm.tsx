// import { useState } from "react";
// import axios from "axios"; // Make sure Axios is configured to point to the Flask backend

// const RateUsForm = () => {
//   const [name, setName] = useState("");
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !rating || !feedback) {
//       setError("Please provide your name, select a rating, and give feedback.");
//       return;
//     }
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/submit-feedback",
//         {
//           name,
//           rating,
//           feedback,
//         }
//       ); // Adjust backend URL if needed
//       const result = response.data;

//       if (result.status === 1) {
//         setMessage("Thank you for your feedback!");
//         setName(""); // Clear the name field
//         setRating(0); // Reset the rating
//         setFeedback(""); // Clear the feedback field
//       } else {
//         setError(result.msg || "Failed to submit feedback.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   // Function to handle hovering over stars
//   const handleHover = (rate) => {
//     setHoverRating(rate);
//   };

//   // Function to handle click on stars
//   const handleClick = (rate) => {
//     setRating(rate);
//   };

//   // Tooltip to display the rating text
//   const getRatingText = (rate) => {
//     switch (rate) {
//       case 1:
//         return "Very Poor";
//       case 2:
//         return "Poor";
//       case 3:
//         return "Average";
//       case 4:
//         return "Good";
//       case 5:
//         return "Excellent";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <h1 style={styles.title}>Rate Us</h1>
//       <p style={styles.welcomeText}>
//         We value your feedback! Please rate your experience and leave a comment.
//       </p>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         {/* Name Input Field */}
//         <div style={styles.inputGroup}>
//           <label style={styles.label}>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               style={styles.input}
//               placeholder="Your Name"
//             />
//           </label>
//         </div>

//         {/* Rating Section with Tooltip and Hover */}
//         <div style={styles.ratingGroup}>
//           <span style={styles.label}>Your Rating:</span>
//           <div style={styles.starsContainer}>
//             {[1, 2, 3, 4, 5].map((rate) => (
//               <div
//                 key={rate}
//                 onClick={() => handleClick(rate)}
//                 onMouseEnter={() => handleHover(rate)}
//                 onMouseLeave={() => setHoverRating(0)}
//                 style={{
//                   ...styles.star,
//                   color:
//                     rating >= rate || hoverRating >= rate ? "#ffc107" : "#ddd",
//                 }}
//                 title={getRatingText(rate)}
//               >
//                 ★
//               </div>
//             ))}
//           </div>
//           <p style={styles.ratingText}>
//             {hoverRating || rating ? getRatingText(hoverRating || rating) : ""}
//           </p>
//         </div>

//         {/* Feedback Section */}
//         <div style={styles.inputGroup}>
//           <label style={styles.label}>
//             Feedback:
//             <textarea
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               style={styles.textarea}
//               placeholder="Your Feedback"
//             />
//           </label>
//         </div>

//         {/* Error or Success Message */}
//         {error && <p style={styles.error}>{error}</p>}
//         {message && <p style={styles.success}>{message}</p>}

//         {/* Submit Button */}
//         <button type="submit" style={styles.actionButton}>
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// // Updated Styles to match dashboard.tsx and improved rating design
// const styles = {
//   dashboardContainer: {
//     background: "linear-gradient(to right, #4facfe, #00f2fe)",
//     padding: "30px",
//     borderRadius: "15px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
//     maxWidth: "600px",
//     margin: "40px auto",
//     textAlign: "center" as const,
//     color: "#fff",
//   },
//   title: {
//     fontSize: "30px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//   },
//   welcomeText: {
//     fontSize: "18px",
//     marginBottom: "30px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "20px",
//   },
//   ratingGroup: {
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   starsContainer: {
//     display: "flex",
//     gap: "10px",
//     marginTop: "10px",
//   },
//   star: {
//     cursor: "pointer",
//     fontSize: "40px",
//     transition: "color 0.3s ease, transform 0.3s ease",
//   },
//   ratingText: {
//     marginTop: "10px",
//     fontSize: "18px",
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//   },
//   textarea: {
//     resize: "vertical",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     minHeight: "100px",
//   },
//   error: {
//     color: "red",
//   },
//   success: {
//     color: "green",
//   },
//   actionButton: {
//     marginTop: "20px",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#fff",
//     color: "#4facfe",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s, color 0.3s",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   actionButtonHover: {
//     backgroundColor: "#4facfe",
//     color: "#fff",
//   },
// };

// export default RateUsForm;
import { useState } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components"; // Import styled-components

// Global style for background image
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('feedback image.png'); /* Path to your background image */
    background-size: cover; /* Cover the entire background */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
  }
`;

const RateUsForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !rating || !feedback) {
      setError("Please provide your name, select a rating, and give feedback.");
      return;
    }
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/submit-feedback",
        {
          name,
          rating,
          feedback,
        }
      ); // Adjust backend URL if needed
      const result = response.data;

      if (result.status === 1) {
        setMessage("Thank you for your feedback!");
        setName(""); // Clear the name field
        setRating(0); // Reset the rating
        setFeedback(""); // Clear the feedback field
      } else {
        setError(result.msg || "Failed to submit feedback.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  // Function to handle hovering over stars
  const handleHover = (rate) => {
    setHoverRating(rate);
  };

  // Function to handle click on stars
  const handleClick = (rate) => {
    setRating(rate);
  };

  // Tooltip to display the rating text
  const getRatingText = (rate) => {
    switch (rate) {
      case 1:
        return "Very Poor";
      case 2:
        return "Poor";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Add the global styles here */}
      <div style={styles.dashboardContainer}>
        <h1 style={styles.title}>Rate Us</h1>
        <p style={styles.welcomeText}>
          We value your feedback! Please rate your experience and leave a comment.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Input Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                placeholder="Your Name"
              />
            </label>
          </div>

          {/* Rating Section with Tooltip and Hover */}
          <div style={styles.ratingGroup}>
            <span style={styles.label}>Your Rating:</span>
            <div style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((rate) => (
                <div
                  key={rate}
                  onClick={() => handleClick(rate)}
                  onMouseEnter={() => handleHover(rate)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    ...styles.star,
                    color:
                      rating >= rate || hoverRating >= rate ? "#ffc107" : "#ddd",
                  }}
                  title={getRatingText(rate)}
                >
                  ★
                </div>
              ))}
            </div>
            <p style={styles.ratingText}>
              {hoverRating || rating ? getRatingText(hoverRating || rating) : ""}
            </p>
          </div>

          {/* Feedback Section */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Feedback:
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                style={styles.textarea}
                placeholder="Your Feedback"
              />
            </label>
          </div>

          {/* Error or Success Message */}
          {error && <p style={styles.error}>{error}</p>}
          {message && <p style={styles.success}>{message}</p>}

          {/* Submit Button */}
          <button type="submit" style={styles.actionButton}>
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
};

// Updated Styles to match dashboard.tsx and improved rating design
const styles = {
  dashboardContainer: {
    background: "linear-gradient(to right, #005bea, #00c6fb)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center" as const,
    color: "#fff",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  welcomeText: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  ratingGroup: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    marginBottom: "20px",
  },
  starsContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  star: {
    cursor: "pointer",
    fontSize: "40px",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  ratingText: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#fff",
    fontWeight: "bold",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    resize: "vertical",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    minHeight: "100px",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
  actionButton: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#4facfe",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default RateUsForm;
