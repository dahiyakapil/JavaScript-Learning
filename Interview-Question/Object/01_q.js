// What are the possible ways to create objects in JavaScript

// const obj = {
//     firstname: "Kapil",
//     lastname: "Dahiya"
// }

// console.log(obj.firstname);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    
    this.getDetails = function() {
      return `${this.make} ${this.model}, built in ${this.year}`;
    };
  }
  
  // Creating an object instance
  const myCar = new Car('Toyota', 'Corolla', 2020);
  console.log(myCar.getDetails()); 


  let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  
  var car = Object.create(vehicle, carProps);
  console.log(car.model);

  