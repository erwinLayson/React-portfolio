import {Link} from "react-scroll"

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { ROUTES } from "../constant/rotues";

export function Navbar() {
  const [navIsOpen, setNavIsopen] = useState(false);

  const sidebar = [
    {route: "home", label: "Home"},
    {route: "aboutMe", label: "About Me"},
    {route: "languages", label: "Language"},
    {route: "projects", label: "My Projects"},
    {route: "contacts", label: "Contacts"}
  ]

  function OpenNavbar({link, duration, Label}) {
    return (
      <>
        <Link
          to={`${link}`}
          duration={duration}
          smooth={true}
          onClick={() => (
          setNavIsopen(false)
        )} className="cursor-pointer hover:shadow-green-500 active:shadow-green-500 shadow-lg w-full rounded-lg p-2 text-center">{Label}</Link>
      </>
    )
  }

return (
  <>
    <header className="flex justify-between items-center px-5 z-10 py-2 shadow-lg shadow-green-500 text-white bg-[var(--primary)] fixed top-0 w-full">
        <h1 className="logo text-shadow text-2xl font-bold">
            Personal Portfolio
        </h1>

      <button className="block sm:hidden hover:shadow-green-500 active:shadow-green-500 shadow-lg rounded-lg p-2 cursor-pointer" onClick={() => setNavIsopen((prev) => !prev)}>
            {navIsOpen ? <XMarkIcon className="h-8 w-8 text-white"/> : <Bars3Icon className="h-8 w-8 text-white"/>}
      </button>

      <ul className={`hidden sm:flex w-[12rem gap-[1rem] list-none justify-center items-center bg-[var(--primary)] text-white right-5 top-[5rem] rounded-lg p-3`}>
        {sidebar.map((data, index) => (
          <li key={index}>
            <OpenNavbar
              link={data.route}
              duration={1500}
              Label={data.label}
            />
          </li>
        ))}
      </ul>
    </header>

      <ul className={`${navIsOpen ? "flex" : "hidden"} sm:hidden w-[12rem] flex-col gap-[1rem] list-none fixed justify-center items-center bg-[var(--primary)] text-white right-5 top-[5rem] rounded-lg p-3 shadow-lg shadow-green-500 z-10`}>
        
      {sidebar.map((sidebarLinks, index) => (
        <li key={index} className="flex justify-center items-center w-full">
          <OpenNavbar
            link={sidebarLinks.route}
            duration={1500}
            Label={sidebarLinks.label}
          />
        </li>
      ))}
      </ul>
  </>
  )
}