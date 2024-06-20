import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const ContactForm = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_5er244l', 'template_6989yo3', form.current, {
            publicKey: 'Qfw37bWPARppA4DQN',
        })
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    
                    toast.success('Email sent successfully!');
                },
                (error) => {
                    console.error('Failed to send email. Error:', error.text);
                    
                    toast.error('Failed to send email. Please try again later.');
                }
            );

        // Reset form after submission (optional)
        e.target.reset();
    };

    return (
        <div className="border-b border-neutral-900 pb-6 lg:pb-10 px-4 flex flex-col lg:flex-row items-center justify-between pt-14 xl:ml-32">
            {/* Contact Information Section */}
            <div className="max-w-xl w-full lg:w-1/2 mx-auto lg:mx-0 lg:mr-auto lg:pl-10 lg:order-1 lg:text-left text-center xl:mr-28">
                <div className="flex flex-col items-start pb-16">
                    <h2 className="my-10 lg:my-16 text-4xl lg:text-5xl font-bold tracking-wide text-white">
                        LOVE TO HEAR FROM YOU,<span className="text-blue-500"> GET IN TOUCH!</span>
                    </h2>
                    <p className="text-lg text-neutral-500 mb-4 lg:mb-6">
                        <a href="https://www.linkedin.com/in/sharvien-paul-claro/" className="flex items-center text-white">
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>
                    </p>
                    <p className="text-lg text-neutral-500 mb-4 lg:mb-6">
                        <a href="tel:+639062698915" className="flex items-center text-white">
                            <FaPhone className="mr-2" /> +639062698915
                        </a>
                    </p>
                    <p className="text-lg text-neutral-500">
                        <a href="mailto:paulclaro2@gmail.com" className="flex items-center text-white">
                            <BiLogoGmail className="mr-2" /> paulclaro2@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-xl w-full lg:w-1/2 mx-auto lg:mx-0 lg:order-2 lg:pt-10 lg:pr-10 xl:mr-80">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="w-full sm:w-1/2">
                            <label className="block mb-1 text-white">Your name</label>
                            <input 
                                type ="text"
                                name="user_name"
                                className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block mb-1 text-white">Your email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Message</label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                            rows="6"
                        ></textarea>
                    </div>
                    <div className="flex justify-center lg:justify-center">
                        <input
                            type="submit"
                            value="Send"
                            className="mt-4 px-20 py-3 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
                        />
                    </div>
                </form>
                {statusMessage && (
                    <div className="mt-4 text-center text-white">
                        {statusMessage}
                    </div>
                )}
            </div>
            
            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ContactForm;
