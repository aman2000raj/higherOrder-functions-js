const filter = (array, callBackFuction) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callBackFuction(array[i], i, array) === true) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

export default filter;
