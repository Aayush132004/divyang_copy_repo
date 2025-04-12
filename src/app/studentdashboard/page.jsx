// import React from 'react';
// import { 
//   FileText, 
//   Video, 
//   BarChart2, 
//   Settings, 
//   HelpCircle,
//   ChevronRight
// } from 'lucide-react';

// function App() {
//   const studentName = "Rahul";
//   const lastLogin = "08-Apr-2025, 09:45 AM";
  
//   const recentSessions = [
//     { subject: "Mathematics", date: "05-Apr-2025", status: "Completed" },
//     { subject: "Physics Lab Report", date: "01-Apr-2025", status: "Completed" }
//   ];

//   const upcomingExams = [
//     { subject: "CBSE Physics", date: "15-Apr-2025" },
//     { subject: "CBSE Chemistry", date: "20-Apr-2025" },
//     { subject: "CBSE Mathematics", date: "25-Apr-2025" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-black">
//       {/* Header */}
//       <header className="bg-[#FF9933] text-white p-4 text-center text-2xl font-semibold italic">
//         Student Dashboard
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 min-h-[calc(100vh-64px)] bg-white shadow-lg">
//           <div className="p-4 bg-navy text-white font-semibold">
//             MENU
//           </div>
          
//           <nav className="p-4 space-y-4">
//             <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
//               <FileText size={20} />
//               <span>My Requests</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
//               <Video size={20} />
//               <span>Sessions</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
//               <BarChart2 size={20} />
//               <span>Progress Report</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
//               <Settings size={20} />
//               <span>Settings</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
//               <HelpCircle size={20} />
//               <span>Help Support</span>
//             </a>
//           </nav>

//           <div className="absolute bottom-8 left-8">
//             <div className="bg-white border-2 border-[#FF9933] rounded-full p-4">
//               <h3 className="font-semibold">Rahul Sharma</h3>
//               <p className="text-sm text-gray-600">Class XII - CBSE</p>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="mb-8">
//             <h1 className="text-2xl font-semibold text-navy">Welcome, {studentName}!</h1>
//             <p className="text-gray-600">Last login: {lastLogin}</p>
//           </div>

//           {/* Support Request Card */}
//           <div className="bg-blue-50 p-6 rounded-lg mb-8">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-xl font-bold text-navy mb-2">Create New Support Request</h2>
//                 <p className="text-gray-600">Request assistance from a qualified scribe for your examinations or studies</p>
//               </div>
//               <button className="bg-[#FF9933] text-white px-6 py-2 rounded hover:bg-[#ff8c1a] transition-colors">
//                 Create Request
//               </button>
//             </div>
//           </div>

//           {/* Recent Sessions */}
//           <div className="mb-8">
//             <h2 className="text-xl font-bold text-navy mb-4">Recent Support Sessions</h2>
//             <div className="space-y-3">
//               {recentSessions.map((session, index) => (
//                 <div key={index} className="flex items-center space-x-2 text-gray-700">
//                   <ChevronRight size={16} className="text-[#FF9933]" />
//                   <span>{session.subject} - {session.date} - {session.status}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Upcoming Examinations */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-bold text-navy mb-4">Upcoming Examinations</h2>
//             <div className="space-y-3">
//               {upcomingExams.map((exam, index) => (
//                 <div key={index} className="flex items-center space-x-2 text-gray-700">
//                   <ChevronRight size={16} className="text-[#FF9933]" />
//                   <span>{exam.subject} - {exam.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

'use client';

import { useState } from "react";

export default function StudentDashboard() {
  const [lastLogin] = useState("08-Apr-2025, 09:45 AM");
  const [studentName] = useState("Rahul");
  const [studentFullName] = useState("Rahul Sharma");
  const [studentClass] = useState("Class XII - CBSE");
  
  const [recentSessions] = useState([
    { subject: "Mathematics", date: "05-Apr-2025", status: "Completed" },
    { subject: "Physics Lab Report", date: "01-Apr-2025", status: "Completed" }
  ]);
  
  const [upcomingExams] = useState([
    { subject: "CBSE Physics", date: "15-Apr-2025" },
    { subject: "CBSE Chemistry", date: "20-Apr-2025" },
    { subject: "CBSE Mathematics", date: "25-Apr-2025" }
  ]);

  const handleCreateRequest = () => {
    alert("Opening request form");
    // In a real app, this would navigate to a form or open a modal
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-orange-400 text-white text-center py-4 text-2xl font-bold">
        Student Dashboard
      </header>
      
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-100">
          {/* Menu header */}
          <div className="bg-blue-900 text-white p-4 font-bold">
            MENU
          </div>
          
          {/* Menu items */}
          <nav className="flex flex-col p-4 space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-gray-500">📋</span>
              <span>My Requests</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span className="text-gray-500">📊</span>
              <span>Sessions</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span className="text-gray-500">📈</span>
              <span>Progress Report</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span className="text-gray-500">⚙️</span>
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <span className="text-gray-500">🔍</span>
              <span>Help Support</span>
            </a>
          </nav>
          
          {/* Student info */}
          <div className="mt-12 p-4">
            <div className="border-2 border-orange-300 rounded-full p-3 text-center">
              <div className="font-bold">{studentFullName}</div>
              <div className="text-sm text-gray-600">{studentClass}</div>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-grow p-4">
          {/* Welcome section */}
          <div className="mb-4">
            <h1 className="text-xl text-blue-900 font-bold">Welcome, {studentName}!</h1>
            <p className="text-gray-600">Last login: {lastLogin}</p>
          </div>
          
          {/* Support Request section */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <h2 className="text-xl text-blue-900 font-bold mb-2">Create New Support Request</h2>
            <div className="flex justify-between items-center">
              <p>Request assistance from a qualified scribe for your examinations or studies</p>
              <button 
                onClick={handleCreateRequest}
                className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Create Request
              </button>
            </div>
          </div>
          
          {/* Recent Sessions section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h2 className="text-xl text-blue-900 font-bold mb-4">Recent Support Sessions</h2>
            {recentSessions.map((session, index) => (
              <div key={index} className="mb-2">
                {session.subject} - {session.date} - {session.status}
              </div>
            ))}
          </div>
          
          {/* Upcoming Exams section */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl text-blue-900 font-bold mb-4">Upcoming Examinations</h2>
            <ul className="list-disc pl-6">
              {upcomingExams.map((exam, index) => (
                <li key={index} className="mb-2">
                  {exam.subject} - {exam.date}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}