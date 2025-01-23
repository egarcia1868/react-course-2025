import { useState } from "react";

export default function ProjectAdder({ onSubmit, projects, onCancel }) {
    const [ newProject, setNewProject ] = useState({
        title: '',
        description: '',
        date: ''
    });
    const saveEnabled = (newProject.title && newProject.description && newProject.date);

    function handleChange(inputIdentifier, newValue) {
        // const project = newProject;
        // project[property] = e.target.value
        setNewProject((prevProjectInfo) => {
            return {
                ...prevProjectInfo,
                [inputIdentifier]: newValue
            }
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit(newProject);
        onCancel();
    }

    return (
    <form onSubmit={handleFormSubmit}>
        {/* <button onClick={onCancel}>Cancel</button> */}
        <button type='submit' disabled={!saveEnabled}>Save</button>
        {/* <button onClick={onSubmit()}>Cancel</button><button onClick={onSubmit(...projects, newProject)}>Save</button> */}
      <label>TITLE</label>
      <input value={newProject.title} onChange={(event) => handleChange('title', event.target.value)} type="text" required />
      <label>DESCRIPTION</label>
      <textarea value={newProject.description} onChange={(event) => handleChange('description', event.target.value)} type="text" required />
      <label>DUE DATE</label>
      <input value={newProject.date} onChange={(event) => handleChange('date', event.target.value)} type="date" required />
    </form>
  );
}
