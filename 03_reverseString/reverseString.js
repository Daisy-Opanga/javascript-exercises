const reverseString = function(myString) {
let arrayReverse = () => {
    return myString
    .split("")
    .reverse();
};
return arrayReverse().join("");
};
reverseString("daisy");
console.log("Hi");

// Do not edit below this line
module.exports = reverseString;

