/*
    Google v8 engine creates a golbal scope execution for every program 
    window is global object
    this is also gloabl object
    this === window true

 */

    var a = 10; // global scope

    function getValue() { // not in global scope
        var x = 20;
    }
    console.log(this === window)
    console.log(window.a); // gloabl object
    console.log(a);
    console.log(x); // x is not defined
