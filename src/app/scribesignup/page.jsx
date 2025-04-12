// // pages/scribe-registration.js
// "use client";

// import { useState } from 'react';

// export default function ScribeRegistration() {
//   const [formData, setFormData] = useState({
//     aadhaar: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     state: '',
//     district: '',
//     qualification: '',
//     institute: '',
//     subjects: [],
//     experience: '',
//     documents: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Here you would typically:
//     // 1. Create a FormData object for file uploads
//     // 2. Send the data to your API route
    
//     // try {
//     //   const formDataToSend = new FormData();
//     //   Object.keys(formData).forEach(key => {
//     //     if (key === 'documents' && formData[key]) {
//     //       formDataToSend.append(key, formData[key]);
//     //     } else {
//     //       formDataToSend.append(key, formData[key]);
//     //     }
//     //   });
      
//       // Example API call - uncomment and modify when ready to use
//       // const response = await fetch('/api/register-scribe', {
//       //   method: 'POST',
//       //   body: formDataToSend,
//       // });
      
//       // if (response.ok) {
//       //   // Handle success - redirect or show success message
//       //   console.log('Registration successful');
//       // } else {
//       //   // Handle error
//       //   console.error('Registration failed');
//       // }
      
//     //   console.log("Form submitted:", formData);
//     // } catch (error) {
//     //   console.error("Error submitting form:", error);
//     // }
//     console.log(formData);
//   };

//   return (
    
//     <div style={{height : "100vh"  , width : "100vw" , backgroundColor : "white" }} className=" h-100 w-100 bg-white text-black ">
//       <div className="bg-green-600 py-0.5  text-white text-center  text-3xl font-semibold">
//         Scribe Registration
//       </div>
      
//       <div className="p-6">
//         <form onSubmit={handleSubmit}>
//           {/* Personal Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Aadhaar Number*</label>
//                 <input
//                   type="text"
//                   name="aadhaar"
//                   placeholder="xxxx-xxxx-xxxx"
//                   value={formData.aadhaar}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Full Name (as per Aadhaar)*</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Mobile Number*</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="+91 xxxxxxxxxx"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">State*</label>
//                 <select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select State</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                   {/* More states would be added here */}
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">District*</label>
//                 <input
//                   name="district"
//                   value={formData.district}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
                 
//                   {/* Districts would be populated based on state */}
//                 </input>
//               </div>
//             </div>
//           </div>

//           {/* Professional Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Professional Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Highest Qualification*</label>
//                 <select
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select Qualification</option>
//                   <option value="High School">High School</option>
//                   <option value="Bachelors">Bachelor's Degree</option>
//                   <option value="Masters">Master's Degree</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Institute/University*</label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Subjects of Expertise*</label>
//                 <input
//                   type="text"
//                   name="subjects"
//                   placeholder="Select multiple if applicable"
//                   value={formData.subjects}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Teaching Experience (Years)*</label>
//                 <select
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select Experience</option>
//                   <option value="0-1">0-1 years</option>
//                   <option value="1-3">1-3 years</option>
//                   <option value="3-5">3-5 years</option>
//                   <option value="5+">More than 5 years</option>
//                 </select>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block mb-1">Upload Identification Qualification Documents*</label>
//                 <input
//                   type="file"
//                   name="documents"
//                   accept=".pdf"
//                   onChange={(e) => setFormData({...formData, documents: e.target.files[0]})}
//                   className="w-full p-2 border border-gray-300 rounded bg-white"
//                   required
//                 />
//                 <small className="text-gray-500">PDF format only (max 2MB)</small>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
//             >
//               Register as Scribe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
    
//   );
// }

// "use client";

// import { useState } from 'react';

// export default function ScribeRegistration() {
//   const [formData, setFormData] = useState({
//     aadhaar: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     state: '',
//     district: '',
//     qualification: '',
//     institute: '',
//     subjects: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="h-screen w-screen bg-white text-black">
//       <div className="bg-green-600 py-0.5 text-white text-center text-3xl font-semibold">
//         Scribe Registration
//       </div>
      
//       <div className="p-6">
//         <form onSubmit={handleSubmit}>
//           {/* Personal Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Aadhaar Number*</label>
//                 <input
//                   type="text"
//                   name="aadhaar"
//                   placeholder="xxxx-xxxx-xxxx"
//                   value={formData.aadhaar}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Full Name (as per Aadhaar)*</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Mobile Number*</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="+91 xxxxxxxxxx"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">State*</label>
//                 <select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select State</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">District*</label>
//                 <input
//                   name="district"
//                   value={formData.district}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Professional Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Professional Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Highest Qualification*</label>
//                 <select
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select Qualification</option>
//                   <option value="High School">High School</option>
//                   <option value="Bachelors">Bachelor's Degree</option>
//                   <option value="Masters">Master's Degree</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Institute/University*</label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block mb-1">Subjects of Expertise*</label>
//                 <input
//                   type="text"
//                   name="subjects"
//                   placeholder="Select multiple if applicable"
//                   value={formData.subjects}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
//             >
//               Register as Scribe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from 'react';

