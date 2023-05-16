"use client";
import Image from "next/image";
import { useState } from "react";
import removeIcon from "/public/assets/icons/closeSecondary.webp";
import confirmIcon from "/public/assets/icons/confirm.webp";
import editIcon from "/public/assets/icons/edit.webp";

type Props = {
  uuid: string;
  innerText: string;
  removeNoteHandler: (uuid: string) => void;
};

type NoteObj = {
  value: string;
  status: boolean;
};

const noteItem = (props: Props) => {
  const [noteObj, setNoteObj] = useState<NoteObj>({
    value: props.innerText,
    status: false,
  });

  const editStatusHandler = () =>
    setNoteObj((prev) => {
      return { ...prev, status: !prev.status };
    });

  const noteChangeHandler = (target: EventTarget & HTMLInputElement) =>
    setNoteObj((prev) => {
      return {...prev, value: target.value};
    });

  let editInput = (
    <input
      type="text"
      value={noteObj.value}
      onChange={(e) => noteChangeHandler(e.currentTarget)}
    />
  );

  return (
    <li className="note__item">
      {noteObj.status ? (
        editInput
      ) : (
        <p
          className="note"
          onFocus={editStatusHandler}>
          {noteObj.value}
        </p>
      )}
      <button
        className="note__button--remove"
        type="button"
        onClick={() => {
          props.removeNoteHandler(props.uuid);
        }}>
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
          src={noteObj.status ? confirmIcon : editIcon}
          alt={noteObj.status ? "Confirm Icon" : "Edit Icon"}
          title={noteObj.status ? "Confirm" : "Edit"}
        />
      </button>
    </li>
  );
};

export default noteItem;
