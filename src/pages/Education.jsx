import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Computer Engineering",
      institution:
        "Matoshri College of Engineering and Research Centre, Nashik",
      duration: "2023 — 2027",
      score: "9.14 CGPA",
      status: "Currently Pursuing",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Jana English School and Junior College, Saikhede",
      duration: "2022 — 2023",
      score: "61.67%",
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Janta Vidyalay, Karanjgaon",
      duration: "2020 — 2021",
      score: "86.60%",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 bg-[#05000d] text-white px-6 overflow-hidden"
    >
      {/* Background Purple Glows */}
      <div className="absolute top-10 left-[-150px] w-[350px] h-[350px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="absolute bottom-10 right-[-150px] w-[350px] h-[350px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-[#a855f7]/10 rounded-xl border border-[#a855f7]/30">
            <FiBookOpen className="text-[#a855f7] text-3xl" />
          </div>

          <h2 className="text-4xl font-black tracking-tight">
            MY <span className="text-[#a855f7]">EDUCATION</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#a855f7]/30 ml-4 md:ml-8">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#05000d] border-4 border-[#a855f7] rounded-full shadow-[0_0_12px_#a855f7]"></div>

              {/* Education Card */}
              <div className="group p-6 bg-[#a855f7]/5 border border-white/10 rounded-2xl hover:border-[#a855f7]/50 transition-all hover:bg-[#a855f7]/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] shadow-xl">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">

                  {/* Education Details */}
                  <div>
                    <span className="text-[#c084fc] font-mono text-sm font-bold tracking-widest uppercase">
                      {edu.duration}
                    </span>

                    <h3 className="text-2xl font-bold mt-1 group-hover:text-[#c084fc] transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="text-slate-400 font-medium mt-2">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score Tag */}
                  <div className="flex flex-col items-start md:items-end">
                    <div className="px-4 py-2 bg-[#a855f7] text-white rounded-lg font-black flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <FiAward />
                      {edu.score}
                    </div>

                    <span className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">
                      {edu.status}
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;





// import { motion } from 'framer-motion';
// import { FiBookOpen, FiAward } from 'react-icons/fi';

// const Education = () => {
//   const educationData = [
//     {
//       degree: "B.E. in Computer Engineering",
//       institution: "Matoshri College of Engineering and Research Centre, Nashik",
//       duration: "2023 — 2027",
//       score: "9.14 CGPA",
//       status: "Currently Pursuing"
//     },
//     {
//       degree: "Higher Secondary Certificate (12th)",
//       institution: "Jana English School and Junior College, Saikhede",
//       duration: "2022 — 2023",
//       score: "61.67%",
//       status: "Completed"
//     },
//     {
//       degree: "Secondary School Certificate (10th)",
//       institution: "Janta Vidyalay, Karanjgaon",
//       duration: "2020 — 2021",
//       score: "86.60%",
//       status: "Completed"
//     }
//   ];

//   return (
//     <section id="education" className="py-20 bg-[#050005] text-white px-6">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Section Heading */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex items-center gap-4 mb-16"
//         >
//           <div className="p-3 bg-[#ff007f]/10 rounded-xl border border-[#ff007f]/30">
//             <FiBookOpen className="text-[#ff007f] text-3xl" />
//           </div>
//           <h2 className="text-4xl font-black tracking-tight">
//             MY <span className="text-[#ff007f]">EDUCATION</span>
//           </h2>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative border-l-2 border-[#ff007f]/20 ml-4 md:ml-8">
//           {educationData.map((edu, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="mb-12 ml-8 relative"
//             >
//               {/* Timeline Dot */}
//               <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#050005] border-4 border-[#ff007f] rounded-full shadow-[0_0_10px_#ff007f]"></div>

//               <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#ff007f]/50 transition-all hover:bg-white/[0.07] shadow-xl">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
//                   <div>
//                     <span className="text-[#ff007f] font-mono text-sm font-bold tracking-widest uppercase">
//                       {edu.duration}
//                     </span>
//                     <h3 className="text-2xl font-bold mt-1 group-hover:text-[#ff007f] transition-colors">
//                       {edu.degree}
//                     </h3>
//                     <p className="text-slate-400 font-medium">{edu.institution}</p>
//                   </div>
                  
//                   {/* Score Tag */}
//                   <div className="flex flex-col items-end">
//                     <div className="px-4 py-2 bg-[#ff007f] text-white rounded-lg font-black flex items-center gap-2 shadow-[0_0_15px_#ff007f44]">
//                       <FiAward /> {edu.score}
//                     </div>
//                     <span className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">
//                       {edu.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;