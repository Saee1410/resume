
import { motion } from "framer-motion";
import CV from "../assets/cv.jpg";

function Resume() {
  return (
    <div className="min-h-screen bg-[#05000d] px-5 py-16 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#c084fc]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center mb-10 tracking-wide"
        >
          MY <span className="text-[#a855f7]">CV</span>
          <span className="text-[#c084fc]">.</span>
        </motion.h1>

        {/* RESUME IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="p-2 rounded-2xl border border-[#a855f7]/30 bg-[#100a1a] shadow-[0_0_35px_rgba(168,85,247,0.20)]">

            <img
              src={CV}
              alt="Sai Bhosale Resume"
              className="w-full max-w-4xl h-auto rounded-xl"
            />

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Resume;



// import { motion } from "framer-motion";
// import CV from "../assets/cv.jpg";

// function Resume() {
//   return (
//     <div className="min-h-screen bg-[#050005] px-5 py-16 text-white relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#ff007f]/10 rounded-full blur-[130px] pointer-events-none"></div>

//       <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#ff007f]/10 rounded-full blur-[130px] pointer-events-none"></div>

//       <div className="max-w-5xl mx-auto relative z-10">

//         {/* HEADING */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-black text-center mb-10 tracking-wide"
//         >
//           MY <span className="text-[#ff007f]">CV</span>
//           <span className="text-[#ff007f]">.</span>
//         </motion.h1>

//         {/* RESUME IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <div className="p-2 rounded-2xl border border-[#ff007f]/30 bg-[#0a0a0a] shadow-[0_0_35px_rgba(255,0,127,0.15)]">

//             <img
//               src={CV}
//               alt="Sai Bhosale Resume"
//               className="w-full max-w-4xl h-auto rounded-xl"
//             />

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default Resume;