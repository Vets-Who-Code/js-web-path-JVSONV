import Counter from "./Counter";
import StarWars from "./StarWarsFetch";
import jsArray from "./arrayManipulation";
import objArrFunction, { newArr, randomNum } from "./tsArrayManipulation";


type Props = {
  children: React.ReactNode;
};

const Main = (props: Props) => {
  jsArray();

  console.log(objArrFunction(newArr, randomNum));

  return (
    <main>
      {props.children}
    </main>
  );
};

export default Main;
