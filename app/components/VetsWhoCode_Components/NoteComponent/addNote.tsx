"use client";
import { FC, FormEvent, useState } from "react";

type Props = {
  onSubmitNote: (note: string) => void;
};

const addNote: FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const pushNote = (key?: string) => {
    if ((key && key === "Enter") || !key) {
      props.onSubmitNote(inputValue);
      setInputValue("");
    }
  };

  const onSubmitNoteHandler = (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    props.onSubmitNote(inputValue);
  };

  return (
    <form onSubmit={onSubmitNoteHandler}>
      <div className="add-note">
        <label htmlFor="noteInput">Note: </label>
        <input
          name="noteInput"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => pushNote(e.key)}
          value={inputValue}
        />
        <div className="button-container">
          <button>Add Note</button>
        </div>
      </div>
    </form>
  );
};

export default addNote;
