import { NORMAL } from "../helper/constants";

const generator = (length) => {
  let list = [];
  let min = 1,
    max = 100;

  for (let counter = 0; counter < length; counter++) {
    //Creates a Random Number between min & max
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    list.push({ key: parseInt(num), classType: NORMAL });
  }
  return list;
};

export default generator;
