import { Projects } from "../../data/projectData"

import "../style/projects.css"


export function Project() {
  return (
    <>
      <section className="flex flex-col p-5 rounded-lg gap-10">
        <h1 className="text-3xl text-shadow w-full sm:text-start text-center font-bold">Projects</h1>

        {Projects.map((project, index) => (
          <article key={index} className="flex flex-col p-5 shadow-lg shadow-green-500 rounded-lg gap-7 relative">
            <p className="text-xl font-bold flex flex-col md:flex-row gap-4">Project Title: <span className="text-lg font-semibold">{ project.projectTitle } </span></p>
            <div className="card flex flex-col md:flex-row gap-5">
              <img src={project.image} alt="project Images" className="rounded-lg max-w-[100%] md:max-w-[60%]"/>
              
              <article className="flex flex-col rounded-lg gap-10">
                <p className="project-description text-lg italic max-h-[20rem] overflow-y-auto p-5 rounded-lg shadow-lg shadow-green-500 w-full">
                  { project.description }
                </p>

                <div className="flex flex-col sm:flex-row gap-5 rounded-lg shadow-lg shadow-green-500 list-none p-5 justify-evenly items-center relative w-full">
                  <li className="flex w-full">
                    <a href={ project.codeLink } className="w-full text-center rounded-lg p-2 cursor-pointer bg-green-500 hover:bg-green-500/80 transition">View Code</a>
                  </li>
                  <li className="flex items-center justify-center w-full">
                    <a href={ project.siteLink } className="w-full text-center cursor-pointer bg-blue-500 rounded-lg p-2 hover:bg-blue-500/80 transition text-lg">View Site</a>
                  </li>
                </div>
              </article>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}