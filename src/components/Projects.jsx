// import React, { useRef, useState, useLayoutEffect } from "react";
// import { motion, useMotionValue } from "framer-motion";

// // Categories / projects data
// const categories = [
//   {
//     title: "IGAMING SINGLE PRODUCT WEBPAGE",
//     projects: [
//       { title: "Casino Landing Page", image: "/images/product-website.png" },
//       { title: "Sports Betting Page", image: "/images/product-website.png" },
//       { title: "Gaming Promo Page", image: "/images/product-website.png" },
//     ],
//   },
//   {
//     title: "GRAPHIC DESIGN",
//     projects: [
//       { title: "Menu Design", image: "/images/graphic-design.png" },
//       { title: "Promo Banner", image: "/images/graphic-design.png" },
//       { title: "Social Media Creative", image: "/images/graphic-design.png" },
//     ],
//   },
//   {
//     title: "WEB DESIGN",
//     projects: [
//       { title: "Corporate Website", image: "/images/website-design.png" },
//       { title: "Landing Page", image: "/images/landing-pages.png" },
//       { title: "Startup Website", image: "/images/website-design.png" },
//     ],
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-28 px-6 text-white max-w-7xl mx-auto">
//       <h2 className="text-5xl font-bold text-center my-20 tracking-tight">
//         Projects
//       </h2>

//       {/* Map over all categories */}
//       {categories.map((category, i) => (
//         <Category key={i} projectsData={category} />
//       ))}
//     </div>
//   );
// };

// const Category = ({ projectsData }) => {
//   const sliderRef = useRef(null);
//   const containerRef = useRef(null);

//   const x = useMotionValue(0);
//   const [dragWidth, setDragWidth] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

//   // Safely default projects
//   const projects = Array.isArray(projectsData?.projects)
//     ? projectsData.projects
//     : [];

//   const title = projectsData?.title || "Projects";

//   // Calculate max drag width
//   useLayoutEffect(() => {
//     if (sliderRef.current && containerRef.current && projects.length > 0) {
//       const sliderWidth = sliderRef.current.scrollWidth;
//       const containerWidth = containerRef.current.offsetWidth;
//       const width = sliderWidth - containerWidth;
//       setDragWidth(width > 0 ? width : 0);
//     }
//   }, [projects]);

//   // Sync active dot with slider position
//   useLayoutEffect(() => {
//     const unsubscribe = x.onChange((latestX) => {
//       if (sliderRef.current && sliderRef.current.children.length > 0) {
//         const cardWidth = sliderRef.current.children[0].offsetWidth + 24; // gap
//         const index = Math.round(Math.abs(latestX) / cardWidth);
//         setActiveIndex(index);
//       }
//     });
//     return () => unsubscribe();
//   }, [x]);

//   // Click dot → scroll slider
//   const scrollToCard = (index) => {
//     if (sliderRef.current && sliderRef.current.children.length > 0) {
//       const cardWidth = sliderRef.current.children[0].offsetWidth + 24;
//       x.set(-index * cardWidth);
//     }
//   };

//   // Custom drag cursor
//   const handleMouseMove = (e) =>
//     setCursor({ x: e.clientX, y: e.clientY, visible: true });
//   const handleLeave = () =>
//     setCursor((prev) => ({ ...prev, visible: false }));

//   return (
//     <div className="mb-24 relative">
//       <h3 className="text-lg font-semibold mb-8 tracking-widest text-neutral-300">
//         {title}
//       </h3>

//       {/* DRAG CURSOR */}
//       {cursor.visible && (
//         <div
//           className="fixed pointer-events-none z-50"
//           style={{ top: cursor.y - 30, left: cursor.x - 30 }}
//         >
//           <div className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-xs tracking-widest text-white border border-white/10">
//             DRAG
//           </div>
//         </div>
//       )}

//       {/* Slider Container */}
//       <div
//         ref={containerRef}
//         className="relative overflow-hidden"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleLeave}
//       >
//         <motion.div
//           ref={sliderRef}
//           drag={projects.length > 0 ? "x" : false}
//           dragConstraints={{ left: -dragWidth, right: 0 }}
//           dragElastic={0.08}
//           style={{ x }}
//           className="flex gap-6 cursor-none"
//         >
//           {projects.length > 0 ? (
//             projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 className="
//                   min-w-[90%] sm:min-w-[280px] md:min-w-[350px] lg:min-w-[400px]
//                   bg-neutral-900/60 backdrop-blur rounded-2xl overflow-hidden
//                   border border-white/5 shadow-lg
//                 "
//               >
//                 {project.image && (
//                   <div className="overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title || "Project"}
//                       className="w-full h-[180px] object-cover"
//                     />
//                   </div>
//                 )}
//                 <div className="p-5">
//                   <p className="text-sm font-medium tracking-wide text-neutral-200">
//                     {project.title || "Untitled"}
//                   </p>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-neutral-400 p-5">No projects yet.</p>
//           )}
//         </motion.div>
//       </div>

