const jsArray = () => {
  const numArr = [];

  const randomNum = () => {
    return Math.floor(Math.random() * (100 - 1) + 1) + 1;
  };

  let j = 0;

  while (j <= 5) {
    numArr.push(randomNum());
    j++;
  }

  let counter = 0;
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] += counter;
    counter++;
  }

  const consoleLoggingAnArray = (arr) => {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        i++;
        console.log("The number is even.");
      }

      i++;
      console.log("The number is odd.");
    }
  };
  consoleLoggingAnArray(numArr);
  consoleLoggingAnArray([42, 36, 27, 55]);
  numArr.splice(2, 1);
  numArr.unshift("Hello");
  numArr.push("World");
  console.log(numArr);
};

export default jsArray;
