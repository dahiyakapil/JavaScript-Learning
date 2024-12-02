/*
    How do you compare two date objects

    You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

    d1.getTime() === d2.getTime():

    The getTime() method returns the number of milliseconds since January 1, 1970, for the Date object.
    Since d1 and d2 were created at the same moment (with d2 being a copy of d1), their timestamps are identical.
    Hence, the comparison evaluates to true.
    d1 === d2:

    This compares the object references, not their contents.
    d1 and d2 are two distinct Date objects created separately, even though they represent the same point in time.
    Object comparisons in JavaScript using === only return true if the two operands reference the same underlying object. Since d1 and d2 are different objects in memory, this evaluates to false.

    Comparing objects (===) checks reference equality, not content equality.
    Comparing primitive values like numbers, strings, or the result of getTime() checks value equality.

*/

const d1 = new Date();
const d2 = new Date(d1);

console.log(d1.getTime() === d2.getTime()); // true refrence is equal 
console.log(d1 === d2) // false refrence is not equal