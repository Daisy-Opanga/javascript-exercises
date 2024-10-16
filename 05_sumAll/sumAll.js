const sumAll = function(num1, num2) {
    let sum = 0;
    let larger, smaller;
    
    if(typeof num1 !== "number" || typeof num2 !== "number" || !Number.isInteger(num1) ||
    !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
       return "ERROR"; 
    } else{
        num1 < num2 ? larger = num2 : larger =num1;
        num1 < num2 ? smaller = num1 : smaller = num2;
        // alternatively use: 
        // let larger = Math.max(num1, num2);
        // let smaller = Math.min(num1, num2);
        let x = smaller;
        for ( x; x <= larger; x++) {
            sum = sum + x ; 
         }
         return sum;
    } 

};

// Do not edit below this line
module.exports = sumAll;
