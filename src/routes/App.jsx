import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { ProjectsContextProvider } from "../store/Projects-context";

function App() {

  return (
   <div className="flex h-screen w-full bg-white">
    <ProjectsContextProvider>
        <nav className="w-72 flex flex-col mt-8 ">
          <Sidebar />
        </nav>
        <main className="flex-1 h-full pt-8 px-12 overflow-y-auto">
          <Outlet />
        </main>
    </ProjectsContextProvider>
    </div>
  );
}

export default App;
