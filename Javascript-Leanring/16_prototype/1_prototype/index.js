// Define a constructor function for creating objects
function Person(name, city) {
    console.log(this)
    this.name = name;
    this.city = city;
}

// Add the getDetails method to the prototype of the constructor function
Person.prototype.getDetails = function() {
    console.log(this)
    console.log(`${this.name} is from ${this.city}`);
};

// Create instances of Person
let obj = new Person("Kapil", "Panipat");
let obj2 = new Person("Aditya", "Hyderabad");

// Call the method on the instances
obj.getDetails(); // Kapil is from Panipat
obj2.getDetails(); // Aditya is from undefined (city is not provided)

