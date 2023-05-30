"use client";
import Image from "next/image";
import { useState } from "react";
import { removeNoteHandler, updateNoteHandler } from "../AllNotes";
import removeIcon from "/public/assets/icons/closeSecondary.webp";
import confirmIcon from "/public/assets/icons/confirm.webp";
import editIcon from "/public/assets/icons/edit.webp";

type Props = {
  uid: string;
  note: string;
  onUpdateHandler: () => void;
};

type NoteObj = {
  _id: string;
  note: string;
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
    <li className="note__item">
      <form onSubmit={sendNoteUpdateHandler}>
        <div className="add-note">
          <textarea
            value={noteObj.noteText}
            onChange={(e) => noteChangeHandler(e.currentTarget)}
          />
          <div className="button-container">
            <button
              className="note__button--modifer"
              type="button"
              onClick={sendNoteUpdateHandler}>
              <Image
                src={confirmIcon}
                alt={"Confirm Icon"}
                title={"Confirm"}
              />
            </button>
          </div>
        </div>
      </form>
    </li>
  );

  return (
      noteObj.editStatus ? (
        noteEditor
      ) : (
        <li className="note__item">
          <p
            className="note"
            onFocus={editStatusHandler}>
            {noteObj.noteText}
          </p>
          <button
            className="note__button--remove"
            type="button"
            onClick={deleteNoteHandler}>
            <Image
              src={removeIcon}
              alt="Remove Icon"
              aria-label="Remove note"
            />
          </button>
          <button
            className="note__button--modifer"
            type="button"
            onClick={editStatusHandler}>
            <Image
              src={editIcon}
              alt={"Edit Icon"}
              title={"Edit"}
            />
          </button>
        </li>
      )
  );
};

export default NoteItem;
