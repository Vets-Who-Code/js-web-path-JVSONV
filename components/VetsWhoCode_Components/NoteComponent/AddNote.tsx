"use client";
import { FC, FormEvent, useState } from "react";
import { sendNoteHandler } from "../AllNotes";

type Props = {
  onUpdateHandler: () => void;
};

const AddNote = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const pushNote = (key?: string) => {
    if ((key && key === "Enter") || !key) {
      sendNoteHandler({ note: inputValue });
      setInputValue("");
    }
  };

  const onSubmitNoteHandler = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    await sendNoteHandler({ note: inputValue });
    setInputValue("");
    props.onUpdateHandler();
  };

  return (
    <form onSubmit={onSubmitNoteHandler}>
      <div className="add-note">
        <label htmlFor="noteInput">Note: </label>
        <input
          name="noteInput"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          // onKeyDown={(e) => pushNote(e.key)}
          value={inputValue}
        />
        <div className="button-container">
          <button>Add Note</button>
        </div>
      </div>
    </form>
  );
};

export default AddNote;
