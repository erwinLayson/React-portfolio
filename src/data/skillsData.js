import {
  SiReact,
  SiJavascript,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiCodeigniter,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export const skills = {
  frontend: [
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiCss3, name: "CSS", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  ],
  backend: [
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiCodeigniter, name: "CodeIgniter", color: "text-red-500" },
    { name: "RESTful APIs", color: "text-purple-400" },
    { name: "Authentication", color: "text-orange-400" },
  ],
  database: [
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
  ],
};
