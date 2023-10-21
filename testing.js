
// Rolling a Dice

let x = Math.floor(Math.random() * 6) + 1; 
let y = Math.floor(Math.random() * 6) + 1; 
  
// console.log(x, y);
//string manipulation

let myName = "  Davida   ";
// console.log(myName.length);
// console.log(myName.charAt(0));
// console.log(myName.indexOf("a"));
// console.log(myName.lastIndexOf("a"));



// slice() method


let fullName = "Dave Jakes";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName)



// method chaining

