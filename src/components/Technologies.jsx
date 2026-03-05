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