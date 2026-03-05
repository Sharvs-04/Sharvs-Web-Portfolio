import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { motion } from 'framer-motion';

const ContactInput = ({ type, name, placeholder, className, ...props }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-neutral-400 transition ${className}`}
    {...props}
  />
);

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_5er244l', 'template_6989yo3', form.current, 'Qfw37bWPARppA4DQN')
      .then(
        () => {
          toast.success('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again later.');
          console.error('Email sending error:', error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-32 bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-300">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">

        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-neutral-900 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-sm border border-neutral-700 mt-10 lg:mt-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Let's Connect! <span className="text-blue-500">Reach Out</span>
          </h2>

          <p className="mb-4 flex items-center gap-3 text-base md:text-lg hover:text-blue-400 transition-colors">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" /> 
            <a href="https://www.linkedin.com/in/sharvien-paul-claro/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>

          <p className="mb-4 flex items-center gap-3 text-base md:text-lg hover:text-green-400 transition-colors">
            <FaPhone className="w-5 h-5 md:w-6 md:h-6" /> 
            <a href="tel:+639062698915">+63 906 269 8915</a>
          </p>

          <p className="flex items-center gap-3 text-base md:text-lg hover:text-red-400 transition-colors">
            <BiLogoGmail className="w-5 h-5 md:w-6 md:h-6" /> 
            <a href="mailto:paulclaro2@gmail.com">paulclaro2@gmail.com</a>
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-neutral-900 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-sm border border-neutral-700"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Send me a message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-5 flex flex-col">
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactInput type="text" name="user_name" placeholder="Your Name" required />
              <ContactInput type="email" name="user_email" placeholder="Your Email" required />
            </div>

            <ContactInput type="text" name="subject" placeholder="Subject" required />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-neutral-400 transition resize-none flex-1"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toaster */}
      <Toaster position="top-center" richColors />
    </section>
  );
};

export default ContactForm;