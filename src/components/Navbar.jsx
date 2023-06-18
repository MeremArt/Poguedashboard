// import React from "react";
// import {useState} from 'react'
// import Logo from "../assets/ebub.jpg";
// import { FcSearch, FcMenu } from "react-icons/fc";
// import { FaDiscord, FaTimes } from "react-icons/fa";
// import {motion} from 'framer-motion'
// const Navbar = ({toggle,settggl}) => {
//     const[isopen,setIsopen]=useState(false)
//   return (
//     <nav className="primary px-4 py-4 text-white fixed z-10 w-full top-0 right-0 bg- md:px-24">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-x-3">
//           <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
//           <h1 className="text-xl md:3xl">Porgue</h1>
//         </div>
//         <div className="flex items-center gap-x-3 md:gap-x-4">
//           <button onClick={() => settggl(!toggle)} className="px-2 bg-white py-1 rounded md:px-3">
//             <FcSearch size={23} />
//           </button>
//           <button className="flex items-center gap-2 border border-[gray] rounded px-1 py-1 md:px-2">
//             <span>
//               <FaDiscord />
//             </span>
//             sign in
//           </button>
//           <button className='block md:hidden' onClick={() => setIsopen(!isopen)}>{isopen ? <FaTimes size={26}/> : <FcMenu size={34} />}</button>
//         </div>
//         {isopen && <motion.ul initial={{x:'-100vw'}} animate={{x:0}} transition={{duration:1}} className='top-0 left-0 h-[50vh] px-2 py-3 gap-y-8 absolute rounded w-[50%] bg-red-500 md:hidden'>
//          <li>Home</li>
//          <li>About</li>
//          <li>Contact</li>
//          <li>Servive</li>
//        </motion.ul>}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
