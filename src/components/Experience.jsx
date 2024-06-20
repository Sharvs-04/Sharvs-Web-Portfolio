import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
    <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration:0.5}}
    className="my-20 text-center text-4xl">EXPERIENCE</motion.h2>
    <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
                <motion.div 
                whileInView={{opacity: 1 , x:0}}
                initial={{opacity: 0 , x: -100}}
                transition={{duration:1}}
                className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:pr-4">
                    <p className="text-sm text-neutral-400 text-center lg:text-left">{experience.year}</p>
                </motion.div>

                <motion.div 
                whileInView={{opacity: 1 , x:0}}
                initial={{opacity: 0 , x: -100}}
                transition={{duration:1}}
                className="w-full lg:w-3/4 max-w-screen-xl">
                    <h2 className="mb-2 font-semibold text-lg text-center lg:text-left">
                        {experience.role} -{" "}
                        <span className="text-lg text-blue-500">
                            {experience.company}
                        </span>
                    </h2>
                    <p className="mb-4 text-neutral-400 text-center lg:text-left">{experience.description}</p>
                    <div className="flex flex-wrap justify-center lg:justify-start">
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-blue-500">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        ))}
    </div>
</div>


  )
}

export default Experience