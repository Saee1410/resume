import { useState } from "react";
import { motion } from "framer-motion";

import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

function Contact() {
  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "saivijaybhosale@gmail.com",
      link: "mailto:saivijaybhosale@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Mobile",
      value: "918080296179",
      link: "tel:918080296179",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Nashik, Maharashtra, India",
      link: "https://maps.google.com/?q=Nashik,Maharashtra",
    },

  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      name: "GitHub",
      link: "https://github.com/Saee1410",
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      link: "YOUR_LINKEDIN_PROFILE_URL",
    },
     
  ];

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `
Hello Saee!

You have received a new message from your Portfolio.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    const whatsappNumber = "918080296179";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setStatus(
      "WhatsApp opened! Please click Send to deliver your message."
    );

    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05000d] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Purple Glow Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#a855f7]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#a855f7]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#a855f7]">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's <span className="text-[#a855f7]">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a job opportunity, internship, or exciting project?
            I'm always open to connecting and exploring new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 text-3xl font-bold">
              Let's Work{" "}
              <span className="text-[#a855f7]">Together!</span>
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              I'm actively looking for opportunities as a Software
              Developer, Frontend Developer, Backend Developer, or
              Full Stack Developer.

              If you're a recruiter or hiring manager and have an
              opportunity that matches my skills, feel free to reach
              out. I'd love to discuss how I can contribute to your team.
            </p>

            {/* Contact Information */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={
                    item.title === "Location" ? "_blank" : undefined
                  }
                  rel={
                    item.title === "Location" ? "noreferrer" : undefined
                  }
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#10091a] p-5 transition-all duration-300 hover:border-[#a855f7]/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a855f7]/10 text-2xl text-[#a855f7] transition group-hover:bg-[#a855f7] group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <p className="mt-1 font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-9">
              <h4 className="mb-4 font-semibold text-white">
                Connect with me
              </h4>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#10091a] px-5 py-3 text-gray-300 transition-all duration-300 hover:border-[#a855f7] hover:text-[#c084fc] hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  >
                    <span className="text-xl">
                      {social.icon}
                    </span>

                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#a855f7]/20 bg-[#10091a] p-6 shadow-2xl shadow-black/30 sm:p-9"
          >
            <h3 className="mb-2 text-2xl font-bold">
              Send Me a{" "}
              <span className="text-[#a855f7]">Message</span>
            </h3>

            <p className="mb-8 text-sm text-gray-400">
              Fill out the form and connect with me directly on WhatsApp.
            </p>

            <form
              onSubmit={sendWhatsAppMessage}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-white/10 bg-[#080510] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#a855f7] focus:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-white/10 bg-[#080510] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#a855f7] focus:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Internship"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-white/10 bg-[#080510] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#a855f7] focus:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  maxLength={3000}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#080510] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#a855f7] focus:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                />
              </div>

              {/* Status */}
              {status && (
                <div className="flex items-start gap-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 text-sm text-purple-300">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-lg" />
                  {status}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#a855f7] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#9333ea] hover:shadow-lg hover:shadow-[#a855f7]/30 hover:scale-[1.02]"
              >
                Send via WhatsApp
                <FiSend />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



// import { useState } from "react";
// import { motion } from "framer-motion";

// import {
//   FiMail,
//   FiMapPin,
//   FiGithub,
//   FiLinkedin,
//   FiSend,
//   FiCheckCircle,
// } from "react-icons/fi";

// function Contact() {
//   const [status, setStatus] = useState("");

//   const contactInfo = [
//     {
//       icon: <FiMail />,
//       title: "Email",
//       value: "saivijaybhosale@gmail.com",
//       link: "mailto:saivijaybhosale@gmail.com",
//     },
//     {
//       icon: <FiMapPin />,
//       title: "Location",
//       value: "Nashik, Maharashtra, India",
//       link: "https://maps.google.com/?q=Nashik,Maharashtra",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <FiGithub />,
//       name: "GitHub",
//       link: "https://github.com/Saee1410",
//     },
//     {
//       icon: <FiLinkedin />,
//       name: "LinkedIn",
//       link: "YOUR_LINKEDIN_PROFILE_URL",
//     },
//   ];

//   const sendWhatsAppMessage = (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;

//     const formData = new FormData(form);

//     const name = formData.get("from_name");
//     const email = formData.get("from_email");
//     const subject = formData.get("subject");
//     const message = formData.get("message");

//     const whatsappMessage = `
// Hello Saee!