// export default function ScribeRegistration() {
//   const [formData, setFormData] = useState({
//     aadhaar: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     state: '',
//     district: '',
//     qualification: '',
//     institute: '',
//     subjects: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Password match check
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // You can now send the data
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen w-screen bg-white text-black">
//       <div className="bg-green-600 py-0.5 text-white text-center text-3xl font-semibold">
//         Scribe Registration
//       </div>
      
//       <div className="p-6">
//         <form onSubmit={handleSubmit}>
//           {/* Personal Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* ... other personal fields ... */}
//               <div>
//                 <label className="block mb-1">Aadhaar Number*</label>
//                 <input
//                   type="text"
//                   name="aadhaar"
//                   placeholder="xxxx-xxxx-xxxx"
//                   value={formData.aadhaar}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Full Name (as per Aadhaar)*</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Mobile Number*</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="+91 xxxxxxxxxx"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">State*</label>
//                 <select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select State</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">District*</label>
//                 <input
//                   name="district"
//                   value={formData.district}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Password*</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter a secure password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Re-enter Password*</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Re-enter your password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               {error && (
//                 <div className="md:col-span-2 text-red-600 font-semibold">
//                   {error}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Professional Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Professional Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Highest Qualification*</label>
//                 <select
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select Qualification</option>
//                   <option value="High School">High School</option>
//                   <option value="Bachelors">Bachelor's Degree</option>
//                   <option value="Masters">Master's Degree</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Institute/University*</label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block mb-1">Subjects of Expertise*</label>
//                 <input
//                   type="text"
//                   name="subjects"
//                   placeholder="e.g. Math, Science"
//                   value={formData.subjects}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
//             >
//               Register as Scribe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from 'react';

// export default function ScribeRegistration() {
//   const [formData, setFormData] = useState({
//     aadhaar: '',
//     fullName: '',
//     mobile: '',
//     email: '',
//     state: '',
//     district: '',
//     qualification: '',
//     institute: '',
//     subjects: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Password match check
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // You can now send the data
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen w-screen bg-white text-black">
//       <div className="bg-green-600 py-0.5 text-white text-center text-3xl font-semibold">
//         Scribe Registration
//       </div>
      
//       <div className="p-6">
//         <form onSubmit={handleSubmit}>
//           {/* Personal Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* ... other personal fields ... */}
//               <div>
//                 <label className="block mb-1">Aadhaar Number*</label>
//                 <input
//                   type="text"
//                   name="aadhaar"
//                   placeholder="xxxx-xxxx-xxxx"
//                   value={formData.aadhaar}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Full Name (as per Aadhaar)*</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Mobile Number*</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="+91 xxxxxxxxxx"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">State*</label>
//                 <select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select State</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">District*</label>
//                 <input
//                   name="district"
//                   value={formData.district}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Password*</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter a secure password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Re-enter Password*</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Re-enter your password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               {error && (
//                 <div className="md:col-span-2 text-red-600 font-semibold">
//                   {error}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Professional Information Section */}
//           <div className="mb-6">
//             <h2 className="text-blue-800 text-xl font-bold mb-4">Professional Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">Highest Qualification*</label>
//                 <select
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//                   required
//                 >
//                   <option value="">Select Qualification</option>
//                   <option value="High School">High School</option>
//                   <option value="Bachelors">Bachelor's Degree</option>
//                   <option value="Masters">Master's Degree</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Institute/University*</label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block mb-1">Subjects of Expertise*</label>
//                 <input
//                   type="text"
//                   name="subjects"
//                   placeholder="e.g. Math, Science"
//                   value={formData.subjects}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
//             >
//               Register as Scribe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from 'react';

export default function ScribeRegistration() {
  const [formData, setFormData] = useState({
    aadhaar: '',
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    qualification: '',
    institute: '',
    subjects: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // You can now send the data
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-screen bg-white text-black">
      <div className="bg-green-600 py-0.5 text-white text-center text-3xl font-semibold">
        Scribe Registration
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="mb-6">
            <h2 className="text-blue-800 text-xl font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ... other personal fields ... */}
              <div>
                <label className="block mb-1">Aadhaar Number*</label>
                <input
                  type="text"
                  name="aadhaar"
                  placeholder="xxxx-xxxx-xxxx"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Full Name (as per Aadhaar)*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Mobile Number*</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="+91 xxxxxxxxxx"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">State*</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">District*</label>
                <input
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter a secure password"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Re-enter Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {error && (
                <div className="md:col-span-2 text-red-600 font-semibold">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="mb-6">
            <h2 className="text-blue-800 text-xl font-bold mb-4">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Highest Qualification*</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelors">Bachelor's Degree</option>
                  <option value="Masters">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Institute/University*</label>
                <input
                  type="text"
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">Subjects of Expertise*</label>
                <input
                  type="text"
                  name="subjects"
                  placeholder="e.g. Math, Science"
                  value={formData.subjects}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded"
            >
              Register as Scribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
