import { EXPERIENCES } from "../constants";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Experience = () => {
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);

  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragVisible, setDragVisible] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Sort experiences by year descending
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    const parseDate = (str) => {
      const [start] = str.split(" - ");
      const [month, year] = start.trim().split(" ");
      return new Date(`${month} 1, ${year}`);
    };
    return parseDate(b.year) - parseDate(a.year);
  });

  // Calculate draggable width
  const calculateWidth = () => {
    if (wrapperRef.current && sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = wrapperRef.current.clientWidth;
      setWidth(scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // Move cursor circle
  const handleMouseMove = (e) => {
    if (dragVisible) {
      cursorX.set(e.clientX - 28);
      cursorY.set(e.clientY - 28);
    }
  };

  // Sync active dot with slider position
  useEffect(() => {
    const unsubscribe = x.onChange((latestX) => {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 24; // card + gap
      const index = Math.round(Math.abs(latestX) / cardWidth);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x]);

  // Click dot → animate slider
  const scrollToCard = (index) => {
    const cardWidth = sliderRef.current.children[0].offsetWidth + 24;
    x.set(-index * cardWidth);
  };

  return (
    <section className="border-b border-neutral-800 py-16 md:py-20">
      <h2 className="mb-12 text-center text-3xl md:text-5xl font-bold">
        Experience
      </h2>

      {/* Slider Wrapper */}
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden px-4 md:px-8 cursor-none"
      >
        {/* Draggable Slider */}
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          className="flex gap-10"
          onMouseEnter={() => setDragVisible(true)}
          onMouseLeave={() => setDragVisible(false)}
        >
          {sortedExperiences.map((exp, index) => (
            <div
              key={index}
              className="
                min-w-full
                sm:min-w-[85%]
                md:min-w-[400px]
                lg:min-w-[500px]
                rounded-2xl
                border border-neutral-800
                bg-neutral-900/60
                p-6 md:p-8
                backdrop-blur
                transition
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                <span className="text-xs md:text-sm text-neutral-400">{exp.year}</span>
              </div>

              <p className="mt-2 text-blue-400 text-sm md:text-base">{exp.company}</p>
              <p className="mt-4 text-xs md:text-sm text-neutral-400 leading-relaxed">{exp.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="rounded-md bg-neutral-800 px-2 py-1 md:px-3 text-[10px] md:text-xs text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Custom drag cursor (desktop) */}
        {dragVisible && (
          <motion.div
            style={{ x: cursorX, y: cursorY }}
            className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-blue-500/60 text-white rounded-full font-semibold backdrop-blur"
          >
            Drag
          </motion.div>
        )}
      </div>

      {/* Pagination Dots (mobile only) */}
      <div className="flex justify-center mt-8 gap-3 md:hidden">
        {sortedExperiences.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              activeIndex === index ? "bg-blue-500 scale-125" : "bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;