// import React from "react";

// const projects = [
//   {
//     id: 1,
//     title: "SEO Landing Page - Local Business",
//     description: "Optimized landing page targeting local SEO in Bulacan.",
//     link: "#", // replace with actual project link
//   },
//   {
//     id: 2,
//     title: "E-commerce SEO Optimization",
//     description: "Technical SEO & speed optimization for online store.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Corporate Website Redesign",
//     description: "Modern UI redesign with performance improvements.",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Content Strategy Project",
//     description: "Keyword research & authority-building campaign.",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "AMP Page Development",
//     description: "Improved mobile performance using AMP framework.",
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "SEO Audit & Technical Fix",
//     description: "Full technical audit with structured data implementation.",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-24 px-6">
//       <h2 className="my-20 text-center text-5xl font-bold text-white">
//         PROJECTS
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             {/* Image Placeholder */}
//             <div className="h-48 bg-neutral-800 rounded-lg mb-6 flex items-center justify-center text-gray-500">
//               Project Image
//             </div>

//             <div className="flex flex-col flex-1">
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-auto inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200"
//               >
//                 See Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-6 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h2 className="my-10 text-5xl font-bold text-white">PROJECTS</h2>

        <p className="text-3xl text-gray-400 animate-pulse tracking-widest">
          Coming Soon...
        </p>
      </div>
    </div>
  );
};

export default Projects;
