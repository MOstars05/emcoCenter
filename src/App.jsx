import { Link, Route, Routes } from "react-router-dom";
import Control from "./components/control";
import Header from "./components/header";
import Projects from "./components/projects";
import Types from "./components/types";


export default function App() {
  return (
   <div className="text-white bg-b">
    <div className="menuNav md:hidden block bg-black">
      <div className="flex justify-between items-center md:p-0 p-5 text-[11px]">
        <h1 className="text-[#E3B873]">IC "Repair Design Project"</h1>
        <h1 className="text-white">+7 (928) 768-32-39</h1>
      </div>
    </div>

    <div className="navbar w-full p-5 md:block hidden">
      <nav className="flex justify-between items-center">
        <div className="text-[#E3B873]">
          <h1>IC "Repair Design Project"</h1>
        </div>

        <div>
          <ul className="flex items-center gap-5 text-[11px]">
            <li>
              <Link to={'/home'}>HOME</Link>
            </li>

            <li>
              <Link to={'/home'}>PROJECTS</Link>
            </li>

            <li>
              <Link to={'/home'}>MEASUREMENT</Link>
            </li>

            <li>
              <Link to={'/home'}>TEAM</Link>
            </li>

            <li>
              <Link to={'/home'}>REVIEWS</Link>
            </li>

            <li>
              <Link to={'/home'}>CONTACTS</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">

          <div className="text-[#E3B873]">
            <h1>+7 (928) 768-32-39</h1>
          </div>

          <div className="bg-[#E3B873] w-[161px] h-[37px] flex justify-center items-center rounded-[2px]">
            <Link>Request a call</Link>
          </div>
        </div>
      </nav>
    </div>


    <div>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
    <div>
    <Header />
    </div>

    <div>
      <Projects />
    </div>

    <div>
      <Control />
    </div>

    <div>
      <Types />
    </div>

    
   </div>
  )
}