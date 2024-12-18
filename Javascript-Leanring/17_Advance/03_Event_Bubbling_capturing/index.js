document.querySelector("#grandparent").addEventListener('click', ()=> {
    console.log("GrandParent Called!")
}, true) // Event Capturing mode is on


document.querySelector("#parent").addEventListener('click', (e)=> {
    console.log("Parent Called!")
    e.stopPropagation(); // will stop here
}, false) // Event Bubbling mode is on


document.querySelector("#child").addEventListener('click', ()=> {
    console.log("Child Called!")

}, true) // Event Capturing mode is on

/*
    When we are not passing e as argument in callback function
    OUTPUT: 
    GrandParent Called!
    Child Called!
    Parent Called!
*/

