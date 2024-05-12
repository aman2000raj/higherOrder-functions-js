const reduce = (array, callBackFuction) => {
    let accumulator = 0;
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        accumulator += callBackFuction(accumulator, element, i, array);
    }
    return accumulator;

}

export default reduce;