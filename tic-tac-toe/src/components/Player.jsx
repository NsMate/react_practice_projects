import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(value) {
    setPlayerName(value);
  }

  function handleEditClick(){
    setIsEditing((editing) => !editing);
    if(isEditing){
        onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <button onClick={() => handleEditClick}>Save</button>
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}
    </li>
  );
}
