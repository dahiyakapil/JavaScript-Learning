//How do you redeclare variables in a switch block without an error 

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