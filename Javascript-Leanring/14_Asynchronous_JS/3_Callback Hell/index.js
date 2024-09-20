/*
    What is call back hell ?
    
    Ans: Call back hell is happend when a function call other function. And this callback happend in nested function call backs.

*/


// Example of callback hell
const res = firstFunction(function(err, data) {
    if (err) {
        console.error(err);
    } else {
        secondFunction(data, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                thirdFunction(data, function(err, data) {
                    if (err) {
                        console.error(err);
                    } else {
                        // Continue nesting more callbacks...
                    }
                });
            }
        });
    }
});

console.log(res);