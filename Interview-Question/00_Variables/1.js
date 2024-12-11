// How do you redeclare variables in a switch block without an error

var a = 20;

switch(x) {
    case 0: {
        let name = "firstname";
        break;
    }
    case 1: {
        let name = "lastname";
        break;
    }
}

// var a = 20;

// switch (a) {
//   case 0: {
//     let name = "Kapil";
//     console.log("Case 0: Name is", name);
//     break;
//   }

//   case 1: {
//     let name = "Dahiya";
//     console.log("Case 1: Name is", name);
//     break;
//   }

//   default:
//     console.log("Default case: No matching case for", a);
//     break;
// }



