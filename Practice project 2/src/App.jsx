import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [ projects, setProjects ] = useState([]);
  const [ currentProject, setCurrentProject ] = useState(null);
  const [ addProject, setAddProject ] = useState(false);
  const [ projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSaveProjects(newProject) {
    setProjects([...projects, newProject])
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  function handleCloseNewProject() {
    setAddProject(false);
  }

  function handleOpenProject(selectedProject) {
    setCurrentProject(selectedProject)
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} openProject={handleOpenProject} projects={projects} addNewProject={handleStartAddProject}/>
      {content}
      {/* {addProject && <NewProject onSubmit={handleSaveProjects} projects={projects} onCancel={handleCloseNewProject}/>} */}
      {/* {!currentProject ? <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> :  */}
      {/* <Project project={currentProject} />} */}
    </main>
  );
}

export default App;
