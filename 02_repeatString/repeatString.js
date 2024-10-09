const repeatString = function(string, num) {
let repeatedStr;
if (num === 0) {
    repeatedStr = "";
} else if (num < 0) {
    repeatedStr = "ERROR";
}else {
    for (let i = 1 ; i <= num; i++) {
        if (i === 1){
           repeatedStr = string;
        } else{
           repeatedStr = repeatedStr + string;
        } 
   }
}
return repeatedStr;
};
repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
