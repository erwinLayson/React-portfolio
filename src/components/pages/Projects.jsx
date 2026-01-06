import { Projects } from "../../data/projectData"


export function Project() {
  return (
    <>
      <section className="flex flex-col shadow-lg shadow-green-500 p-5 rounded-lg gap-10">
        <h1 className="text-3xl text-shadow w-full sm:text-start text-center font-bold">Projects</h1>

        {Projects.map((project, index) => (
          <article key={index} className="flex flex-col p-5 shadow-lg shadow-green-500 rounded-lg gap-7 relative">
            <p className="text-xl font-bold flex flex-col md:flex-row gap-4">Project Title: <span className="text-lg font-semibold">{ project.projectTitle } </span></p>
            <div className="card flex flex-col md:flex-row gap-5">
              <img src={project.image} alt="project Images" className="rounded-lg max-w-200"/>
              
              <article className="flex flex-col rounded-lg gap-10">
                <p className="text-lg italic p-5 rounded-lg shadow-lg shadow-green-500 w-full flex justify-center items-center">
                  { project.description }
                </p>

                <div className="flex flex-col md:flex-row gap-5 rounded-lg shadow-lg shadow-green-500 list-none p-5 justify-evenly items-center relative w-full">
                  <li className="bg-green-500 w-full text-center text-lg rounded-lg hover:shadow-green-500 shadow-md p-2 w-full">
                    <a href={ project.codeLink } className="w-full">View Code</a>
                  </li>
                  <li className="bg-blue-500 w-full text-center text-lg rounded-lg hover:shadow-blue-500 shadow-md p-2">
                    <a href={ project.siteLink }>View Site</a>
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