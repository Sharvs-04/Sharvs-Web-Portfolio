<<<<<<< HEAD
import { useState } from "react";
import { RiReactjsLine, RiHtml5Line, RiCss3Fill } from "react-icons/ri";
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMysql,
  SiSemrush,
  SiJavascript,
  SiCanva,
  SiShopify,
  SiSlack,
  SiCloudflare,
} from "react-icons/si";
import { LiaPhp } from "react-icons/lia";
import { FaFrog, FaWordpress, FaFigma, FaAngular, FaGithub } from "react-icons/fa6";
import ahrefs from "../assets/ahrefs.png";

const technologies = {
  Advanced: [
    { name: "HTML5", icon: <RiHtml5Line className="text-orange-600 text-4xl" /> },
    { name: "CSS3", icon: <RiCss3Fill className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "Google Search Console", icon: <SiGooglesearchconsole className="text-gray-400 text-4xl" /> },
    { name: "Screaming Frog", icon: <FaFrog className="text-green-600 text-4xl" /> },
    { name: "Ahrefs", icon: <img src={ahrefs} alt="Ahrefs" className="h-8 w-8" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500 text-4xl" /> },
  ],

  Intermediate: [
    { name: "Canva", icon: <SiCanva className="text-orange-500 text-3xl" /> },
    { name: "SEMrush", icon: <SiSemrush className="text-orange-500 text-3xl" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-300 text-3xl" /> },
    { name: "Slack", icon: <SiSlack className="text-purple-600 text-4xl" /> },
  ],

  Basic: [
    { name: "React", icon: <RiReactjsLine className="text-cyan-400 text-3xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-3xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
    { name: "PHP", icon: <LiaPhp className="text-purple-400 text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-600 text-3xl" /> },
    { name: "Shopify", icon: <SiShopify className="text-green-600 text-4xl" /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics className="text-yellow-500 text-3xl" /> },
  ],
};

const levelColors = {
  Advanced: "bg-green-500",
  Intermediate: "bg-yellow-400",
  Basic: "bg-red-500",
};

const Technologies = () => {
  const [filter, setFilter] = useState("all");

  const getAllTechnologies = () =>
    Object.entries(technologies).flatMap(([level, techs]) =>
      techs.map((tech) => ({ ...tech, level }))
    );

  const filteredTech =
    filter === "all"
      ? getAllTechnologies()
      : technologies[filter].map((tech) => ({
          ...tech,
          level: filter,
        }));

  return (
    <section className="border-b border-neutral-800 px-6 py-20">
      <h2 className="mb-6 text-center text-5xl font-bold tracking-tight">
        Technologies
      </h2>

      <p className="mb-12 text-center text-neutral-400 max-w-xl mx-auto">
        Tools and technologies I use across SEO, development, and analytics workflows.
      </p>

      {/* FILTERS */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {["all", "Advanced", "Intermediate", "Basic"].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`rounded-lg border border-neutral-700 px-5 py-2 capitalize text-sm transition ${
              filter === level
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 hover:bg-neutral-800"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* COLOR LEGEND */}
      <div className="mb-14 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-wider text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span>Advanced</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span>Intermediate</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span>Basic</span>
        </div>
      </div>

      {/* TECHNOLOGY GRID */}
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {filteredTech.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-4 w-64 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-800"
          >
            <span
              className={`h-3 w-3 rounded-full ${levelColors[tech.level]}`}
            />

            {tech.icon}

            <span className="truncate text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
=======
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
>>>>>>> 70aeadae3b08672102f6a54baf9e3cf612eba7c4
