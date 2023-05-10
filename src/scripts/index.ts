type objArr = { value: string }[];

const objArrFunction = (arr: objArr, num: number): objArr => {
  for (let i = 0; i <= num; i++) {
    let j = 0;
    let randomLetters = "";
    while (j <= num) {
      randomLetters += String.fromCharCode(
        Math.floor(Math.random() * (90 - 65) + 65) + 1
      );
      j++;
    }
    arr.push({ value: randomLetters });
  }
  return arr;
};
let randomNum: number = Math.floor(Math.random() * (5 - 1) + 1) + 1;
let newArr: objArr = [];
console.log(objArrFunction(newArr, randomNum));
