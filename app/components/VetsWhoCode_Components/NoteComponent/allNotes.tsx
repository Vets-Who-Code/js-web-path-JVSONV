"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddNote from "./addNote";
import NoteItem from "./noteItem";

type NoteObj = {
  text: string;
  key: string;
};

const allNotes = () => {
  const [getAllNotes, setGetAllNotes] = useState<NoteObj[]>([]);

  const removeNoteHandler = (uuid: string) => {
    setGetAllNotes((prev) => {
      const index = prev.findIndex((element) => element.key === uuid);
      return prev.filter(noteObj => noteObj.key !== uuid);
    });
  };

  const addToNotes = (note: string) => {
    console.log(note);
    setGetAllNotes((prev) => [...prev, { text: note, key: uuidv4() }]);
  };

  const clearAll = () => {
    setGetAllNotes([]);
  };

  return (
    <>
      <ul className="notes__list">
        {getAllNotes.map((note) => {
          return (
            <NoteItem
              key={note.key}
              uuid={note.key}
              innerText={note.text}
              removeNoteHandler={removeNoteHandler}
            />
          );
        })}
      </ul>
      <AddNote
        addToNotes={addToNotes}
        clearAll={clearAll}
      />
    </>
  );
};

export default allNotes;