// You have received a new message from your Portfolio.

// Name: ${name}
// Email: ${email}
// Subject: ${subject}

// Message:
// ${message}
//     `;

//     const whatsappNumber = "918080296179";

//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     window.open(whatsappURL, "_blank");

//     setStatus("WhatsApp opened! Please click Send to deliver your message.");

//     form.reset();
//   };

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white sm:px-8 lg:px-16"
//     >
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#ff2d75]/10 blur-[120px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#ff2d75]/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#ff2d75]">
//             Contact Me
//           </p>

//           <h2 className="text-4xl font-bold sm:text-5xl">
//             Let's <span className="text-[#ff2d75]">Connect</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-gray-400">
//             Have a job opportunity, internship, or exciting project?
//             I'm always open to connecting and exploring new opportunities.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

//           {/* Left Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="mb-5 text-3xl font-bold">
//               Let's Work <span className="text-[#ff2d75]">Together!</span>
//             </h3>

//             <p className="mb-8 leading-8 text-gray-400">
//               I'm actively looking for opportunities as a Software
//               Developer, Frontend Developer, Backend Developer, or
//               Full Stack Developer.

//               If you're a recruiter or hiring manager and have an
//               opportunity that matches my skills, feel free to reach
//               out. I'd love to discuss how I can contribute to your team.
//             </p>

//             {/* Contact Information */}
//             <div className="space-y-5">
//               {contactInfo.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   target={item.title === "Location" ? "_blank" : undefined}
//                   rel={item.title === "Location" ? "noreferrer" : undefined}
//                   className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#111111] p-5 transition-all duration-300 hover:border-[#ff2d75]/60"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff2d75]/10 text-2xl text-[#ff2d75] transition group-hover:bg-[#ff2d75] group-hover:text-white">
//                     {item.icon}
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">
//                       {item.title}
//                     </p>
//                     <p className="mt-1 font-medium text-white">
//                       {item.value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="mt-9">
//               <h4 className="mb-4 font-semibold text-white">
//                 Connect with me
//               </h4>

//               <div className="flex flex-wrap gap-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-5 py-3 text-gray-300 transition-all duration-300 hover:border-[#ff2d75] hover:text-[#ff2d75]"
//                   >
//                     <span className="text-xl">{social.icon}</span>
//                     <span>{social.name}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Section - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-2xl shadow-black/30 sm:p-9"
//           >
//             <h3 className="mb-2 text-2xl font-bold">
//               Send Me a <span className="text-[#ff2d75]">Message</span>
//             </h3>

//             <p className="mb-8 text-sm text-gray-400">
//               Fill out the form and connect with me directly on WhatsApp.
//             </p>

//             <form onSubmit={sendWhatsAppMessage} className="space-y-5">

//               {/* Name */}
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Your Name
//                 </label>

//                 <input
//                   type="text"
//                   name="from_name"
//                   placeholder="Enter your name"
//                   required
//                   maxLength={100}
//                   className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff2d75]"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   name="from_email"
//                   placeholder="Enter your email"
//                   required
//                   maxLength={150}
//                   className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff2d75]"
//                 />
//               </div>

//               {/* Subject */}
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Job Opportunity / Internship"
//                   required
//                   maxLength={150}
//                   className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff2d75]"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="5"
//                   placeholder="Write your message here..."
//                   required
//                   maxLength={3000}
//                   className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff2d75]"
//                 />
//               </div>

//               {/* Status */}
//               {status && (
//                 <div className="flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
//                   <FiCheckCircle className="mt-0.5 shrink-0 text-lg" />
//                   {status}
//                 </div>
//               )}

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff2d75] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#e91e63] hover:shadow-lg hover:shadow-[#ff2d75]/20"
//               >
//                 Send via WhatsApp
//                 <FiSend />
//               </button>

//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
