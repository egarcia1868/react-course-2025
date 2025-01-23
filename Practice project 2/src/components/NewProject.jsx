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
    <div className="w-[35rem] mt-16" onSubmit={handleFormSubmit}>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md' type="submit" disabled={!saveEnabled}>
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
