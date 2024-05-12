const forEach = (array, callBackFunction) => {
  for (let idx = 0; idx < array.length; idx++) {
    const Element = array[idx];
    callBackFunction(Element, idx);
  }
};

export default forEach;
