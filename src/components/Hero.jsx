import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/sharvs-dp.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 px-4 lg:px-20">
    <div className="flex flex-col md:flex-row lg:flex-row lg:flex-wrap md:ml-12">
        <div className="w-full lg:w-1/2 flex items-center mb-8 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.span 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-lg lg:text-xl text-gray-600 pl-2">Hello, I'm</motion.span >

                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-6 lg:pb-10 text-4xl lg:text-8xl font-semibold tracking-tight sm:text-5xl text-center lg:text-left"
                >
                    Sharvien Paul Claro
                </motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-blue-300 via-slate-500 to-blue-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left"
                >
                    A SEO Specialist & Front-End Web Developer
                </motion.span>

                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-5 font-light sm:text-sm lg:text-xl text-center lg:text-left"
                >
                    {HERO_CONTENT}
                </motion.p>
                <motion.a 
                    href="https://drive.google.com/uc?export=download&id=1fveLeWfuYlXJkDMC2IvOpWHnn_Pf1VMv" 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 px-10 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors block w-full lg:w-auto text-center lg:text-left"
                >
                    Download Resume
                </motion.a >
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
            <motion.img 
                initial={{ x: 100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-60 lg:w-3/4 rounded-full shadow-xl"
                src={profilepic} 
                alt="Sharvien-dp" 
            />
        </div>
    </div>
</div>






  );
}

export default Hero