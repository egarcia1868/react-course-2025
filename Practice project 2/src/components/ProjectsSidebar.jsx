import React from 'react';

export default function ProjectsSidebar({openProject, projects, addNewProject}) {
    return <nav>
        <h2>YOUR PROJECTS</h2>
        <button onClick={addNewProject}>+ Add Project</button>
        <ul>
            {projects.length < 1 ? <p>No projects yet</p> : projects.map((project, i) => {
                return (
                    <button key={i} onClick={openProject(projects[i])}>{project.title}</button>
                )
            })}
        </ul>
    </nav>
};
