/*
    Is it possible to skip or omit parts of the for-loop settings?

    Yes, it is possible to omit parts or all the for-loop settings. If you remove all the parts, it results in an endless loop. Please note that the two semicolons (;) must be present, and otherwise, there would be a syntax error.

*/

let i = 0; // intilization and declearion has been done already

for (; i < 5; i++) {
  console.log(i);
}
