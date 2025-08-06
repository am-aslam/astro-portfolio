import { FaGithub, FaInstagram, FaBook, FaPaintBrush, FaCode, FaLinkedin, FaWhatsapp, FaPagelines } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"
import { FaXTwitter } from "react-icons/fa6";


function Hero() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 flex justify-center items-center">
      <div className="w-full max-w-xl text-center">
        {/* Profile Picture with Simple Pop-Up Animation */}
        <motion.div
          className="mx-auto w-28 h-28 mb-6 rounded-full border-4 border-b-gray-400 shadow-md flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        AslamSadique
        </motion.h1>
        <motion.h3
          className="text-lg font-extrabold mb-2 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        Data Scientist . AI/ML Engineer
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Unveiling tech, making Creative Project With AI/ML.Analysing data With PowerBi and Tabluea
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 text-2xl mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="https://www.instagram.com/aslam__sadique" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://x.com/aslamsadique_" className="hover:text-gray-400">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/aslam-sadique" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Link Cards */}
        <div className="flex flex-col gap-4">
          {[
            { label: "Connect Me", icon: <FaWhatsapp />, href: "https://wa.me/8113841363" },
            { label: "Download My Resume", icon: <FaPagelines />, href: "https://drive.google.com/file/d/1C1kZIvLrVGr2SvzaWlnni87QZLP2a63u/view?usp=drive_link" },
            { label: "Data Science Ebooks", icon: <FaBook />, href: "https://drive.google.com/drive/folders/17arThf5KqIaPOdcqJIH-C4ki7fxXuW8V?usp=drive_link" },
            { label: "AI Generated Art", icon: <FaPaintBrush />, href: "#" },
            { label: "Code with Aslam", icon: <FaCode />, href: "https://github.com/am-aslam?tab=repositories" },
            { label: "Follow on GitHub", icon: <FaGithub />, href: "https://github.com/am-aslam" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-900 hover:bg-gray-800 transition-all px-6 py-4 rounded-2xl flex items-center gap-4 text-lg shadow-md hover:shadow-lg"
            >
              <span className="text-2xl">{link.icon}</span> {link.label}
            </motion.a>
          ))}
        </div>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AslamSadique. All rights reserved.
      </footer>
      </div>
    </div>
  )
}

export default Hero
