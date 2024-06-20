import { RiReactjsLine } from "react-icons/ri"
import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Fill } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { LiaPhp } from "react-icons/lia";
import { SiMysql } from "react-icons/si";
import { SiSemrush } from "react-icons/si";
import { FaFrog } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import {animate, motion} from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import ahrefs from "../assets/ahrefs.png"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">TECHNOLOGIES</motion.h2>

        <motion.div  
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-7xl text-orange-600" alt="html"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Fill className="text-7xl text-blue-700" alt="css"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-300" alt="css"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" alt="react"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular  className="text-7xl text-red-600" alt="react"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <LiaPhp className="text-7xl text-purple-400" alt="php"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-400" alt="mysql"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGoogleanalytics className="text-7xl text-yellow-400" alt="analytics"/>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-4"> 

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGooglesearchconsole className="text-7xl text-slate-400" alt="googlesearchconsole"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSemrush className="text-7xl text-orange-600" alt="semrush"/>
            </motion.div>
              
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFrog className="text-7xl text-green-700" alt="screamingfrog"/>
            </motion.div>

            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-6"
            >
            <img className="h-14 w-12" src={ahrefs} alt="Ahrefs"  />
            </motion.div>


            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaWordpress className="text-7xl text-blue-300" alt="screamingfrog"/>
            </motion.div>

            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobephotoshop className="text-7xl text-blue-600" alt="screamingfrog"/>
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFigma className="text-7xl text-purple-700" alt="screamingfrog"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl text-white" alt="css"/>
            </motion.div>
            </div> 

        </motion.div >
     </div>
  )
}

export default Technologies