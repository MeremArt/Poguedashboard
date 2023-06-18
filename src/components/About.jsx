// import React from "react";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Hero from "./Hero";
// const About = ({ toggle }) => {
//   const [users, setUsers] = useState([]);
//   const [searched, setSearched] = useState("");
//   const [content, setContent] = useState({
//     name: "",
//     email: "",
//     phone:"",
//     totalOrder: "",
//     totalSpent:"",
//     location:""
//   });

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   });

//   const handleChange = (e) => {
//     setSearched(e.target.value);
//   };
//   const handleSearch = (searchTerm) => {
//     setSearched(searchTerm.title);
//     console.log();
//     const new_constant = (prevcontent) => ({
//       ...prevcontent,
//       title: searchTerm.title,
//       img: searchTerm.thumbnailUrl,
//     });
//     setContent(new_constant);
//   };
//   return (
//     <main className="mb-10 px-4 ">
//       <motion.h1
//         initial={{ x: "100vw" }}
//         animate={{ x: 0 }}
//         transition={{ type: "tween", duration: 0.6 }}
//         className="text-5xl text-center font-semibold text-gray-300 mb-10"
//       >
//         Search. Raffle.
//         <br className="md:hidden" />{" "}
//         <span className="bg-gradient-to-r from-red-500 to-pink-300 font-semibold bg-clip-text text-transparent">
//           {" "}
//           Victory.
//         </span>
//       </motion.h1>
//       <p className="text-center mb-10 flex flex-col justify-center items-center max-w-sm mx-auto text-[gray]">
//         Experience the future of raffles, offering decentralized, transparent
//         draws and exciting prizes through blockchain technology.
//       </p>
//       {toggle && (
//         <div className="flex flex-col justify-center items-center max-w-[300px] mx-auto bg-[gray] px-3 py-2 rounded">
//           <motion.div
//             initial={{ y: "-100vh" }}
//             animate={{ y: 0 }}
//             transition={{ type: "tween", duration: 2 }}
//             className="flex "
//           >
//             <input
//               type="text"
//               placeholder="Search"
//               value={searched}
//               onChange={handleChange}
//               className="w-full border border-[gray] p-1 rounded outline-none"
//             />
//             <button
//               onClick={() => handleSearch(searched)}
//               className="ml-2 px-6 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded"
//             >
//               Search
//             </button>
//           </motion.div>
//           {searched && (
//             <div className="rounded px-3 py-1 overflow-y-auto text-white">
//               {users
//                 .filter((item) => {
//                   const SearchTerm = searched.toLowerCase();
//                   const Titles = item.title.toLowerCase();
//                   return (
//                     SearchTerm &&
//                     Titles.startsWith(SearchTerm) &&
//                     Titles !== SearchTerm
//                   );
//                 })
//                 .slice(0, 5)
//                 .map((item) => {
//                   return (
//                     <div
//                       className="cursor-pointer text-white m-2"
//                       onClick={() => handleSearch(item)}
//                       key={item.id}
//                     >
//                       {item.title}
//                     </div>
//                   );
//                 })}
//             </div>
//           )}
//         </div>
//       )}
//       <div className="flex flex-col mt-10 justify-center gap-y-3 md:flex-row text-white md:gap-x-3">
//         <button className="px-4 py-3 rounded-md bg-green-900 hover:transition hover:scale-105 ease-in-out duration-500 md:px-20">
//           Deploy our Discord bot
//         </button>
//         <button className="px-4 py-3 rounded bg-blue-700 hover:transition hover:scale-105 ease-in-out duration-500 md:px-20">
//           Join our Discord channel
//         </button>
//         <button className="px-4 py-3 rounded-md bg-green-900 hover:transition hover:scale-105 ease-in-out hover:duration-500 md:px-20">
//           Follow us on Twitter
//         </button>
//       </div>
//       {/* <motion.div
//       initial={{y:'100vh'}}
//       animate={{y:0}}
//       transition={{ease:'easeInOut', duration:2,delay:2}}
//        className='mt-10'>
//         <h2>{content.title}</h2>
//         <img src={content.img} alt='' className='w-80 h-80 object-contain rounded'/>
//       </motion.div> */}
//       <Hero />
//     </main>
//   );
// };

// export default About;
