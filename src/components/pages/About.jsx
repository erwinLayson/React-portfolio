import {
  SiReact,
  SiJavascript,
  SiExpress, SiCss3,
  SiTailwindcss,
  SiCodeigniter,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  
} from "react-icons/si"



export function AboutMeContent() {
    return (
        <section className="flex gap-10 flex-col text-[var(--tertiary)]">
            <h1 className="text-3xl font-bold text-shadow w-full text-center sm:text-start">About Me</h1>

            <div className="aboutMeSection max-h-screen overflow-y-auto flex flex-col gap-5 shadow-lg shadow-green-500 p-5 rounded-lg">
               <p>
                  Hi, I’m Erwin B. Layson, a BSIT student who enjoys building full-stack web applications and learning how things work behind the scenes..
               </p>

               <p>
                  I’m a curious and patient learner who likes solving problems, especially when it comes to debugging and improving user experience. I enjoy turning ideas into working systems and take satisfaction in writing clean, organized, and readable code. When something doesn’t work, I see it as a challenge to learn rather than a setback.
               </p>

               <p>
                  I primarily work with React (Vite) for frontend development, CSS and Tailwind CSS for styling, and Node.js with Express for backend development. I’m comfortable building RESTful APIs, implementing JWT-based authentication, handling cookies and routing, and connecting applications to databases.
               </p>

               <p>
                  Alongside my academic projects, I’ve worked on freelance, school-related web systems for classmates and students from other sections and schools. These experiences helped me improve my communication skills, understand real user needs, and deliver functional solutions within academic deadlines.
               </p>
            </div>
        </section>
    )
}

export function SkillSummary() {
    return (
        <section className="flex flex-col shadow-lg shadow-green-500 rounded-lg p-5 gap-10">
                <h1 className="text-3xl font-bold text-shadow w-full text-center md:text-start">Skill Summary</h1>
                <div className="flex flex-col sm:flex-row gap-5 justify-around items-start text-lg md:text-2xl ">
                <section className="flex flex-col gap-3">
                    <p className="font-bold text-shadow">Frontend</p>
                    <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 justify-start items-center text-blue-400"><SiReact/> React</li>
                    <li className="flex gap-2 justify-start items-center text-blue-600"><SiCss3/> Css</li>
                    <li className="flex gap-2 justify-start items-center text-blue-300"> <SiTailwindcss/>  Tailwind</li>
                    <li className="flex gap-2 justify-start items-center text-yellow-300/90"><SiJavascript/>  Javascript</li>
                    </ul>
                </section>

                <section className="flex flex-col gap-3">
                    <p className="font-bold text-shadow">Backend</p>
                    <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 justify-start items-center"><SiExpress/>  Express.js</li>
                    <li className="flex gap-2 justify-start items-center text-green-600"><SiNodedotjs/>  Node.js</li>
                    <li className="flex gap-2 flex gap-2 justify-start items-center text-red-500"><SiCodeigniter/>  CodeIgniter</li>
                    <li>RESTful APIs</li>
                    <li>Authentication</li>
                    </ul>
                </section>
                <section className="flex flex-col gap-3">
                    <p className="font-bold text-shadow">Database</p>
                    <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 flex gap-2 justify-start items-center text-green-400"><SiMongodb/>  MongoDB</li>
                    <li className="flex gap-2 flex gap-2 justify-start items-center text-blue-600"><SiMysql/>  MYSQL</li>
                    </ul>
                </section>
                </div>
        </section>
    )
}