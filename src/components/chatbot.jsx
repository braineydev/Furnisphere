import React, { useState } from "react";
import Navcomponent from "./Navcomponent";
import Footer from "./Footer";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending messages
  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" }, // Add the user's message
        { text: "Let me get back to you on that!", sender: "bot" }, // Simulate bot response
      ]);
      setInput(""); // Clear input after sending
    }
  };

  return (
    <div>
      <Navcomponent></Navcomponent>
      <div
        style={{
          maxWidth: "600px", // Set a max width for the chatbot container
          margin: "2rem auto",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9", // Light background color
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          height: "80vh", // Moderate height for the chat container
        }}
      >
        <div
          style={{
            backgroundColor: "#001f3d", // Darker navy blue header
            color: "#fff",
            padding: "12px",
            textAlign: "center",
            borderRadius: "8px",
            fontSize: "1.3rem", // Header font size
          }}
        >
          AI Chatbot
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "15px",
            marginTop: "10px",
            backgroundColor: "#fff", // White background for chat area
            borderRadius: "8px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                maxWidth: "80%", // Set max width for message bubbles
                marginBottom: "10px",
                padding: "10px 15px",
                borderRadius: "12px",
                fontSize: "1rem", // Smaller font size for simplicity
                backgroundColor: msg.sender === "user" ? "#001f3d" : "#e0e0e0", // Darker navy blue for user and light gray for bot
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                textAlign: msg.sender === "user" ? "right" : "left",
                color: msg.sender === "user" ? "#fff" : "#000", // White text for user, black for bot
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px", // Spacing between input and send button
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              width: "80%",
              padding: "10px", // Padding for input field
              borderRadius: "20px", // Rounded corners for input
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
              backgroundColor: "#f1f1f1", // Light background for input
              color: "#333", // Dark text for input
            }}
          />
          <button
            onClick={handleSend}
            style={{
              backgroundColor: "#001f3d", // Darker navy blue button
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "20px", // Rounded button
              fontSize: "1rem",
              cursor: "pointer",
              marginLeft: "10px", // Spacing between button and input
            }}
          >
            Send
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Chatbot;
