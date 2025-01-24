import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd, onSubmit, projects, onCancel }) {
//   const [newProject, setNewProject] = useState({
//     title: "",
//     description: "",
//     date: "",
//   });
//   const saveEnabled =
//     newProject.title && newProject.description && newProject.date;

//   function handleChange(inputIdentifier, newValue) {
//     // const project = newProject;
//     // project[property] = e.target.value
//     setNewProject((prevProjectInfo) => {
//       return {
//         ...prevProjectInfo,
//         [inputIdentifier]: newValue,
//       };
//     });
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     onSubmit(newProject);
//     onCancel();
//   }

const title = useRef();
const description = useRef();
const dueDate = useRef();

function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    });
}



  return (
    <div className="w-[35rem] mt-16" >
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type='date' />
      </div>
    </div>
  );
}
