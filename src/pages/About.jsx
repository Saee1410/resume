
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const skills = [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-blue.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-[#05000d] text-white px-6 overflow-hidden"
    >
      {/* Background Purple Glows */}
      <div className="absolute top-10 left-[-150px] w-[350px] h-[350px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="absolute bottom-10 right-[-150px] w-[350px] h-[350px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
        >
          ABOUT <span className="text-[#a855f7]">ME</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Narrative & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Hi, I’m{" "}
                <span className="text-white font-bold">Saee Bhosale</span> — a
                passionate Full Stack Developer currently pursuing a degree in{" "}
                <span className="text-[#a855f7]">
                  Computer Engineering
                </span>
                . I love transforming ideas into modern, responsive web
                applications.
              </p>

              <p>
                I enjoy working across the MERN stack, improving my coding
                skills, and building real-world projects. I’m always excited
                to learn and create.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sai-bhosale-8342ab298"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#a855f7] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Saee1410"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#c084fc] font-bold rounded-xl hover:bg-[#a855f7]/10 hover:scale-105 transition-all"
              >
                <FiGithub size={18} />
                GitHub
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/saeevijay/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 font-bold rounded-xl hover:text-[#c084fc] hover:border-[#a855f7] hover:scale-105 transition-all"
              >
                <SiLeetcode size={18} />
                LeetCode
              </a>

            </div>
          </motion.div>

          {/* Right Side: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-[#a855f7] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#a855f7]"></span>
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="p-5 border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#a855f7] hover:bg-[#a855f7]/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all group cursor-pointer"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_#a855f7] transition-all"
                  />

                  <p className="text-white font-mono text-xs text-center group-hover:text-[#c084fc] transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;


// import { motion } from 'framer-motion';
// import { FiGithub, FiLinkedin } from 'react-icons/fi';
// import { SiLeetcode } from 'react-icons/si';

// const About = () => {
//   const skills = [
//     { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//     { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
//     { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//     { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//     { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-blue.svg' },
//     { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//     { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//     { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//     { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//   ];

//   return (
//     <section id="about" className="py-20 bg-[#050005] text-white px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Title */}
//         <motion.h2 
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
//         >
//           ABOUT <span className="text-[#ff007f]">ME</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side: Narrative & Socials */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
//               <p>
//                 Hi, I’m <span className="text-white font-bold">Saee Bhosale</span> — a passionate Full Stack Developer currently pursuing a degree in <span className="text-[#ff007f]">Computer Engineering</span>. I love transforming ideas into modern, responsive web applications.
//               </p>
//               <p>
//                 I enjoy working across the MERN stack, improving my coding skills, and building real-world projects. I’m always excited to learn and create.
//               </p>
//             </div>

//             {/* Social Buttons */}
//             <div className='flex flex-wrap gap-4 pt-4'>
//               <a 
//   href="https://www.linkedin.com/in/sai-bhosale-8342ab298" 
//   target="_blank" 
//   rel="noreferrer" 
//   className="flex items-center gap-2 px-6 py-3 bg-[#ff007f] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:scale-105 transition-transform"
// >
//   <FiLinkedin size={20} /> LinkedIn
// </a>
//               <a href="https://github.com/Saee1410" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-[#ff007f] text-[#ff007f] font-bold rounded-xl hover:bg-[#ff007f]/10 transition-all">
//                 <FiGithub size={18} /> GitHub
//               </a>

//               <a href="https://leetcode.com/u/saeevijay/" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 font-bold rounded-xl hover:text-white hover:border-white transition-all">
//                 <SiLeetcode size={18} /> LeetCode
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Side: Skills Grid */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-8 text-[#ff007f] flex items-center gap-3">
//               <span className="w-8 h-[2px] bg-[#ff007f]"></span> Technical Skills
//             </h3>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {skills.map((skill, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ 
//                     scale: 1.1, 
//                     y: -5,
//                     transition: { type: "spring", stiffness: 300 } 
//                   }}
//                   className="p-5 border border-[#ff007f]/20 bg-[#ff007f]/5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#ff007f] transition-all group cursor-pointer"
//                 >
//                   <img 
//                     src={skill.logo} 
//                     alt={skill.name} 
//                     className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_#ff007f]" 
//                   />
//                   <p className="text-white font-mono text-xs text-center group-hover:text-[#ff007f]">
//                     {skill.name}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;