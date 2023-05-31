"use client";
import { FormEvent, useState } from "react";
import classes from "../../../styles/Notebook.module.css";
import { NoteObj, sendNoteHandler, deleteNoteBookHandler } from "../AllNotes";


type Props = {
  onUpdateHandler: () => void;
  notebook: NoteObj[]
};

const AddNote = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmitNoteHandler = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    await sendNoteHandler({ note: inputValue });
    setInputValue("");
    props.onUpdateHandler();
  };

  const deleteAllNotesHandler = async () => {
    await deleteNoteBookHandler(props.notebook);
    props.onUpdateHandler();
  };

  return (
    <form onSubmit={onSubmitNoteHandler}>
      <div className={classes.add__note}>
        <label
          htmlFor="noteInput"
          className={classes.note__label}>
          Note:{" "}
        </label>
        <textarea
          className={classes.note__input}
          name="noteInput"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          cols={30}
          rows={5}></textarea>
        <div className={classes.button__container}>
          <button className={classes.button__add}>Add Note</button>
          <button
            className={classes.button__clear}
            type="button"
            onClick={deleteAllNotesHandler}>
            Clear All
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNote;
