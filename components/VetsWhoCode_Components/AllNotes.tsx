import { v4 as uuidv4 } from "uuid";
import classes from "../../styles/Notebook.module.css";
import AddNote from "./NoteComponent/AddNote";
import NoteItem from "./NoteComponent/NoteItem";
import * as fsPromises from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";

export type NoteObj = {
  _id: string;
  note: string;
};

type Note = {
  note: string;
};

export const getAllNotesHandler = async function () {
  const res = await fetch(`/api/notebook`, {
    method: "GET",
    headers: {
      "Content-type": "application / json",
    },
  });

  return await res.json();
};

export const sendNoteHandler = async (note: Note) => {
  let noteId = uuidv4();

  const apiPath = path.join(process.cwd(), "api")

  const res = await fetch(`${apiPath}/notebook/updateNotebook/noteId/${noteId}`, {
    method: "POST",
    headers: { "Content-type": "application / json" },
    body: note.note,
  });
  console.log(res, "returned value")
  const data = await res.json()
  console.log(data, "return value")

  return data;
};

export const updateNoteHandler = async (note: NoteObj) => {
  //old api url = /api/allNotes/noteId/${note._id}

  const res = await fetch(`/api/notebook/updateNotebook/noteId/${note._id}`, {
    method: "PUT",
    headers: { "Content-type": "application / json" },
    body: note.note,
  });

  // console.log(res, "return value")
  return await res.json();
};

export const removeNoteHandler = async (noteId: string) => {
  const res = await fetch(`/api/notebook/deleteNote/noteId/${noteId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });

  return await res.json();
};

export const deleteNoteBookHandler = async (notebook: NoteObj[]) => {
  return await Promise.all(notebook.map((note) => removeNoteHandler(note._id)));
};

type Props = {
  notebook: NoteObj[];
  onUpdateHandler: () => void;
};

const AllNotes = (props: Props) => {
  const { notebook } = props;

  return (
    <div className={classes.notes__container}>
      <h4>Need to write down some notes?</h4>
      <p>Just enter any notes below and stay organized!</p>
      <div className={classes.container}>
        <ul className={classes.notes__list}>
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
        <AddNote
          onUpdateHandler={props.onUpdateHandler}
          notebook={props.notebook}
        />
        {/*I might try and make this sharable later*/}
        {/* <button className="share__note">Share Notes</button> */}
      </div>
    </div>
  );
};

export default AllNotes;
