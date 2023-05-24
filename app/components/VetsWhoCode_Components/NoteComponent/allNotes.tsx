"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddNote from "./addNote";
import NoteItem from "./noteItem";

type NotebookObj = {
  _id: string;
  userNotes: {
    [noteID: string]: string;
  };
};

const initializeNotesHandler = async () => {
  const res = await fetch("http://localhost:3000/api/allNotebooks", {
    method: "POST",
    headers: { "Content-type": "application / json" },
    body: JSON.stringify({}),
  });
  console.log(res, "initializer");
  return await res.json();
};

type UserObj = {
  userID: string;
  isEmpty: boolean;
  userNoteBook: NotebookObj;
}

const allNotes = () => {
  const [userObj, setUserObj] = useState<UserObj>({
    userID: "",
    isEmpty: true,
    userNoteBook: {
      _id: "",
      userNotes: {}
    }
  })
  // const [getAllNotes, setGetAllNotes] = useState<NotebookObj>();
  // const [userID, setUserID] = useState<string>();
  // const [isEmpty, setIsEmpty] = useState()

  const getUserNotebook = async (user: string) => {
    const res = await fetch(`http://localhost:3000/api/allNotebooks/${user}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    return await res.json();
  };
  useEffect(() => {
    const user = localStorage.getItem("userID");
    if (!user) {
      const startNotebook = async () => {
        const res = await initializeNotesHandler();
        localStorage.setItem("userID", res.data._id);
        setUserObj(prev => {
          prev.userID = localStorage.getItem("userID")!
          return {...prev}
      });
      };
      startNotebook();
    } else {
      const grab = async (user: string) => {
        const res = await getUserNotebook(user);
        setUserObj((prev) => {
          prev.userID = user;
          prev.userNoteBook = res.data.userNotes
          return { ...prev };
        });
      };
      grab(user);
    }
  }, []);


  const removeNoteHandler = (key: string) => {
    // setGetAllNotes((prev) => {
    //   delete prev[uuid];
    //   return { ...prev };
    // });
    // const res = fetch()
  };

  const onSubmitNote = async (note: string) => {
    const res = await fetch(
      `https://notesapp-fa6f9-default-rtdb.firebaseio.com/${userObj.userID}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ [uuidv4()]: note }),
      }
    );
    const noteAdded = await res.json();
    getUserNotebook(noteAdded.data._id)
  };

  const clearAll = () => {};

  return (
    <>
      <ul className="notes__list"> //needs to be figured out
        {!userObj.isEmpty &&
          Object.keys(userObj.userNoteBook).map((keys) => {
              return (
                <NoteItem
                  key={noteObj._id}
                  innerText={noteObj.userNotes[noteId]}
                  removeNoteHandler={removeNoteHandler}
                />
              );
            }
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

// export async function getServerSideProps() {
//   const getAllNotesHandler = async () => {
//     const res = await fetch(
//       `https://notesapp-fa6f9-default-rtdb.firebaseio.com/${userID}/noteList`,
//       {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );

//     const notes = await res.json();

//     return {props: {notes}}
//   };
// }

export default allNotes;
