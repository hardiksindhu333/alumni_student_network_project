import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChatPage = () => {
  const { userId } = useParams(); // Chat partner's ID
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null); // Logged-in user
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    getCurrentUser();
    fetchMessages();
  }, [userId]);

  // ✅ Fetch Logged-in User
  const getCurrentUser = async () => {
    try {
      const response = await axios.get("http://localhost:5230/api/v1/users/getCurrentUser", {
        withCredentials: true,
      });
      setCurrentUserId(response.data.data._id);
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error.message);
    }
  };

  // ✅ Fetch Messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5230/api/messages/${userId}`,
        { withCredentials: true }
      );

      setMessages(response.data);
      scrollToBottom(); // Scroll down to latest messages
    } catch (error) {
      console.error("Error fetching messages:", error.response?.data || error.message);
    }
  };

  // ✅ Send Message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post(
        "http://localhost:5230/api/messages",
        { recipientId: userId, text: newMessage },
        { withCredentials: true }
      );

      setMessages((prev) => [...prev, response.data]);
      setNewMessage("");
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
    }
  };

  // ✅ Auto-scroll to Bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
        {/* Chat Messages Container */}
        <div
          ref={messagesContainerRef}
          className="h-96 overflow-y-auto p-3 border-b flex flex-col"
        >
          {messages.length > 0 ? (
            messages.map((msg) => {
              const isSentByCurrentUser = msg.sender === currentUserId;

              return (
                <div
                  key={msg._id}
                  className={`p-2 my-2 rounded-md max-w-xs ${
                    isSentByCurrentUser
                      ? "bg-blue-500 text-white self-end" // Messages sent by YOU (Right side)
                      : "bg-gray-200 text-black self-start" // Messages received (Left side)
                  }`}
                >
                  {msg.text}
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center">No messages yet.</p>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Field & Send Button */}
        <div className="flex mt-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
