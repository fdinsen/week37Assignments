//Initialise both arrays
let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

//Use concat to merge arrays. This doesn't affect each array, it just returns a new array
let all = boys.concat(girls);

//foreach runs through array, takes a function with 1 parameter which is the content of the array
all.forEach(function(boysandgirls) {
    console.log(boysandgirls);
});


//Join reduces an array to a string with the elements, separated by the parameter included
let joinComma = all.join(", ");
console.log("Array separated by comma: " + joinComma);

let joinHyphen = all.join("-");
console.log("Array separated by hyphen: " +joinHyphen);

//Unshift adds the parameters to the beginning of the array
all.unshift("Hans", "Kurt");
console.log("Array with names added to the front (unshift) ");
console.log(all);

//Push adds the parameters to the end of the array
all.push("Lone", "Gitte");
console.log("Array with names added to the back (push) ");
console.log(all);

//All the above can be done using the spread operator:
let spread = ["Hans", "Kurt", ...all, "Lone", "Gitte"];
console.log("Spread array: " + spread);

//Remove elements from the start of the array with shift
//returns the removed element
let shift = all.shift();

//Remove elements from the end of the array with pop
//returns the removed element
let pop = all.pop();

console.log("Removed " + shift + " and " + pop + " from " + all);

//Splice will remove elements starting from the first parameter index and removing elements equal to the second parameter
// so the here we remove 2 elements starting from and including index 3
all.splice(3, 2);
console.log("Removed 2 elements: " + all);

//reverse reverses the array
all.reverse();
console.log("Reversed array: " + all);

//sort can sort the array
all.sort();
console.log("Sorted array: " + all);

//TODO The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.

//Map walks through the array, and executes the callback method given as parameter on each element, then returns it as a new array
let upperAll = all.map(function(element) {
    return element.toUpperCase();
});

console.log("All Upper Case " + upperAll);

let filtered = all.filter(element => element.startsWith("L") || element.startsWith("l"));
console.log("Filtered: " + filtered);