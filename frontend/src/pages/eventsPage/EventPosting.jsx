import { useState } from "react";
import {useEventPostMutation} from '../../redux/api/events.ApiSlice.js'
import { redirect, useNavigate } from "react-router";
import Loader from '../../components/Loader.jsx'
function EventPosting() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [eventMode, setEventMode] = useState("Online");
  const [joiningLink, setJoiningLink] = useState("");

  const [postEvent ,{isLoading}] = useEventPostMutation();
  // console.log(postEvent)
  const navigate =useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const eventData = {
      title ,
      about ,
      organiser,
      eventMode,
      joiningLink
    }
    try {
      const result = await postEvent(eventData).unwrap();
      if(result){
        navigate('/getAllProjects')
      }
      
    } catch (error) {
      console.error("there is some error while posting the event from frontend ",error)
    }

  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Post an Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="About the Event"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <input
          type="text"
          placeholder="Organiser Name"
          value={organiser}
          onChange={(e) => setOrganiser(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          value={eventMode}
          onChange={(e) => setEventMode(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>
        <input
          type="url"
          placeholder="Joining Link (if Online)"
          value={joiningLink}
          onChange={(e) => setJoiningLink(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Post Event
        </button>
      </form>
      {isLoading && <Loader/>}
    </div>
  );
}

export default EventPosting;
