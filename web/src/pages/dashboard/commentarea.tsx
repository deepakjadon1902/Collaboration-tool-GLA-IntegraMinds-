
import React, { useState } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

// Global style for background image
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('/comments image.jpg'); /* Path to your background image */
    background-size: cover; /* Cover the entire background */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
  }
`;

const FormContainer = styled.div`
  background: linear-gradient(to right, #005bea, #00c6fb);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  margin: 40px auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;

const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff; /* Change text color to white for better contrast */
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff; /* Change label color to white */
`;

const InputField = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const TextareaField = styled.textarea`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 100px;
  resize: none;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${({ type }) => (type === "error" ? "red" : "green")};
  font-weight: bold;
  text-align: center;
`;

const CommentForm = () => {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateData = (type, event) => {
    setData({ ...data, [type]: event.target.value });
  };

  const validateForm = () => {
    if (!data.username || !data.comment) {
      return "Both fields are required.";
    }
    return "";
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const formError = validateForm();
    if (formError) {
      setError(formError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/submit-comment", data);
      const result = response.data;

      if (result && result.status === 1) {
        setMessage("Comment submitted successfully!");
        setData({ username: "", comment: "" });
        setError("");
      } else {
        setError(result.msg || "Failed to submit comment.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Add the global styles here */}
      <FormContainer>
        <FormTitle>Leave a Comment</FormTitle>
        <Form onSubmit={handleCommentSubmit}>
          <InputGroup>
            <InputLabel>
              Name:
              <InputField
                type="text"
                value={data.username}
                onChange={(e) => updateData("username", e)}
                required
                placeholder="Enter your name"
              />
            </InputLabel>
          </InputGroup>
          <InputGroup>
            <InputLabel>
              Comment:
              <TextareaField
                value={data.comment}
                onChange={(e) => updateData("comment", e)}
                required
                placeholder="Type your comment here"
              />
            </InputLabel>
          </InputGroup>
          {error && <Message type="error">{error}</Message>}
          {message && <Message>{message}</Message>}
          <SubmitButton type="submit">Submit Comment</SubmitButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default CommentForm;
