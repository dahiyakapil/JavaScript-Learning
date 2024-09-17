

/*

    A block scope is helpful there where we have to run multiple statements 


 */

    if (true) console.log("This is single line")

// but when we want to write multiple line in condition or in for loop then we use block scope

{
    var a = 10;       // gloabl scope
    let b = 20;      // another scope
    const c = 30;    // another scope

    console.log(a);
    console.log(b);
    console.log(c);
}
