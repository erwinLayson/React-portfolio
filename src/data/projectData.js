import {osas, lostAndFound } from "../assets/index";

export const Projects = [
  {
    projectTitle: "SKSU Osas Scholarship Application and Management System",
    image: osas,
    description: "I developed a full-stack Scholarship Application and Management System where students can apply online, and administrators can review applications, manage requirements, and track student status and GWA. The system was built using React, Node.js, Express.js, RESTful APIs, JWT authentication, and MySQL (via XAMPP). This project was created for academic purposes and is intended for use by the SKSU OSAS organization.",
    codeLink: "https://github.com/erwinLayson/OSAS-Scholarship-information-System",
    siteLink: "https://erwinlayson.github.io/Scholarship-Application-and-Management-System/#/home"
  },
  
  {
    projectTitle: "SKSU Lost and found Platform",
    image: lostAndFound,
    description: `I developed a frontend-only Lost and Found Management System designed for school requirements. The platform allows users to post, view, and manage lost or found items through an interactive web interface. The system was built using HTML, CSS, and JavaScript only, with LocalStorage used to store and retrieve item data locally within the browser. This project does not use a backend server, database, or authentication system, and all data is stored temporarily on the user’s device. The system was created strictly for academic purposes, to demonstrate core web development concepts such as DOM manipulation, client-side data handling, and responsive UI design. It is not intended for real-world or production use.`,
    codeLink: "https://github.com/erwinLayson/lostAndFoundPlatform",
    siteLink: "https://erwinlayson.github.io/lostAndFoundPlatform/"
  },

]