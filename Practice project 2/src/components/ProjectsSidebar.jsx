import React from 'react';

export default function ProjectsSidebar({openProject, projects, addNewProject}) {
    return <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>YOUR PROJECTS</h2>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100' onClick={addNewProject}>+ Add Project</button>
        <ul>
            {projects.length < 1 ? <p>No projects yet</p> : projects.map((project, i) => {
                return (
                    <button key={i} onClick={openProject(projects[i])}>{project.title}</button>
                )
            })}
        </ul>
    </aside>
};
