import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
let btnCaption = 'Edit'

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    btnCaption = 'Save'
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
