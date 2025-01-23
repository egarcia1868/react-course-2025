import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Project from "./components/Project";
import ProjectAdder from "./components/ProjectAdder";

function App() {
  const [ projects, setProjects ] = useState([]);
  const [ currentProject, setCurrentProject ] = useState(null);
  const [ addProject, setAddProject ] = useState(false);

  function handleSaveProjects(newProject) {
    setProjects([...projects, newProject])
  }

  function handleAddNewProject() {
    setAddProject(true);
  }

  function handleCloseNewProject() {
    setAddProject(false);
  }

  function handleOpenProject(selectedProject) {
    setCurrentProject(selectedProject)
  }

  return (
    <main>
      <ProjectsSidebar openProject={handleOpenProject} projects={projects} addNewProject={handleAddNewProject}/>
      {addProject && <ProjectAdder onSubmit={handleSaveProjects} projects={projects} onCancel={handleCloseNewProject}/>}
      {!currentProject ? <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> : 
      <Project project={currentProject} />}
    </main>
  );
}

export default App;
