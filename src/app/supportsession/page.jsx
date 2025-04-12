"use client";
import { useState, useEffect, useRef } from "react";
import SimplePeer from "simple-peer"; // Import simple-peer

export default function VidyaSetuSupportSession() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "scribe",
      text: "नमस्ते Rahul! I'm Dr. Anjali Patel. I understand you need help with Calculus Integration problems. Let's start with the fundamentals.",
      time: "10:30 AM",
    },
    {
      sender: "user",
      text: "Thank you, ma'am. I'm struggling with indefinite integrals, especially substitution methods for trigonometric functions.",
      time: "10:32 AM",
    },
    {
      sender: "scribe",
      text: "Perfect, Rahul. Let's tackle that. For trigonometric substitutions, remember that:\n∫sin²(x) dx = ½[x - sin(x)cos(x)]",
      time: "10:33 AM",
    },
    {
      sender: "user",
      text: "I see. Can we work through problem #5 from our textbook chapter on integration by parts?",
      time: "10:35 AM",
    },
  ]);
  const [localStream, setLocalStream] = useState(null); // For your video/audio
  const [remoteStream, setRemoteStream] = useState(null); // For the other person's video/audio
  const [callActive, setCallActive] = useState(false); // Track if a call is ongoing
  const peerRef = useRef(null); // Store the peer connection
  const localVideoRef = useRef(null); // Reference to your video element
  const remoteVideoRef = useRef(null); // Reference to the other person's video element

  // This runs when the page loads
  useEffect(() => {
    // Ask for permission to use your camera and microphone
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true }) // Get video and audio
      .then((stream) => {
        setLocalStream(stream); // Save your stream
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream; // Show your video
        }
      })
      .catch((err) => {
        alert("Error accessing camera/microphone: " + err); // Show error if something goes wrong
      });

    // Placeholder for signaling (we'll simulate this for now)
    // Normally, you'd connect to a WebSocket server here
    // For now, we'll assume manual signaling (you'll need a partner to test)

    // Clean up when leaving the page
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop()); // Stop camera/microphone
      }
      if (peerRef.current) peerRef.current.destroy(); // End the call
    };
  }, []); // Empty array means this runs once when the component loads

  // Start a call (initiator)
  const startCall = () => {
    const peer = new SimplePeer({
      initiator: true, // You start the call
      trickle: false, // Simplify signaling
      stream: localStream, // Your video/audio stream
    });

    peer.on("signal", (data) => {
      // This is the "offer" to send to the other person
      console.log("Signal data (send this to the other peer):", JSON.stringify(data));
      // In a real app, you'd send this via a server to the other peer
      // For now, copy this and give it to your partner manually
    });

    peer.on("stream", (stream) => {
      setRemoteStream(stream); // Get the other person's video/audio
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream; // Show their video
      }
    });

    peer.on("error", (err) => {
      console.error("Call error:", err);
    });

    peerRef.current = peer; // Save the peer connection
    setCallActive(true); // Mark call as active
  };

  // Answer a call (responder)
  const answerCall = (signal) => {
    const peer = new SimplePeer({
      initiator: false, // Other person started the call
      trickle: false,
      stream: localStream,
    });

    peer.on("signal", (data) => {
      // This is the "answer" to send back to the initiator
      console.log("Signal data (send this back):", JSON.stringify(data));
      // Send this back to the initiator manually for now
    });

    peer.on("stream", (stream) => {
      setRemoteStream(stream);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
    });

    peer.on("error", (err) => {
      console.error("Call error:", err);
    });

    peer.signal(signal); // Use the signal from the initiator
    peerRef.current = peer;
    setCallActive(true);
  };

  // End the call
  const endCall = () => {
    if (peerRef.current) peerRef.current.destroy(); // End the peer connection
    setCallActive(false); // Mark call as ended
    setRemoteStream(null); // Clear remote video
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop()); // Stop your camera/microphone
    }
  };

  // Send a chat message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: "user",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMsg]); // Add to your chat
      setNewMessage(""); // Clear input
      // TODO: Send via data channel when implemented
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen text-black">
      {/* Header */}
      <header className="bg-blue-900 text-white text-center py-4 text-xl font-bold">
        VidyaSetu Support Session
      </header>

      <div className="flex flex-grow">
        {/* Left sidebar - Session details */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="bg-blue-900 text-white p-3 font-bold">SESSION DETAILS</div>
          <div className="p-4 space-y-3">
            <div><span className="font-bold">Scribe:</span> Dr. Anjali Patel</div>
            <div><span className="font-bold">Subject:</span> Mathematics (Class XII)</div>
            <div><span className="font-bold">Topic:</span> Calculus - Integration</div>
            <div><span className="font-bold">Duration:</span> 60 minutes</div>
            <div><span className="font-bold">Started:</span> 10:30 AM, 08-Apr-2025</div>

            {/* Call buttons */}
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-6"
              onClick={startCall}
              disabled={callActive}
            >
              Audio Call
            </button>
            <button
              className="w-full bg-purple-600 text-white py-2 rounded-md"
              onClick={startCall}
              disabled={callActive}
            >
              Video Call
            </button>
            <button className="w-full border border-gray-300 bg-white text-gray-700 py-2 rounded-md">
              Share Screen
            </button>
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md"
              onClick={endCall}
              disabled={!callActive}
            >
              End Session
            </button>

            <div className="text-sm text-gray-500 mt-6">
              <div>Session ID: VDS-2025-04-08-001</div>
              <div>This session is being recorded</div>
              <div>for quality and training purposes</div>
            </div>
          </div>
        </aside>

        {/* Main chat and video area */}
        <main className="flex-grow flex flex-col bg-gray-50 p-4">
          <div className="flex mb-4">
            {/* Your video */}
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="w-1/4 rounded-lg"
            />
            {/* Other person's video */}
            <video
              ref={remoteVideoRef}
              autoPlay
              className="w-3/4 rounded-lg"
            />
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-md mb-4 ${message.sender === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-green-100 text-gray-800"
                      : "bg-blue-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs text-gray-500 mt-1 ${
                    message.sender === "user" ? "text-right" : ""
                  }`}
                >
                  {message.sender === "user"
                    ? `You - ${message.time}`
                    : `Dr. Anjali P - ${message.time}`}
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="flex items-center bg-white rounded-full border border-gray-300 pl-4 pr-1 py-1">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-grow outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleInputKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}