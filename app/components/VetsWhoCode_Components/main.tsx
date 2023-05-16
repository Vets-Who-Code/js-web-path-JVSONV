import { newArr, randomNum, objArrFunction } from "./tsArrayManipulation";
import NotesList from "./NoteComponent/notesList";

const main = () => {

  console.log(objArrFunction(newArr, randomNum));

  return (
    <main>
      <NotesList /> 
    </main>
  )
}

export default main