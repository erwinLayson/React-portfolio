import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { MyLanguages } from "./pages/MyLanguages";

import { ROUTES } from "./constant/rotues";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={ROUTES.home} element={ <Home/>} />
          <Route path={ROUTES.about} element={ <AboutMe/>} />
          <Route path={ROUTES.techStack} element={ <MyLanguages/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;