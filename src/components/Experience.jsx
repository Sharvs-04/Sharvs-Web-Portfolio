import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Sort experiences by actual start date (most recent first)
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    const parseDate = (str) => {
      // Split "Month YYYY - ..." and convert to Date
      const [start] = str.split(" - ");
      const [month, year] = start.trim().split(" ");
      return new Date(`${month} 1, ${year}`);
    };

    return parseDate(b.year) - parseDate(a.year);
  });

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
              <h3 className="text-base font-semibold">{exp.role}</h3>
              <span className="text-xs text-neutral-400">{exp.year}</span>
            </div>

            <p className="mt-1 text-sm text-blue-500">{exp.company}</p>

            <p className="mt-3 text-sm text-neutral-400">{exp.description}</p>

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