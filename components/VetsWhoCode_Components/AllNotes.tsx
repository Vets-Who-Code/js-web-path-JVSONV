import { v4 as uuidv4 } from "uuid";
import AddNote from "./NoteComponent/AddNote";
import NoteItem from "./NoteComponent/NoteItem";

type NoteObj = {
  _id: string;
  note: string;
};

type Note = {
  note: string;
};

export const getAllNotesHandler = async function () {
  const res = await fetch(`http://localhost:3000/api/allNotes`, {
    method: "GET",
    headers: {
      "Content-type": "application / json",
    },
  });

  console.log("grabbed all Notes");

  return await res.json();
};

export const sendNoteHandler = async (note: Note) => {
  const res = await fetch(`http://localhost:3000/api/allNotes`, {
    method: "POST",
    headers: { "Content-type": "application / json" },
    body: JSON.stringify(note),
  });

  console.log("sent a note");
  return await res.json();
};

export const updateNoteHandler = async (note: NoteObj) => {
  const res = await fetch(`http://localhost:3000/api/allNotes/noteId/${note._id}`, {
    method: "PUT",
    headers: { "Content-type": "application / json" },
    body: JSON.stringify({note: note.note}),
  });
  console.log(res, "updated a Notes");

  return await res.json();
};

export const removeNoteHandler = async (noteId : string) => {
  console.log("removing");
  const res = await fetch(`http://localhost:3000/api/allNotes/noteId/${noteId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  
  return await res.json()
};

export const deleteNoteBookHandler = async (notebook: NoteObj[]) => {
  return await Promise.all(notebook.map(note => removeNoteHandler(note._id)))
};

type Props = {
  notebook: NoteObj[];
  onUpdateHandler: () => void;
};

const AllNotes = (props: Props) => {
  console.log(props);
  const { notebook } = props;

  const deleteAllNotesHandler = async () => {
    await deleteNoteBookHandler(notebook);
    props.onUpdateHandler()
  };

  return (
    <div className="notes-container">
      <ul className="notes__list">
        {notebook.length > 0 &&
          notebook.map((noteObj) => {
            return (
              <NoteItem
                key={noteObj._id}
                uid={noteObj._id}
                note={noteObj.note}
                onUpdateHandler={props.onUpdateHandler}
              />
            );
          })}
      </ul>
      <AddNote onUpdateHandler={props.onUpdateHandler} />
      <button
        type="button"
        onClick={deleteAllNotesHandler}>
        Clear All
      </button>
      <button className="share__note">Share Notes</button>
    </div>
  );
};

export default AllNotes;
