// import React from 'react'
// import { motion} from "framer-motion"
// import { useEffect} from 'react'
// import { useInView } from 'react-intersection-observer'
// const Hero = () => {
//     const container = {
//         show:{
//             transition:{
//                 staggerChildren:0.2
//             }
//         }

//     }
//     const cards = {
//         hidden:{opacity:0,y:100},
//         show:{
//             opacity:1,
//             y:0,
//             transition:{
//                 ease:'easeInOut',
//                 duration:2
//             }
//         }
//     }
//     const { inView,ref } = useInView()
//     useEffect(() =>{
        
//     }, [inView])
//     return (
//         <motion.div ref={ref} className='mt-40 px-10 w-full rounded '
//         initial='hidden'
//         exit='exit'
//         variants={container}
//         whileInView='show'
//         viewport={{once:false}}
//         >
//             <motion.div
//             variants={cards}
//             className='bg-red-500 rounded h-40 text-white'>
//                 hi
//             </motion.div>
//         </motion.div>
        
        
//     )
// }

// export default Hero
