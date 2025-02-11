import { Message } from "../models/message.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

// ✅ Send a new message
export const sendMessage = asyncHandler(async (req, res) => {
  console.log("Incoming request body:", req.body); // ✅ Debugging Log

  const { recipientId, text } = req.body; // ✅ Fix: Use recipientId instead of receiver
  const sender = req.user?._id; // ✅ Extract sender from authenticated user

  if (!sender) {
    throw new ApiError(401, "Unauthorized: User not authenticated");
  }

  if (!recipientId || !text) {
    console.error("Missing recipientId or text", { recipientId, text });
    throw new ApiError(400, "Receiver ID and text are required");
  }

  // ✅ Save message to DB
  const newMessage = new Message({ sender, receiver: recipientId, text });
  await newMessage.save();

  res.status(201).json(newMessage);
});


// ✅ Get messages for a specific user
export const getMessages = asyncHandler(async (req, res) => {
  const { userId } = req.params;  // User we are chatting with
  const currentUserId = req.user?._id; // Logged-in user

  if (!currentUserId) {
    throw new ApiError(401, "Unauthorized: User not authenticated");
  }

  if (!userId) {
    throw new ApiError(400, "User ID is required to fetch messages");
  }

  const messages = await Message.find({
    $or: [
      { sender: currentUserId, receiver: userId },
      { sender: userId, receiver: currentUserId },
    ],
  }).sort({ createdAt: 1 });

  res.status(200).json(messages);
});
