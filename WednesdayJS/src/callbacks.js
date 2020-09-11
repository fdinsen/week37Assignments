//Callbacks
let nameArray = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Ib"];
//1, Filter
let namesUnder3 = nameArray.filter(name => name.length <= 3);

console.log("\nOriginal Array:");
nameArray.forEach(name => console.log(name));
console.log("\nFiltered Array:");
namesUnder3.forEach(name => console.log(name));

//2, Map
let upperCase = nameArray.map(name => name.toUpperCase());
console.log("\nMapped Array:");
upperCase.forEach(name => console.log(name));

//3, Join
function arrayToHTML(array) {
    let returnString = "<ul><li>";
    returnString += array.join("</li><li>");
    returnString += "</li></ul>";
    return returnString;
}
console.log(arrayToHTML(nameArray));

//4, Filter
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var filteredCarsYear = cars.filter(function(car) {
    return car.year > 1999;
});
var filteredCarsMake = cars.filter(function(car) {
    return car.make == "Volvo";
});
var filteredCarsPrice = cars.filter(function(car) {
    return car.price <= 5000;
});

console.log("\nFiltered by year: ");
filteredCarsYear.forEach(car => console.log("id:" + car.id));
console.log("\nFiltered by make: " + filteredCarsMake);
filteredCarsMake.forEach(car => console.log("id:" + car.id));
console.log("\nFiltered by price: " + filteredCarsPrice);
filteredCarsPrice.forEach(car => console.log("id:" + car.id));

//4a SQL
function createSQLStatement(car) {
    let returnString = "INSERT INTO cars (id,year,make,model,price) VALUES (";
    returnString += car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price;
    returnString += ");";
    return returnString;
}

function convertToSQL(carArray) {
    return carArray.map(createSQLStatement).join("\n");
}

let SQLString = convertToSQL(cars);
console.log(SQLString);