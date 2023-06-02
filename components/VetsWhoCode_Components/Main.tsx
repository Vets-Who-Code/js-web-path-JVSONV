import Counter from "./Counter";
import StarWars from "./StarWarsFetch";
import jsArray from "./arrayManipulation";
import objArrFunction, { newArr, randomNum } from "./tsArrayManipulation";

const Main = () => {
  jsArray();

  console.log(objArrFunction(newArr, randomNum));

  return (
    <main>
      <Counter />
      <StarWars />
    </main>
  );
};

export default Main;
