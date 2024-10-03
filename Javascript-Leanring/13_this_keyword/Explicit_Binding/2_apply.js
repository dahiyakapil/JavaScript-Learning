const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

const person1 = {
    firstName: "Kapil",
    lastName: "Dahiya"
} 

const result =  person.fullName.apply(person1);
console.log(result);


// function Borrowing
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is ON`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is off`
    }
}

const server = {
    name: `Dell PowerEdge T30`,
    isOn: false
};

let res = computer.turnOn.apply(server);
console.log(res);

// Using the apply() method to append an array to another

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);
console.log(arr);