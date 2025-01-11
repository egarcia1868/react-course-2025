import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
//   const [playerName, setPlayerName] = useState(name);
let btnCaption = 'Edit'

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnCaption = 'Save'
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">O</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
