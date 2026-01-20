import { AboutMeContent, SkillSummary } from "../components/pages/About";
import { Languages } from "../components/pages/Languages";
import { Project } from "../components/pages/Projects";
import { Contacts } from "../components/pages/Contacts";
import profile from "../../public/profile.jpg"

export function Home() {
  return (
    <>
      <div id="home" className="min-h-screen w-screen bg-[var(--primary)] flex flex-col items-center justify-center sm:justify-around">
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly text-white w-full gap-6">
          <div className="flex flex-col gap-5 justify-center items-center text-[var(--tertiary)]">
            <div className="block">
              <h1 className="text-2xl sm:text-4xl font-semibold text-[var(--tertiary)] shadow-lg text-shadow">
                __Hi I'm Erwin B. Layson
              </h1>
            </div>
            <p className="sm:text-lg px-10 w-full text-center ">
              Aspiring fullstack Web Developer, who are passionate to create a responsive and Secured Website
            </p>
          </div>
                  
          <div className="profile-container h-[18rem] w-[18rem] flex items-center justify-center shadow-md shadow-green-500 rounded-full text-[var(--tertiary)] p-1 relative">
            <img
              src={profile}
              alt="Profile"
              className="h-full w-full rounded-full object-cover max-w-[16rem] max-h-[16rem]"
            />
          </div>
        </div>
      </div>

      <div id="aboutMe" className="min-h-screen min-w-screen bg-[var(--primary)] p-2 md:p-10 gap-10 text-[var(--tertiary)]">
        <section className="flex flex-col gap-10 shadow-lg shadow-green-500 p-5 rounded-lg">
          <AboutMeContent />
          <SkillSummary />
        </section>
      </div>

      <div id="languages" className="min-h-full min-w-screen p-2 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
        <section className="flex flex-col shadow-lg shadow-green-500 p-5 rounded-lg gap-10">
          <Languages/>
        </section>
      </div>

      <div id="projects" className="min-h-screen min-w-screen p-2 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
        <Project />
      </div>
      <Contacts/>
    </>
  );
}
