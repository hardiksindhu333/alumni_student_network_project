import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Batches = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5230/api/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">All Users</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img 
                src={user.avatar || "/default-avatar.png"} 
                alt={user.username} 
                className="w-16 h-16 rounded-full border-2 border-gray-300 mb-3"
              />
              <h2 className="text-lg font-semibold">{user.username}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <button
                onClick={() => navigate(`/chat/${user._id}`)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Chat
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Batches;