//       {/* Pagination Dots (mobile only) */}
//       {projects.length > 1 && (
//         <div className="flex justify-center mt-6 gap-3 md:hidden">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToCard(index)}
//               className={`h-3 w-3 rounded-full transition-all ${
//                 activeIndex === index ? "bg-blue-500 scale-125" : "bg-neutral-600"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;


import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Jarot88 from "../assets/Jarot88.jpeg";

const categories = [
  {
    title: "IGAMING SINGLE PRODUCT WEBPAGE",
    projects: [
      {
        title: "Casino Promotion Landing Page Design",
        image: Jarot88,
        link: "https://www.fortressydc.org/calendar",
        live: true,
      },
      {
        title: "Sports Betting Page",
        image: "/images/product-website.png",
        live: false,
      },
      {
        title: "Gaming Promo Page",
        image: "/images/product-website.png",
        live: false,
      },
    ],
  },
  {
    title: "GRAPHIC DESIGN",
    projects: [
      { title: "Menu Design", image: "/images/graphic-design.png", live: false },
      { title: "Promo Banner", image: "/images/graphic-design.png", live: false },
      { title: "Social Media Creative", image: "/images/graphic-design.png", live: false },
    ],
  },
  {
    title: "WEB DESIGN",
    projects: [
      { title: "Corporate Website", image: "/images/website-design.png", live: false },
      { title: "Landing Page", image: "/images/landing-pages.png", live: false },
      { title: "Startup Website", image: "/images/website-design.png", live: false },
    ],
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-32 px-6 text-white max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mt-24 mb-6 tracking-tight">
        Projects
      </h2>

      <p className="text-center text-neutral-400 mb-20 text-sm tracking-wide">
        Selected work & experiments
      </p>

      {categories.map((category, i) => (
        <Category key={i} projectsData={category} />
      ))}
    </div>
  );
};

const Category = ({ projectsData }) => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const [dragWidth, setDragWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [hoveringButton, setHoveringButton] = useState(false);

  const projects = Array.isArray(projectsData?.projects)
    ? projectsData.projects
    : [];

  const title = projectsData?.title || "Projects";

  useLayoutEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const width = sliderWidth - containerWidth;
      setDragWidth(width > 0 ? width : 0);
    }
  }, [projects]);

  useLayoutEffect(() => {
    const unsubscribe = x.onChange((latestX) => {
      if (sliderRef.current?.children.length) {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 24;
        const index = Math.round(Math.abs(latestX) / cardWidth);
        setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [x]);

  const scrollToCard = (index) => {
    if (sliderRef.current?.children.length) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 24;
      x.set(-index * cardWidth);
    }
  };

  const handleMouseMove = (e) => {
    if (!hoveringButton) {
      setCursor({
        x: e.clientX,
        y: e.clientY,
        visible: true,
      });
    }
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="mb-28 relative">
      <h3 className="text-sm font-semibold mb-8 tracking-[0.25em] text-neutral-400">
        {title}
      </h3>

      {/* Drag Cursor */}
      {cursor.visible && !hoveringButton && (
        <div
          className="fixed pointer-events-none z-50"
          style={{ top: cursor.y - 28, left: cursor.x - 28 }}
        >
          <div className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-[10px] tracking-widest text-white border border-white/10">
            DRAG
          </div>
        </div>
      )}

      {/* Slider */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="
                relative
                min-w-[90%] sm:min-w-[280px] md:min-w-[360px] lg:min-w-[420px]
                bg-neutral-900/60 backdrop-blur-xl
                rounded-2xl overflow-hidden
                border border-white/5
                shadow-xl
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                transition-shadow duration-300
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-[220px] object-cover transition duration-500 ${
                    project.live ? "" : "blur-sm brightness-75"
                  }`}
                />

                {!project.live && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="px-5 py-2 text-[10px] tracking-[0.35em] uppercase border border-white/30 rounded-full text-white bg-white/10">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex justify-between items-center">
                <p className="text-sm tracking-wide text-neutral-200">
                  {project.title}
                </p>

                {project.live && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveringButton(true)}
                    onMouseLeave={() => setHoveringButton(false)}
                    className="text-xs px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition cursor-pointer"
                  >
                    See Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pagination */}
      {projects.length > 1 && (
        <div className="flex justify-center mt-6 gap-3 md:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-blue-500 scale-125"
                  : "bg-neutral-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;