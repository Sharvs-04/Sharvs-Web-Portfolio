import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

const Category = ({ category }) => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const [dragWidth, setDragWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  // calculate max drag width
  useLayoutEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setDragWidth(sliderWidth - containerWidth);
    }
  }, [category.projects]);

  // sync active dot with slider position
  useLayoutEffect(() => {
    const unsubscribe = x.onChange((latestX) => {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 24; // card + gap
      const index = Math.round(Math.abs(latestX) / cardWidth);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x]);

  // click dot → move slider
  const scrollToCard = (index) => {
    const cardWidth = sliderRef.current.children[0].offsetWidth + 24;
    x.set(-index * cardWidth);
  };

  const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
  const handleLeave = () => setCursor(prev => ({ ...prev, visible: false }));

  return (
    <div className="mb-24 relative">
      <h3 className="text-lg font-semibold mb-8 tracking-widest text-neutral-300">{category.title}</h3>

      {/* DRAG CURSOR */}
      {cursor.visible && (
        <div
          className="fixed pointer-events-none z-50"
          style={{ top: cursor.y - 30, left: cursor.x - 30 }}
        >
          <div className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-xs tracking-widest text-white border border-white/10">
            DRAG
          </div>
        </div>
      )}

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
      >
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          className="flex gap-6 cursor-none"
        >
          {category.projects.map((project, index) => (
            <motion.div
              key={index}
              className="
                min-w-[90%] sm:min-w-[280px] md:min-w-[350px] lg:min-w-[400px]
                bg-neutral-900/60 backdrop-blur rounded-2xl overflow-hidden
                border border-white/5 shadow-lg
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[180px] object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium tracking-wide text-neutral-200">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots (mobile only) */}
      <div className="flex justify-center mt-6 gap-3 md:hidden">
        {category.projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              activeIndex === index ? "bg-blue-500 scale-125" : "bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;