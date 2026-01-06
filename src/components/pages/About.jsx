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

            <div className="flex flex-col gap-5 shadow-lg shadow-green-500 p-5 rounded-lg">
               <p>
                  I am <b>Erwin B. Layson</b> an BSIT Student with hands-on experience in building full stack web applications for academic and real world use. I have developed a full stack <b>Scholarship Application And Management System</b> where I handle both frontend and backend developments, including <b>Authentication, API integration, Database design, and Responsive user Interface</b>.
               </p>

               <p>
                  I work with <b>react(Vite)</b> for Frontend development, <b>css, and tailwind</b> for Styling, and Node.JS with express for the backend development. I am familiar with building <b>RESTful APIs, implenting JWT-based Authentication, cookies, routing, and connecting applications to Databses</b>
               </p>

               <p>
                  In Addition to my academics projects. I Have <b>freelance experience creating paid school related web systems</b> for my classmate, students from other sections, and students from other schools. these projets helped me strengthen my problem solving skills, Understand client requirements, and deliver functional systems within academic deadlines
               </p>

               <p>
                  Rather than memoriezing every features of the language or framework, I focus on Understanding the core concept, writting clean code, and learning new technologies as needed. I am continuously improving my skills through hands-on and AI assisted project and real-world experience while completing studies.
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