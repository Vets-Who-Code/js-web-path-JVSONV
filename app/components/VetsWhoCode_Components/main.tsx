import { newArr, randomNum, objArrFunction } from "./tsArrayManipulation";
import NotesList from "./NoteComponent/notesList";
import StarWars from "./starWarsFetch";

const main = () => {

  console.log(objArrFunction(newArr, randomNum));

  return (
    <main>
      <StarWars />
      <NotesList /> 
    </main>
  )
}

export default main