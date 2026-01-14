import {Link} from "react-scroll"

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { ROUTES } from "../constant/rotues";

export function Navbar() {
  const [navIsOpen, setNavIsopen] = useState(false);

  function OpenNavbar({link, duration, Label}) {
    return (
      <>
        <Link
          to={`${link}`}
          duration={duration}
          smooth={true}
          onClick={() => (
          setNavIsopen(false)
        )} className="cursor-pointer hover:shadow-green-500  active:shadow-green-500 shadow-lg">{Label}</Link>
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
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
          <Link
                to={"home"}
                duration={1500}
                smooth={true}
                className="cursor-pointer"
            >Home</Link>
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2" >
            <Link
                to={"aboutMe"}
                duration={1500}
                smooth={true}
                className="cursor-pointer"
            >About</Link>
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
          <Link
            to={'languages'}
            duration={1500}
            smooth={true}
            className="cursor-pointer"                            
          >Language</Link>
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
            <Link
              to={"projects"}
              duration={1500}
              smooth={true}
              className="cursor-pointer"
            >Projects</Link>
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
          <Link
            to={"contacts"}
            duration={1500}
            smooth={true}
            className="cursor-pointer"
          >Contacts</Link>
        </li>
      </ul>
    </header>

      <ul className={`${navIsOpen ? "flex" : "hidden"} sm:hidden w-[12rem] flex-col gap-[1rem] list-none fixed justify-center items-center bg-[var(--primary)] text-white right-5 top-[5rem] rounded-lg p-3 shadow-lg shadow-green-500 z-10`}>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
          <OpenNavbar
            link={"home"}
            duration={1500}
            Label={"Home"}
          />
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2" >
            <OpenNavbar
              link={"aboutMe"}
              duration={1500}
              Label={"Aboute Me"}
            />
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
          <OpenNavbar
            link={"languages"}
            duration={1500}
            Label={"Languages"}
          />
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
            <OpenNavbar
              link={"projects"}
              duration={1500}
              Label={"My Projects"}
            />
        </li>
        <li className="hover:shadow-green-500 active:shadow-green-500 rounded-md shadow-md w-full text-center p-2">
           <OpenNavbar
            link={"contacts"}
            duration={1500}
            Label={"Contact Me"}
          />
        </li>
      </ul>
  </>
  )
}