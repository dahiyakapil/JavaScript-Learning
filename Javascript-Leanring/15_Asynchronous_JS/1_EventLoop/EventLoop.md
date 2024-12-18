
# Event Loop

## Working of Event Loop

## Code Flow
1. As in the code, the first statement is synchronous statement,
so for this JS program, a Gloabl Execution Context is created in the call stack. 
So, the console.log("start") will be printed into the console.

2. When we go to line number 3, there is setTimeout function, which is asynchornous in nature. So it will go in web api and the timer function start the time for about 5 seconds. And it will wait for the compleletion of the time.
The xyz() function will go into WEB API. When the time will finish it will go inside the call back queue.
There is event loop whose work is to check if the GEC is there inside in the call stack or not.
If the call stack is empty then the event loop, check the asynchornous function inside the call back queue. If the call stack is empty then the event loop, push the xyz() function from the call back queue to the call stack and immediately invoke the function and print the statement in the console.


3. Then when the js compiler goes to the line number 7, there is a fetch function. Fetch function helps in connnecting with the network calls.
   There is .then which is responsibel for resolve the task. Fetch function gives promise in response. This is also a asynchrnous call so the function cbf() goes 
   to the WEB API and when the api fetch the data and when all the work completed of the fetch API. cbf() function goes into MICRO TASK Queue.

   NOTE: Promises and Mutation observers all go to Micro Task Queue.

   Micro task has higer priority then the call back queue. 
   So the function inside the micro task queue executes first and event loop push the micro task queue function first in the call stack. And when the micro task 
   queue function has been executes then call stack would be empty.

   Then the event loop, check the call back, if there is any function needed to be executed then the event loop push that function inside the call back queue.


4. The synchronous code exexcutes first without waiting for other asynchornous code. So the End statement exexcutes after Start.

## Output Console.log
Start  <br />
End  <br />
Api Calling <br />
Set Timeout function <br />


