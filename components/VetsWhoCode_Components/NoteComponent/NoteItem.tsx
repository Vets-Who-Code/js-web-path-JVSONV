"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "../../../pages/CSS/Notebook.module.css";
import { removeNoteHandler, updateNoteHandler } from "../AllNotes";
import confirmIcon from "/public/assets/icons/confirm.webp";
import editIcon from "/public/assets/icons/edit.webp";
import removeIcon from "/public/assets/icons/remove.webp";

type Props = {
  uid: string;
  note: string;
  onUpdateHandler: () => void;
};

type NoteItem = {
  noteId: string;
  noteText: string;
  editStatus: boolean;
};

const NoteItem = (props: Props) => {
  const [noteObj, setNoteObj] = useState<NoteItem>({
    noteId: props.uid,
    noteText: props.note,
    editStatus: false,
  });

  const editStatusHandler = () =>
    setNoteObj((prev) => {
      return { ...prev, editStatus: !prev.editStatus };
    });

  const noteChangeHandler = (target: EventTarget & HTMLTextAreaElement) =>
    setNoteObj((prev) => {
      return { ...prev, noteText: target.value };
    });

  const sendNoteUpdateHandler = async () => {
    editStatusHandler();
    await updateNoteHandler({ _id: noteObj.noteId, note: noteObj.noteText });
    props.onUpdateHandler();
  };

  const deleteNoteHandler = async () => {
    await removeNoteHandler(props.uid);
    props.onUpdateHandler();
  };

  const noteEditor = (
    <li className={classes.note__item}>
      <form onSubmit={sendNoteUpdateHandler} className={classes.update__form}>
        <div className={classes.update__note}>
          <textarea
            className={classes.note}
            value={noteObj.noteText}
            onChange={(e) => noteChangeHandler(e.currentTarget)}
          />
          <button
            className={classes.note__button__edit}
            type="button"
            onClick={sendNoteUpdateHandler}>
            <Image
              src={confirmIcon}
              alt={"Confirm Icon"}
              title={"Confirm"}
            />
          </button>
        </div>
      </form>
    </li>
  );

  return noteObj.editStatus ? (
    noteEditor
  ) : (
    <li className={classes.note__item}>
      <p
        className={classes.note__text}
        onFocus={editStatusHandler}>
        {noteObj.noteText}
      </p>
      <div className={classes.note__edit__buttons}>
        <button
          className={`${classes.note__button} ${classes.note__button__remove}`}
          type="button"
          onClick={deleteNoteHandler}>
          <Image
            src={removeIcon}
            alt="Remove Icon"
            aria-label="Remove note"
          />
        </button>
        <button
          className={`${classes.note__button} ${classes.note__button__edit}`}
          type="button"
          onClick={editStatusHandler}>
          <Image
            src={editIcon}
            alt={"Edit Icon"}
            title={"Edit"}
          />
        </button>
      </div>
    </li>
  );
};

export default NoteItem;
