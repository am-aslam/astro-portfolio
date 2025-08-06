import React from "react";
import { FaGithub, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { motion } from "framer-motion";


function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl text-center">
        {/* Profile Picture with Animated Glow */}
        <motion.div
          className="mx-auto w-28 h-28 mb-6 rounded-full border-4 border-purple-500 shadow-xl shadow-purple-500/50 flex items-center justify-center"
          initial={{ scale: 0, rotate: 360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.png"
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
          Betelgeuse
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Unveiling tech, creativity and cosmos in every click ✦
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 text-2xl mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="#" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-gray-200">
            <SiLinktree />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </motion.div>

        {/* Link Cards */}
        <div className="flex flex-col gap-4">
          {[
            { label: "Projects Portfolio", icon: "🧠", href: "#" },
            { label: "Download Projects", icon: "📥", href: "#" },
            { label: "Data Science Ebooks", icon: "📚", href: "#" },
            { label: "AI Generated Art", icon: "🎨", href: "#" },
            { label: "Code with Betelgeuse", icon: "💻", href: "#" },
            { label: "Follow on GitHub", icon: <FaGithub />, href: "#" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gray-800 hover:bg-gray-700 transition-all px-6 py-4 rounded-2xl flex items-center gap-4 text-lg shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30"
            >
              <span className="text-2xl">{link.icon}</span> {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
