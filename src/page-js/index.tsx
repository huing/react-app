import React from "react";

const PageJS: React.FC = () => {
  const arrFun = (array: number[]) => {
    let index = 0;
    let currentIndex = 0;
    let optioner = "+";
    for (index; index < array.length; index += 1) {
      const element = array[index];
      if (optioner === "+" && element >= array[index + 1]) {
        if (element >= array[currentIndex]) {
          console.log(optioner, currentIndex, element);
          currentIndex = index;
        }
        optioner = "-";
      }
      if (optioner === "-" && element <= array[index + 1]) {
        if (element <= array[currentIndex]) {
          console.log(optioner, currentIndex, element);
          // currentIndex = index;
        }
        optioner = "+";
      }
    }
    console.log(currentIndex);
  };

  // arr.sort((a, b) => a - b)

  const arr = [0, 1, 0];
  // const arr = [1, 3, 5, 4, 7, 9, 6, 8, 2, 0];
  arrFun(arr);
  return <div>{}</div>;
};
export default PageJS;
