"use client";
import { useState } from "react";

type Props = {
  addToNotes: (note: string) => void;
  clearAll: () => void;
};

const addNote = (props: Props) => {

  const [inputValue, setInputValue] = useState<string>("");

  const pushNote = (key?: string) => {
    if (key && key === "Enter" || !key) {
      props.addToNotes(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="add-note">
      <label htmlFor="noteInput"></label>
      <input
        name="noteInput"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => pushNote(e.key)}
        value={inputValue}
      />
      <div className="button-container">
        <button
          type="button"
          onClick={() => pushNote()}>
          Add Note
        </button>
        <button type="button" onClick={props.clearAll}>Clear All</button>
        <button type="button">Share Notes</button>
      </div>
    </div>
  );
};

export default addNote;
