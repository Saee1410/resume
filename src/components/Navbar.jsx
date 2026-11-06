
import { useState } from "react";
import { motion } from "framer-motion";
import CV from "../assets/cv.jpg";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#a855f7]/30 bg-[#080411]/90 px-5 py-4 shadow-[0_0_25px_rgba(168,85,247,0.10)] backdrop-blur-xl">

        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span className="text-3xl font-black tracking-tighter text-[#a855f7]">
              SB
            </span>

            <span className="hidden border-l border-[#a855f7]/40 pl-3 text-lg font-semibold text-white sm:block">
              Sai Bhosale
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 hover:text-[#c084fc] ${
                  index === 0 ? "text-[#c084fc]" : "text-slate-200"
                }`}
              >
                {link.name}

                {index === 0 && (
                  <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#a855f7]" />
                )}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href={CV}
            download="Sai-Resume.pdf"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#a855f7] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#a855f7] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] sm:inline-flex"
          >
            View Resume <span aria-hidden="true">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-white transition hover:text-[#c084fc] lg:hidden"
          >
            <span className="text-2xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-5 flex flex-col gap-1 border-t border-[#a855f7]/20 pt-4 lg:hidden">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
              >
                {link.name}
              </a>
            ))}

            <a
              href={CV}
              download="Sai-Resume.pdf"
              rel="noreferrer"
              className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>

          </div>
        )}

      </div>
    </motion.nav>
  );
}



// import { useState } from "react";
// import { motion } from "framer-motion";
// import CV from "../assets/cv.jpg";

// const links = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
//     >
//       <div className="mx-auto max-w-7xl rounded-2xl border border-pink-500/30 bg-black/85 px-5 py-4 shadow-[0_0_25px_rgba(255,0,127,0.08)] backdrop-blur-xl">
//         <div className="flex items-center justify-between gap-4">
//           {/* Logo */}
//           <a href="#home" className="flex shrink-0 items-center gap-3">
//             <span className="text-3xl font-black tracking-tighter text-[#ff007f]">
//               SB
//             </span>
//             <span className="hidden border-l border-pink-500/40 pl-3 text-lg font-semibold text-white sm:block">
//               Sai Bhosale
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-6 lg:flex xl:gap-8">
//             {links.map((link, index) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`relative py-2 text-sm font-medium transition-colors duration-300 hover:text-[#ff007f] ${
//                   index === 0 ? "text-[#ff007f]" : "text-slate-200"
//                 }`}
//               >
//                 {link.name}
//                 {index === 0 && (
//                   <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff007f]" />
//                 )}
//               </a>
//             ))}
//           </div>

//           {/* Resume Button */}
//           <a
//             href={CV}
//              download="Sai-Resume.pdf"
//             rel="noreferrer"
//             className="hidden items-center gap-2 rounded-full border border-[#ff007f] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff007f] hover:shadow-[0_0_25px_rgba(255,0,127,0.3)] sm:inline-flex"
//           >
//             View Resume <span aria-hidden="true">↗</span>
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//             className="rounded-lg p-2 text-white transition hover:text-[#ff007f] lg:hidden"
//           >
//             <span className="text-2xl">
//               {menuOpen ? "✕" : "☰"}
//             </span>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div className="mt-5 flex flex-col gap-1 border-t border-pink-500/20 pt-4 lg:hidden">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-pink-500/10 hover:text-[#ff007f]"
//               >
//                 {link.name}
//               </a>
//             ))}

//           <a
//             href={CV}
//             download="Sai-Resume.pdf"
//             rel="noreferrer"
//             className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-pink-500/10 hover:text-[#ff007f]"
//           >
//             View Resume <span aria-hidden="true">↗</span>
//           </a>
//           </div>
//         )}
//       </div>
//     </motion.nav>
//   );
// }
