import { useState } from "react";
import Input from "./Input";

export default function NewProject({ onSubmit, projects, onCancel }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    date: "",
  });
  const saveEnabled =
    newProject.title && newProject.description && newProject.date;

  function handleChange(inputIdentifier, newValue) {
    // const project = newProject;
    // project[property] = e.target.value
    setNewProject((prevProjectInfo) => {
      return {
        ...prevProjectInfo,
        [inputIdentifier]: newValue,
      };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(newProject);
    onCancel();
  }

  return (
    <div onSubmit={handleFormSubmit}>
      <menu>
        <li>
          <button onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button type="submit" disabled={!saveEnabled}>
            Save
          </button>
        </li>
      </menu>
      <div>
      <Input label="Title" />
      <Input label="Description" textarea />
      <Input label="Due Date" />
      </div>
    </div>
  );
}
