"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddNote from "./addNote";
import NoteItem from "./noteItem";

type NoteObj = {
  [key: string]: string;
};

const allNotes = async () => {
  const [getAllNotes, setGetAllNotes] = useState<NoteObj>({});
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    let id = uuidv4();
    localStorage.setItem("userID", JSON.stringify(id));
    setUserID(JSON.parse(`${localStorage.getItem("userID")}`));
  }, [userID]);

  if (userID === null) setUserID(" ");

  const initializeAllNotes = async () => {
    const noteAdded = await fetch(
      `https://crudcrud.com/api/1a84bf1c46ac4a80bd07736cc474ecc9/${userID}/noteList`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return await noteAdded.json();
  };
    // const initialNoteList = await initializeAllNotes();
    // setGetAllNotes(initialNoteList);

  const removeNoteHandler = (uuid: string) => {
    // setGetAllNotes((prev) => {
    //   delete prev[uuid];
    //   return { ...prev };
    // });
  };

  // const submitNote = (note: string) => {
  //   setGetAllNotes((prev) => [...prev, { text: note, key: uuidv4() }]);
  // };

  const onSubmitNote = async (note: string) => {
    // const noteID = uuidv4();

    const noteAdded = await fetch(
      `https://crudcrud.com/api/1a84bf1c46ac4a80bd07736cc474ecc9/${userID}/noteList`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...getAllNotes, [uuidv4()]: note }),
      }
    );
  };

  const clearAll = () => {
    // setGetAllNotes({});
  };

  return (
    <>
      <ul className="notes__list">
        {Object.keys(getAllNotes).length &&
          Object.keys(getAllNotes).map((key) => {
            return (
              <NoteItem
                key={key}
                uuid={key}
                innerText={getAllNotes[key]}
                removeNoteHandler={removeNoteHandler}
              />
            );
          })}
      </ul>
      <AddNote onSubmitNote={onSubmitNote} />
      <button
        type="button"
        onClick={clearAll}>
        Clear All
      </button>
      <button className="share__note">Share Notes</button>
    </>
  );
};

export default allNotes;
