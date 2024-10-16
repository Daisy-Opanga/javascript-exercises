const removeFromArray = function(arr, ...arg) {
    // let finalArr = arr;
    //     for (let x of arg){
    //         finalArr = finalArr.filter((val) => val !== x);
    //     }
    //     return finalArr;
    return arg.reduce((arr, argX) => {
        return arr.filter((arrVal) => arrVal !== argX);
    }, arr);
};

// Do not edit below this line
module.exports = removeFromArray;
