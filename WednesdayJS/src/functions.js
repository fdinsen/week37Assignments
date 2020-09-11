//1
function add(n1, n2) {
    return n1 + n2;
}
;

var sub = function (n1, n2) {
    return n1 - n2;
};

//callback er standard parameternavnet for når man forventer en metode
var cb = function (n1, n2, callback) {
    try {
        return "Result using the numbers: " + n1 + " and  " + n2 + " = " + callback(n1, n2);
    } catch (e) {
        return "TypeError: callback is not a function";
    }
};


//2
console.log(add(1, 2));     // What will this print?: 3
console.log(add);   // What will it print and what does add represent?: prints method, represents memory address
console.log(add(1, 2, 3)); // What will it print:  3, ignores third parameter
console.log(add(1));	  // What will it print: NaN, since 2nd parameter is undefined
console.log(cb(3, 3, add)); // What will it print: 
//"Result using the numbers: 3 and  3 = 6"
console.log(cb(4, 3, sub)); // What will it print
//"Result using the numbers: 4 and  3 = 1"
console.log(cb(3, 3, add())); // What will it print (and what was the problem)
//A TypeError  
//The problem is that you give the RESULT of the method as a parameter
//You're trying to run a number as a method
console.log(cb(3, "hh", add));// What will it print
//"Result using the numbers: 3 and  hh = 3hh"


cb = function(n1, n2, callback) {
    if(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") {
        return "Result using the numbers: " + n1 + " and  " + n2 + " = " + callback(n1, n2);
    }else if(typeof n1 !== "number"){
        return "TypeError: n1 is not a number";
    }else if (typeof n2 !== "number"){
        return "TypeError: n2 is not a number";
    }else {
        return "TypeError: callback is not a number";
    }
};        

//3
//Testing error handling
console.log(cb("as", 2, add));
console.log(cb(2, "as", add));
console.log(cb(2,2,"as"));

mul = function(n1, n2) {
    return n1 * n2;
};

//Multiply (3) and divide (4)
console.log(cb(10, 10, mul));
console.log(cb(100, 10, function(n1, n2) {
    return n1/n2;
}));
console.log(cb(100, 10, (a, b) => a/b));
