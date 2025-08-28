import React, { useState } from "react";
import { Mail, Phone, FileText, Linkedin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:truongquangtuong10a2@gmail.com?subject=Message from ${formData.email}&body=${formData.message}`;
  };

  return (
    <div className="flex flex-col items-center p-6 ">
      <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mt-20">
        Contact me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg ">
        {/* Left Column: Social Links */}
        <div className="flex flex-col space-y-8 text-lg lg:mt-16 lg:ml-20 md:mt-16 md:ml-20">
          <a
            href="https://www.facebook.com/truongtuong.2502/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-purple-300 text-indigo-400 text-xl font-bold transition"
          >
            <FaFacebook size={28} /> <span>Facebook</span>
          </a>
          <as
            href="https://sun-xseeds.slack.com/team/U040ZMTB735"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-purple-300 text-indigo-400 text-xl font-bold transition"
          >
            <FaSlack size={28} /> <span>Slack</span>
          </as>
          <a
            href="tel:+84358494236"
            className="flex items-center space-x-3 hover:text-purple-300 text-indigo-400 text-xl font-bold transition"
          >
            <Phone size={28} /> <span>+84 358 494 236</span>
          </a>
          <a
            href="https://www.linkedin.com/in/t%C6%B0%E1%BB%9Dng-tr%C6%B0%C6%A1ng-a58343327/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-purple-300 text-indigo-400 text-xl font-bold transition"
          >
            <FaLinkedin size={28} /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/tuongioe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-purple-300 text-indigo-400 text-xl font-bold transition"
          >
            <FaGithub size={28} /> <span>Git hub</span>
          </a>
        </div>

        {/* Right Column: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/10"
        >
          <label className="text-lg font-semibold text-gray-200">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-800/70 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
          />

          <label className="text-lg font-semibold text-gray-200">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-800/70 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            rows="5"
            placeholder="Type your message here"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-900 via-pink-600 to-yellow-500 text-white font-bold py-3 rounded-xl shadow-md border-none 
             transition-transform duration-300 transform hover:scale-105 hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
