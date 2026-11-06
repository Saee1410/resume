import { motion } from "framer-motion";
import Saee from "../assets/saeee.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 bg-[#05000d] text-white overflow-hidden"
      >
        {/* Background Purple Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <motion.div
          className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="w-10 h-[2px] bg-[#a855f7]"></span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
            >
              I'm <span className="text-white">Sai Vijay</span>
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe]">
                Bhosale
              </span>

              <span className="text-[#a855f7]">.</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-3xl font-semibold text-slate-300 mb-8 flex items-center justify-center lg:justify-start gap-3"
            >
              Full Stack Developer
              <span className="hidden md:inline text-[#a855f7]/40">
                | Software Engineer
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 max-w-xl text-base md:text-lg mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Full Stack Developer passionate about turning ideas into powerful
              web applications.
            </motion.p>

            {/* Projects Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
            >
              <button
                onClick={() => navigate("/projects")}
                className="group relative px-10 py-4 bg-[#a855f7] text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] uppercase tracking-widest"
              >
                Projects
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PURPLE NEON IMAGE OVAL */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Pulsing Aura */}
              <div className="absolute -inset-6 border border-[#a855f7]/20 rounded-[50%] animate-[pulse_3s_infinite]"></div>

              {/* Secondary Glow Border */}
              <div className="absolute -inset-3 border-2 border-[#a855f7]/40 rounded-[50%] blur-[2px]"></div>

              {/* Primary Border */}
              <div className="absolute -inset-2 border-2 border-[#a855f7] rounded-[50%] shadow-[0_0_40px_rgba(168,85,247,0.3)]"></div>

              {/* Image Container */}
              <div className="relative w-64 h-[340px] md:w-80 md:h-[420px] bg-[#111] rounded-[50%] overflow-hidden border-4 border-[#10091a] z-10">
                <img
                  src={Saee}
                  alt="Sai Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Dot */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#a855f7] rounded-full blur-md animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;


// import { motion } from 'framer-motion';
// import Saee from '../assets/saeee.jpg'; 
// import { useNavigate } from "react-router-dom";

// import Navbar from '../components/Navbar';

// const Home = () => {
//   const navigate = useNavigate();
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 bg-[#050005] text-white overflow-hidden">
      
//       {/* Background Neon Pink Glows - Ya mule premium look yeto */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ff007f]/10 rounded-full blur-[130px] pointer-events-none"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#ff007f]/10 rounded-full blur-[130px] pointer-events-none"></div>

//       <motion.div 
//         className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* LEFT SIDE: TEXT CONTENT */}
//         <div className="text-center lg:text-left">
//           <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-4">
//             <span className="w-10 h-[2px] bg-[#ff007f]"></span>
           
//           </motion.div>
          
//           <motion.h1 
//             variants={itemVariants} 
//             className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
//           >
//             I'm <span className="text-white">Sai Vijay</span><br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#ff66b2]">Bhosale</span><span className="text-[#ff007f]">.</span>
//           </motion.h1>
          
//           <motion.h2 
//             variants={itemVariants} 
//             className="text-xl md:text-3xl font-semibold text-slate-300 mb-8 flex items-center justify-center lg:justify-start gap-3"
//           >
//             Full Stack Developer <span className="hidden md:inline text-[#ff007f]/30">| Software Engineer</span>
//           </motion.h2>
          
//           <motion.p 
//             variants={itemVariants} 
//             className="text-slate-400 max-w-xl text-base md:text-lg mb-10 leading-relaxed mx-auto lg:mx-0"
//           >
//             Full Stack Developer passionate about turning ideas into powerful web applications.<br></br>


//           </motion.p>

//           {/* Buttons & Socials */}
//           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
//            <button
//   onClick={() => navigate("/projects")}
//   className="group relative px-10 py-4 bg-[#ff007f] text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,0,127,0.4)] hover:shadow-[0_0_50px_rgba(255,0,127,0.6)] uppercase tracking-widest"
// >
//   Projects
// </button>
            
//             {/* <div className="flex gap-8 text-2xl text-slate-400">
//               <a href="#" className="hover:text-[#ff007f] transition-all transform hover:-translate-y-2"><FiGithub /></a>
//               <a href="#" className="hover:text-[#ff007f] transition-all transform hover:-translate-y-2"><FiLinkedin /></a>
//               <a href="#" className="hover:text-[#ff007f] transition-all transform hover:-translate-y-2"><FiTwitter /></a>
//             </div> */}
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE: PINK NEON IMAGE OVAL */}
//         <motion.div 
//           className="flex justify-center lg:justify-end"
//           variants={itemVariants}
//         >
//           <div className="relative">
//             {/* Pulsing Aura */}
//             <div className="absolute -inset-6 border border-[#ff007f]/20 rounded-[50%] animate-[pulse_3s_infinite]"></div>
            
//             {/* Secondary Glow Border */}
//             <div className="absolute -inset-3 border-2 border-[#ff007f]/40 rounded-[50%] blur-[2px]"></div>
            
//             {/* Primary Border */}
//             <div className="absolute -inset-2 border-2 border-[#ff007f] rounded-[50%] shadow-[0_0_40px_rgba(255,0,127,0.3)]"></div>
            
//             {/* Image Container */}
//             <div className="relative w-64 h-[340px] md:w-80 md:h-[420px] bg-[#111] rounded-[50%] overflow-hidden border-4 border-[#0a0a0a] z-10">
//               <img 
//                 src={Saee}
//                 alt="Sai Profile" 
//                 className="w-full h-full object-cover" 
//               />
//             </div>

//             {/* Decorative Dot */}
//             <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#ff007f] rounded-full blur-md animate-bounce"></div>
//           </div>
//         </motion.div>

//       </motion.div>
//     </section>
//     </>
//   );
// };

// export default Home;


