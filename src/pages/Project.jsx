import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import SaptapadiImg from "../assets/saptpadi.jpg";
import InternAreaImg from "../assets/internarea.jpg";
import DevMeetImg from "../assets/devmeet.jpg";

const projects = [
  {
    number: "01",
    title: "InternArea",
    category: "INTERNSHIP & JOB PLATFORM",
    description:
      "A platform for exploring internships and job opportunities, with authentication, search, filtering and dedicated admin features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Saee1410/InternArea-fe",
    live: "https://intern-area-fe.vercel.app",
    image: InternAreaImg,
    symbol: "IA",
    featured: true,
  },
  {
    number: "02",
    title: "DevMeet",
    category: "REAL-TIME CODING PLATFORM",
    description:
      "A collaborative technical interview platform designed around real-time communication, coding sessions and developer collaboration.",
    tech: ["React", "Node.js", "Socket.IO", "Redis"],
    github: "https://github.com/Saee1410",
    live: "https://devmeetown-nu.vercel.app/",
    image: DevMeetImg,
    symbol: "DM",
    featured: false,
  },
  {
    number: "03",
    title: "Saptapadi",
    category: "AI-POWERED WEDDING PLANNER",
    description:
      "An AI-powered wedding planning application with budget planning and a focus on simplifying wedding organization.",
    tech: ["React", "Express", "MongoDB", "Gemini AI"],
    github: "https://github.com/Saee1410/Saptpadi",
    live: "https://saptpadi-frontend.vercel.app/",
    image: SaptapadiImg,
    symbol: "SP",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 160,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 160,
    damping: 18,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (event) => {
    if (!cardRef.current || window.innerWidth < 768) return;

    const rect = cardRef.current.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={`group relative rounded-2xl border border-white/10 bg-[#100a1a] p-6 md:p-7 overflow-hidden transition-colors duration-500 hover:border-[#a855f7]/60 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Animated Gradient Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#a855f7]/15 blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Light Streak */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#a855f7]/10 to-transparent"
        whileHover={{ left: "150%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className="relative z-10">

        {/* Project Screenshot */}
        {project.image && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#150d20]"
          >
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="h-auto max-h-96 w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        )}

        {/* Project Number and Symbol */}
        <div className="mb-8 flex items-start justify-between">
          <span className="font-mono text-sm tracking-[0.3em] text-[#a855f7]">
            / PROJECT_{project.number}
          </span>

          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/30 bg-[#a855f7]/5 text-2xl font-black text-white shadow-[0_0_25px_rgba(168,85,247,0.12)]"
          >
            {project.symbol}
          </motion.div>
        </div>

        {/* Category */}
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mb-4 text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#c084fc] md:text-4xl">
          {project.title}
          <span className="ml-1 text-[#a855f7]">.</span>
        </h3>

        {/* Description */}
        <p className="mb-7 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-[#a855f7]/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#c084fc]"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#a855f7] px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#9333ea] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="text-xs text-slate-500">
              Live demo coming soon
            </span>
          )}

        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05000d] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#a855f7]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a855f7]">
            <span className="h-px w-10 bg-[#a855f7]" />
            My Work
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Featured{" "}
              <span className="text-[#a855f7]">Projects.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
              A selection of projects where I explore full-stack development,
              real-time systems and AI-powered applications.
            </p>

          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Building ideas into working applications{" "}
          <span className="text-[#a855f7]">✦</span>
        </motion.p>

      </div>
    </section>
  );
}



// import { useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import SaptapadiImg from "../assets/saptpadi.jpg";
// import InternAreaImg from "../assets/internarea.jpg";
// import DevMeetImg from "../assets/devmeet.jpg";

// const projects = [
//   {
//     number: "01",
//     title: "InternArea",
//     category: "INTERNSHIP & JOB PLATFORM",
//     description:
//       "A platform for exploring internships and job opportunities, with authentication, search, filtering and dedicated admin features.",
//     tech: ["React", "Node.js", "Express", "MongoDB"],
//     github: "https://github.com/Saee1410/InternArea-fe",
//     live: "https://intern-area-fe.vercel.app",
//     image: InternAreaImg,
//     symbol: "IA",
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "DevMeet",
//     category: "REAL-TIME CODING PLATFORM",
//     description:
//       "A collaborative technical interview platform designed around real-time communication, coding sessions and developer collaboration.",
//     tech: ["React", "Node.js", "Socket.IO", "Redis"],
//     github: "https://github.com/Saee1410",
//     live: "https://devmeetown-nu.vercel.app/",
//     image: DevMeetImg,
//     symbol: "DM",
//     featured: false,
//   },
//   {
//     number: "03",
//     title: "Saptapadi",
//     category: "AI-POWERED WEDDING PLANNER",
//     description:
//       "An AI-powered wedding planning application with budget planning and a focus on simplifying wedding organization.",
//     tech: ["React", "Express", "MongoDB", "Gemini AI"],
//     github: "https://github.com/Saee1410/Saptpadi",
//     live: "https://saptpadi-frontend.vercel.app/",
//     image: SaptapadiImg,
//     symbol: "SP",
//     featured: false,
//   },
// ];

// function ProjectCard({ project, index }) {
//   const cardRef = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springX = useSpring(x, {
//     stiffness: 160,
//     damping: 18,
//   });

//   const springY = useSpring(y, {
//     stiffness: 160,
//     damping: 18,
//   });

//   const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
//   const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

//   const handleMouseMove = (event) => {
//     if (!cardRef.current || window.innerWidth < 768) return;

//     const rect = cardRef.current.getBoundingClientRect();

//     x.set((event.clientX - rect.left) / rect.width - 0.5);
//     y.set((event.clientY - rect.top) / rect.height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.article
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 45 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.65, delay: index * 0.15 }}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1000,
//       }}
//       className={`group relative rounded-2xl border border-white/10 bg-[#100a1a] p-6 md:p-7 overflow-hidden transition-colors duration-500 hover:border-[#a855f7]/60 ${
//         project.featured ? "lg:col-span-2" : ""
//       }`}
//     >
//       {/* Animated Gradient Glow */}
//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#a855f7]/15 blur-3xl"
//         animate={{
//           scale: [1, 1.35, 1],
//           opacity: [0.35, 0.8, 0.35],
//         }}
//         transition={{
//           duration: 4 + index,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Moving Light Streak */}
//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#a855f7]/10 to-transparent"
//         whileHover={{ left: "150%" }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       />

//       <div className="relative z-10">

//         {/* Project Screenshot */}
//         {project.image && (
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//             className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#150d20]"
//           >
//             <img
//               src={project.image}
//               alt={`${project.title} project screenshot`}
//               className="h-auto max-h-96 w-full object-contain transition-transform duration-500 group-hover:scale-105"
//             />
//           </motion.div>
//         )}

//         {/* Project Number and Symbol */}
//         <div className="mb-8 flex items-start justify-between">
//           <span className="font-mono text-sm tracking-[0.3em] text-[#a855f7]">
//             / PROJECT_{project.number}
//           </span>

//           <motion.div
//             whileHover={{ rotate: 8, scale: 1.08 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/30 bg-[#a855f7]/5 text-2xl font-black text-white shadow-[0_0_25px_rgba(168,85,247,0.12)]"
//           >
//             {project.symbol}
//           </motion.div>
//         </div>

//         {/* Category */}
//         <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
//           {project.category}
//         </p>

//         {/* Title */}
//         <h3 className="mb-4 text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#c084fc] md:text-4xl">
//           {project.title}
//           <span className="ml-1 text-[#a855f7]">.</span>
//         </h3>

//         {/* Description */}
//         <p className="mb-7 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
//           {project.description}
//         </p>

//         {/* Technologies */}
//         <div className="mb-8 flex flex-wrap gap-2">
//           {project.tech.map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-[#a855f7]/30"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Project Links */}
//         <div className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">

//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#c084fc]"
//           >
//             <span>GitHub</span>
//             <span aria-hidden="true">↗</span>
//           </a>

//           {project.live ? (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-lg bg-[#a855f7] px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#9333ea] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
//             >
//               Live Demo <span aria-hidden="true">↗</span>
//             </a>
//           ) : (
//             <span className="text-xs text-slate-500">
//               Live demo coming soon
//             </span>
//           )}

//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-[#05000d] px-6 py-24 text-white md:px-12 lg:px-20"
//     >
//       {/* Background Glow */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#a855f7]/10 blur-[120px]"
//       />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#a855f7]">
//             <span className="h-px w-10 bg-[#a855f7]" />
//             My Work
//           </p>

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

//             <h2 className="text-4xl font-black tracking-tight md:text-6xl">
//               Featured{" "}
//               <span className="text-[#a855f7]">Projects.</span>
//             </h2>

//             <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
//               A selection of projects where I explore full-stack development,
//               real-time systems and AI-powered applications.
//             </p>

//           </div>
//         </motion.div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.number}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Bottom Text */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-10 text-center text-sm text-slate-500"
//         >
//           Building ideas into working applications{" "}
//           <span className="text-[#a855f7]">✦</span>
//         </motion.p>

//       </div>
//     </section>
//   );
// }

// export default Project;

// import { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import SaptapadiImg from "../assets/saptpadi.jpg";
// import InternAreaImg from "../assets/internarea.jpg";
// import DevMeetImg from "../assets/devmeet.jpg";

// const projects = [
//   {
//     number: "01",
//     title: "InternArea",
//     category: "INTERNSHIP & JOB PLATFORM",
//     description:
//       "A platform for exploring internships and job opportunities, with authentication, search, filtering and dedicated admin features.",
//     tech: ["React", "Node.js", "Express", "MongoDB"],
//     github: "https://github.com/Saee1410/InternArea-fe",
//     live: "https://intern-area-fe.vercel.app",
//     image: InternAreaImg,
//     symbol: "IA",
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "DevMeet",
//     category: "REAL-TIME CODING PLATFORM",
//     description:
//       "A collaborative technical interview platform designed around real-time communication, coding sessions and developer collaboration.",
//     tech: ["React", "Node.js", "Socket.IO", "Redis"],
//     github: "https://github.com/Saee1410",
//     live: "https://devmeetown-nu.vercel.app/",
//     image: DevMeetImg,
//     symbol: "DM",
//     featured: false,
//   },
//   {
//     number: "03",
//     title: "Saptapadi",
//     category: "AI-POWERED WEDDING PLANNER",
//     description:
//       "An AI-powered wedding planning application with budget planning and a focus on simplifying wedding organization.",
//     tech: ["React", "Express", "MongoDB", "Gemini AI"],
//     github: "https://github.com/Saee1410/Saptpadi",
//     live: "https://saptpadi-frontend.vercel.app/",
//     image: SaptapadiImg,
//     symbol: "SP",
//     featured: false,
//   },
// ];

// function ProjectCard({ project, index }) {
//   const cardRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springX = useSpring(x, { stiffness: 160, damping: 18 });
//   const springY = useSpring(y, { stiffness: 160, damping: 18 });

//   const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
//   const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

//   const handleMouseMove = (event) => {
//     if (!cardRef.current || window.innerWidth < 768) return;

//     const rect = cardRef.current.getBoundingClientRect();

//     x.set((event.clientX - rect.left) / rect.width - 0.5);
//     y.set((event.clientY - rect.top) / rect.height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.article
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 45 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.65, delay: index * 0.15 }}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1000,
//       }}
//       className={`group relative rounded-2xl border border-white/10 bg-[#0d080e] p-6 md:p-7 overflow-hidden transition-colors duration-500 hover:border-[#ff007f]/60 ${
//         project.featured ? "lg:col-span-2" : ""
//       }`}
//     >
//       {/* Animated gradient glow */}
//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff007f]/15 blur-3xl"
//         animate={{
//           scale: [1, 1.35, 1],
//           opacity: [0.35, 0.8, 0.35],
//         }}
//         transition={{
//           duration: 4 + index,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Moving light streak */}
//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#ff007f]/10 to-transparent"
//         whileHover={{ left: "150%" }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       />

//       <div className="relative z-10">
//         {/* Project Screenshot Box */}
//         {project.image && (
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     transition={{ duration: 0.3 }}
//     className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#160b14]"
//   >
//     <img
//       src={project.image}
//       alt={`${project.title} project screenshot`}
//       className="h-auto max-h-96 w-full object-contain transition-transform duration-500 group-hover:scale-105"
//     />
//   </motion.div>
// )}

//         <div className="mb-8 flex items-start justify-between">
//           <span className="font-mono text-sm tracking-[0.3em] text-[#ff007f]">
//             / PROJECT_{project.number}
//           </span>

//           <motion.div
//             whileHover={{ rotate: 8, scale: 1.08 }}
//             transition={{ type: "spring", stiffness: 250 }}
//             className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff007f]/30 bg-[#ff007f]/5 text-2xl font-black text-white shadow-[0_0_25px_rgba(255,0,127,0.08)]"
//           >
//             {project.symbol}
//           </motion.div>
//         </div>

//         <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
//           {project.category}
//         </p>

//         <h3 className="mb-4 text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff66b2] md:text-4xl">
//           {project.title}
//           <span className="ml-1 text-[#ff007f]">.</span>
//         </h3>

//         <p className="mb-7 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
//           {project.description}
//         </p>

//         <div className="mb-8 flex flex-wrap gap-2">
//           {project.tech.map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-[#ff007f]/30"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         <div className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#ff66b2]"
//           >
//             <span>GitHub</span>
//             <span aria-hidden="true">↗</span>
//           </a>

//           {project.live ? (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-lg bg-[#ff007f] px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,127,0.35)]"
//             >
//               Live Demo <span aria-hidden="true">↗</span>
//             </a>
//           ) : (
//             <span className="text-xs text-slate-500">
//               Live demo coming soon
//             </span>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-[#050005] px-6 py-24 text-white md:px-12 lg:px-20"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#ff007f]/5 blur-[120px]"
//       />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#ff007f]">
//             <span className="h-px w-10 bg-[#ff007f]" />
//             My Work
//           </p>

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <h2 className="text-4xl font-black tracking-tight md:text-6xl">
//               Featured <span className="text-[#ff007f]">Projects.</span>
//             </h2>

//             <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
//               A selection of projects where I explore full-stack development,
//               real-time systems and AI-powered applications.
//             </p>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.number}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-10 text-center text-sm text-slate-500"
//         >
//           Building ideas into working applications{" "}
//           <span className="text-[#ff007f]">✦</span>
//         </motion.p>
//       </div>
//     </section>
//   );
// }




