import { newArr, randomNum, objArrFunction } from "./tsArrayManipulation";
import NotesList from "./NoteComponent/notesList";
import StarWars from "./starWarsFetch";
import Counter from "./Counter";

const main = () => {

  console.log(objArrFunction(newArr, randomNum));

  return (
    <main>
      <Counter />
      <StarWars />
      <NotesList /> 
    </main>
  )
}

export default main