//1
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this 1
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this 2

//explain 1
//this in methods refer to the owner object, and since it's an annonymous method, there is no owner
//Had we not used this, we would get the name no problem.

//explain 2
//Since we don't invoke Person as a constructor for an object which can own name, name is owned by the global context.

//2
var p = new Person("Kurt Wonnegut");
//console.log("I'm global: "+ name); will not work now, we need to specify the object
console.log("I'm global: " + p.name);
delete p;

//3
function Person(name){
  this.name = name;
  var self = this;  
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name); 
  },2000);
}

console.log("I'm global: " + name);
delete name;

function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+ this.name); 
  }.bind(this),2000);
}

//4
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);

//bind binds an object to a function, meaning that from then on inside the function this refers to that object.
//What is happening above is that greeter attempts to print the variable message from this.
// however there is no message on this, until we bind an object containing a message to the function.
// this is done on 54 + 55, with two different objects containing two different messages.



