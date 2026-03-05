<<<<<<< HEAD
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Sort most recent first (assumes year like "2024" or "2023 - 2024")
  const sortedExperiences = [...EXPERIENCES].sort((a, b) =>
    b.year.localeCompare(a.year)
  );

  return (
    <section className="border-b border-neutral-800 px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-5xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mx-auto grid max-w-8xl gap-6 sm:grid-cols-2">
        {sortedExperiences.slice(0, 4).map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">
                {exp.role}
              </h3>
              <span className="text-xs text-neutral-400">
                {exp.year}
              </span>
            </div>

            <p className="mt-1 text-sm text-blue-500">
              {exp.company}
            </p>

            <p className="mt-3 text-sm text-neutral-400">
              {exp.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
=======
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
>>>>>>> 70aeadae3b08672102f6a54baf9e3cf612eba7c4
