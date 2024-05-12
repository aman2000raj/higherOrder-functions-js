// custom implementation of the map function.
const map = (numberList, callBackFunction) => {
  let newList = [];
  for (let i = 0; i < numberList.length; i++) {
    newList.push(callBackFunction(numberList[i]));
  }
  return newList;
};

export default map;
