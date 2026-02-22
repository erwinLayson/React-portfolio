import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

const contacts = [
  {accName: "Erwin B. Layson", links: "https://www.facebook.com/warsak.busdak", btnLabel: "Visit FB"},
  {accName: "lasyonerwin28@gmail.com", links: "#", btnLabel: "Visit Gmail"},
  {accName: "Erwin Layson", links: "https://github.com/erwinLayson", btnLabel: "Visit Github"}
]

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/warsak.busdak",
    color: "from-blue-600 to-blue-400",
    hoverColor: "hover:border-blue-500/50",
  },
  {
    name: "Gmail",
    icon: FaEnvelope,
    link: "mailto:lasyonerwin28@gmail.com",
    color: "from-red-500 to-orange-400",
    hoverColor: "hover:border-red-500/50",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/erwinLayson",
    color: "from-gray-600 to-gray-400",
    hoverColor: "hover:border-gray-400/50",
  },
];


export { socialLinks, contacts };