//1

let obj = {
    name: "Peter",
    birthday: "21. August",
    hobby: "Dancing",
    email: "peter@peter.peter"
}

for(prop in obj) {
    console.log(prop, obj[prop]);
}
console.log("\n");

delete obj.birthday;
for(prop in obj) {
    console.log(prop, obj[prop]);
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.getDetails = function() {
        return firstName + " " + lastName + ", " + age + " years old";
    }
}

p = new Person("Peter", "Larsen", 21);
console.log(p.getDetails());