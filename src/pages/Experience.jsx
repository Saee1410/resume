
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";

import fullstack from "../assets/fsd.jpg";
import Eskills from "../assets/ES.jpg";
import dsa from "../assets/dsa.jpg";

const data = [
  {
    title: "Full Stack Web Development",
    organization: "Apna College (by Shraddha Khapra)",
    duration: "8.5 Months",
    type: "Professional Certification",
    image: fullstack,
    link: "#",
    icon: <FiAward />,
    description: [
      "Mastered MERN Stack technologies including MongoDB, Express.js, React.js and Node.js.",
      "Developed practical projects with responsive UI and optimized application performance.",
      "Strengthened skills in JavaScript ES6+, Tailwind CSS and backend architecture.",
    ],
  },
  {
    title: "MERN Stack Intern",
    organization: "ElevanceSkills",
    duration: "2 Months",
    type: "Internship Experience",
    image: Eskills,
    link: "#",
    icon: <FiBriefcase />,
    description: [
      "Worked on a real-world project, InternArea, as part of the internship.",
      "Successfully completed a 5-day training program and all 6 assigned tasks according to the given requirements.",
      "Gained hands-on experience with new technologies and improved practical development skills.",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    organization: "Matoshri College of Engineering and Research Centre",
    duration: "As per Certificate",
    type: "College Certification",
    image: dsa,
    link: "#",
    icon: <FiAward />,
    description: [
      "Completed a Data Structures and Algorithms (DSA) program conducted by the college.",
      "Developed problem-solving and logical thinking skills through practical coding exercises.",
      "Strengthened understanding of fundamental data structures and algorithmic concepts.",
    ],
  },
];

const ExperienceCards = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-5 sm:px-8 bg-[#05000d] text-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c084fc]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[4px] uppercase text-[#c084fc]">
            My Journey
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
            Experience &
            <span className="bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#d8b4fe] bg-clip-text text-transparent">
              {" "}Credentials
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm sm:text-base leading-7">
            My learning journey, professional experience and certifications
            that have helped me grow as a developer.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] rounded-full mx-auto mt-7" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col bg-[#100a1a] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-[#a855f7]/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/20"
            >

              {/* Certificate Image */}
              <div className="relative h-60 sm:h-72 bg-[#150d20] overflow-hidden flex items-center justify-center p-5">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#100a1a]/70 via-transparent to-transparent pointer-events-none" />

                {/* Certificate Type Badge */}
                <div className="absolute top-5 left-5">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-[#a855f7]/30 text-xs font-semibold text-[#d8b4fe]">
                    {item.icon}
                    {item.type}
                  </span>
                </div>

                {/* Certificate Link */}
                {item.link && item.link !== "#" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-5 right-5 p-3 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white transition-all duration-300 shadow-lg shadow-purple-500/20"
                    aria-label="View certificate"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}

              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">

                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#c084fc] font-medium mt-2 text-sm sm:text-base">
                    {item.organization}
                  </p>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-wrap gap-4 mb-6 pb-5 border-b border-white/[0.08]">

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar className="text-[#a855f7]" />
                    {item.duration}
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiMapPin className="text-[#a855f7]" />
                    Remote / Online
                  </div>

                </div>

                {/* Description */}
                <ul className="space-y-4 flex-1">
                  {item.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-6"
                    >
                      <FiCheckCircle
                        className="text-[#a855f7] mt-1 shrink-0"
                        size={16}
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Label */}
                <div className="mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between">

                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    Professional Growth
                  </span>

                  <span className="text-[#c084fc] text-xs font-semibold">
                    {String(index + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
                  </span>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;




// import { motion } from "framer-motion";
// import {
//   FiExternalLink,
//   FiCalendar,
//   FiMapPin,
//   FiCheckCircle,
//   FiAward,
//   FiBriefcase,
// } from "react-icons/fi";

// import fullstack from "../assets/fsd.jpg";
// import Eskills from "../assets/ES.jpg";
// import dsa from "../assets/dsa.jpg";

// const data = [
//   {
//     title: "Full Stack Web Development",
//     organization: "Apna College (by Shraddha Khapra)",
//     duration: "8.5 Months",
//     type: "Professional Certification",
//     image: fullstack,
//     link: "#",
//     icon: <FiAward />,
//     description: [
//       "Mastered MERN Stack technologies including MongoDB, Express.js, React.js and Node.js.",
//       "Developed practical projects with responsive UI and optimized application performance.",
//       "Strengthened skills in JavaScript ES6+, Tailwind CSS and backend architecture.",
//     ],
//   },
//   {
//     title: "MERN Stack Intern",
//     organization: "ElevenceSkills",
//     duration: "2 Months",
//     type: "Internship Experience",
//     image: Eskills,
//     link: "#",
//     icon: <FiBriefcase />,
//     description: [
//       "Worked on a real-world project, InternArea, as part of the internship.",
//       "Successfully completed a 5-day training program and all 6 assigned tasks according to the given requirements.",
//       "Gained hands-on experience with new technologies and improved practical development skills.",
//     ],
//   },
//   {
//     title: "Data Structures & Algorithms",
//     organization: "Matoshri College of Engineering and Research Centre",
//     duration: "As per Certificate",
//     type: "College Certification",
//     image: dsa,
//     link: "#",
//     icon: <FiAward />,
//     description: [
//       "Completed a Data Structures and Algorithms (DSA) program conducted by the college.",
//       "Developed problem-solving and logical thinking skills through practical coding exercises.",
//       "Strengthened understanding of fundamental data structures and algorithmic concepts.",
//     ],
//   },
// ];

// const ExperienceCards = () => {
//   return (
//     <section
//       id="experience"
//       className="relative py-24 px-5 sm:px-8 bg-[#0a0a0a] text-white overflow-hidden"
//     >
//       {/* Background Decorations */}
//       <div className="absolute top-20 left-0 w-72 h-72 bg-[#ff2d75]/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-semibold tracking-[4px] uppercase text-[#ff6b9d]">
//             My Journey
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
//             Experience &
//             <span className="bg-gradient-to-r from-[#ff2d75] via-[#ff6b9d] to-rose-400 bg-clip-text text-transparent">
//               {" "}Credentials
//             </span>
//           </h2>

//           <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm sm:text-base leading-7">
//             My learning journey, professional experience and certifications
//             that have helped me grow as a developer.
//           </p>

//           <div className="w-20 h-1 bg-gradient-to-r from-[#ff2d75] to-rose-400 rounded-full mx-auto mt-7" />
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

//           {data.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className="group flex flex-col bg-[#111111] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-[#ff2d75]/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/20"
//             >

//               {/* Certificate Image */}
//               <div className="relative h-60 sm:h-72 bg-[#151515] overflow-hidden flex items-center justify-center p-5">

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.04]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent pointer-events-none" />

//                 {/* Certificate Type Badge */}
//                 <div className="absolute top-5 left-5">
//                   <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-[#ff2d75]/20 text-xs font-semibold text-pink-200">
//                     {item.icon}
//                     {item.type}
//                   </span>
//                 </div>

//                 {/* Certificate Link */}
//                 {item.link && item.link !== "#" && (
//                   <a
//                     href={item.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="absolute bottom-5 right-5 p-3 rounded-full bg-[#ff2d75] hover:bg-[#e91e63] text-white transition-all duration-300 shadow-lg shadow-pink-500/20"
//                     aria-label="View certificate"
//                   >
//                     <FiExternalLink size={18} />
//                   </a>
//                 )}

//               </div>

//               {/* Content */}
//               <div className="p-6 sm:p-8 flex flex-col flex-1">

//                 <div className="mb-5">
//                   <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff6b9d] transition-colors leading-snug">
//                     {item.title}
//                   </h3>

//                   <p className="text-[#ff6b9d] font-medium mt-2 text-sm sm:text-base">
//                     {item.organization}
//                   </p>
//                 </div>

//                 {/* Duration and Location */}
//                 <div className="flex flex-wrap gap-4 mb-6 pb-5 border-b border-white/[0.08]">

//                   <div className="flex items-center gap-2 text-gray-400 text-sm">
//                     <FiCalendar className="text-[#ff2d75]" />
//                     {item.duration}
//                   </div>

//                   <div className="flex items-center gap-2 text-gray-400 text-sm">
//                     <FiMapPin className="text-[#ff2d75]" />
//                     Remote / Online
//                   </div>

//                 </div>

//                 {/* Description */}
//                 <ul className="space-y-4 flex-1">
//                   {item.description.map((point, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-gray-400 text-sm leading-6"
//                     >
//                       <FiCheckCircle
//                         className="text-[#ff2d75] mt-1 shrink-0"
//                         size={16}
//                       />

//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Bottom Label */}
//                 <div className="mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between">

//                   <span className="text-xs text-gray-500 uppercase tracking-widest">
//                     Professional Growth
//                   </span>

//                   <span className="text-[#ff6b9d] text-xs font-semibold">
//                     {String(index + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
//                   </span>

//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceCards;
