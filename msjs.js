// window.alert("Welcome to it");

// This is  a comment
/*
     This 
     is
     a
     multipline
     comment
*/
// -------------assignment of values--------------//
let firstname = "David";
let myAge = 21;
myAge += 2;
let student = false;
let intro = `hello ${firstname} You are ${myAge} years old`;
console.log("Enrolled:", student);


// /////-----Accepting user inputs---------------//

// let username = window.prompt("Enter your name: ")
// console.log(username)
// document.getElementById("user").innerHTML = username


document.getElementById("button").onclick = function() {
     username = document.getElementById("input").value
     console.log(username)
};

text = () => console.log(username);
document.getElementById("demo").innerHTML = intro;


// -----Data types------//
let age = prompt("Hey, what's your name: ")
console.log(typeof age);
console.log(typeof Number(age));
console.log(typeof Number("socmbb"))
console.log(Boolean(""))

let a = Number(prompt("Enter a number,a : "));
let b = Number(prompt("Enter a number,a : "));

function submit(){
     let a = document.getElementById("at").value;
     let b = document.getElementById("bt").value;
     console.log("side a:", a);
     console.log("side b:", b);
     let c = Math.sqrt((a**2) + (b**2));
     document.getElementById("c").innerHTML = ("Side C: "+ c)
}



///-----Conuter program------///-

function increase(){
     
     let increase = document.getElementById("countlabel").innerHTML;
     increase = Number(increase)
     increase += 1;
     document.getElementById("countlabel").innerHTML = increase;
}
function decrease(){
     
     let decrease = document.getElementById("countlabel").innerHTML;
     decrease -= 1;
     document.getElementById("countlabel").innerHTML = decrease;
}
function reset(){
     document.getElementById("countlabel").innerHTML = 0;
}

//Generating Random Numbers
function randomnumber(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
   }

// Datatypes
function dataTypes(){
     let username = "Daves Jakes";
     console.log(username.charAt(2));
}   


function ifStatement(){
     let age=1;
     if(age >= 18){
          console.log("you are legal");
     }
     else{
          console.log("You ain't legal");
     }
}


// --------------using if statemant in check and radio buttons--------
document.getElementById("checkbutton").onclick = function(){
     let checkbox = document.getElementById("checkbox");
     let visaBtn = document.getElementById("visaBtn");
     let paypalBtn = document.getElementById("paypalBtn");
     let masterCardBtn = document.getElementById("masterCardBtn");
     // ----checkbox----
     if(checkbox.checked){
          console.log("Checked");
     }
     else{
          console.log("unchecked");
     }
     // radio buttons
     if(visaBtn.checked){
          console.log("You are Paying with Visa");
     }

     else if(paypalBtn.checked){
          console.log("You are Paying with Paypal");
     }

     else if(masterCardBtn.checked){
          console.log("You are Paying with Master Card");
     }
     else{
          console.log("You have to select a payment scheme");
     }
}
//------Using switch methods----
grade = "A"
function grade(grade){
     switch(grade.toUpperCase()){
          case "A":
               console.log("You did great");
               break;
          case "B":
               console.log("You did good");
               break;
          case "C":
               console.log("Its okay");
               break;
          case "D":
               console.log("Nearly dropped");
               break;
          case "E":
               console.log("Very bad");
               break;
          case "F":
               console.log("Fail");
               break;
          default:
               console.log(grade, "is not a letter grade!");
     }
} 

// // --------Logical Operators(NOT)---------
let z = 6;
if(!(z == 7)){
     console.log("a is  not equal to", z);
}
else{
     console.log("a is  equal to", z);
}

//----- Do while loop and For loop-----
doWhileLoop = () => {
     do{
          yourname = prompt("Enter: ")
     }while(yourname == "")
     console.log("Hello", yourname)
}


//for loop
forLoop = (i) =>{
     for(i;i<=10; i++){
          console.log(i)
     }
}

//Breaks & Continue
function breakContinue(){
     for(let i = 1; 1 <= 20; i++){
          if(i > 13){
               continue;
          }
          console.log(i)
     }
}

// nested For Loop
function nestedForLoop(){
     let symbol = prompt("Enter symbol") 
     let rows = prompt("Enter rows: ");
     let columns = prompt("Enter columns: ");

     for(let i = 1; i<=rows; i++){
          for(let j = 1 ;j <= columns; j++){
          document.getElementById("myColumn").innerHTML += symbol;
          }
          document.getElementById("myColumn").innerHTML += "<br/>";
     }
}
// toLocaleString
let myNum = 123.345
// myNum = myNum.toLocaleString("en-Us", {style: "currency", currency: "USD"});
// console.log(myNum);
myNum = myNum.toLocaleString(undefined, {style: "percent"});
console.log(myNum);



 // ------------Guessing Game ---------------//
function guessingGame(){  
     let answer = Math.floor(Math.random() * 10 + 1);
     let guess = document.getElementById("inputGuess").value;   
     let i = 1;
     console.log(answer)
     if(guess == answer){
          document.getElementById("display").innerHTML = `Congratulations ${answer} is the correct answer`
     }
     else if(guess == ""){
          document.getElementById("display").innerHTML = `<b>Clue:</b> You haven't guessed yet`

     }
     else if(guess > answer){
          document.getElementById("display").innerHTML = `<b>Clue:</b> ${guess} is greater than the answer`
     }
     else if(guess < answer){
          document.getElementById("display").innerHTML = `<b>Clue:</b> ${guess} is less than the answer`
     } 
     else{
          document.getElementById("display").innerHTML = `<b>Clue:</b> <i>"${guess}"</i> must be a positive number from 1 to 10`

     }
}

function tempConverter(){
     let value = document.getElementById("tempValue").value
     if(document.getElementById("celsius").checked){
          value = (value - 32) * (5/9);
          document.getElementById("tempAns").innerHTML = value
     }
     else if(document.getElementById("fahrenheit").checked){
          value = value * 9 / 5 + 32; 
          document.getElementById("tempAns").innerHTML = value

     }

else{
     document.getElementById("tempAns").innerHTML = "Select a unit"

}
}


// -----------working with arrays-------//
function arrayList(){
     let fruits = ["Mango", "orange", "apple"]
     let vegetables = ["tomato", "pepper", "carrot"]
     let meats = ["fish", "egg", "cow"]
     let groceryList = [fruits, vegetables, meats]
     for (list of groceryList){
          console.log(list)
          for (items of list){
               console.log(items)
          }
     }
}
function firstName(name, cb){
     console.log(name)
     cb("Arhin")
}

function lastName(lastname){
     console.log(lastname)
}
firstName("Dave", lastName)




// -------------typing Animation--------------

const text = "I am Arhin David";
const typingSpeed = 100; // Adjust this value to control typing speed
const caretBlinkSpeed = 500; // Adjust this value to control caret blink speed

const typingContainer = document.getElementById("typing-text");
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingContainer.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingContainer.innerHTML = text.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    setTimeout(typeText, 500);
  }
}

typeText();
setInterval(() => {
  const caret = document.getElementById("caret");
  caret.style.display = (caret.style.display === "none") ? "inline" : "none";
}, caretBlinkSpeed);

async function f() {
 let result = 'new!';
 let promise = new Promise((resolve, reject) => {
 setTimeout(() => resolve('done!'), 1000);
 });
result = await promise;
console.log(result);
}

f();


var p = new Promise((resolve, reject) => {
reject(Error('Promise Fails!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))



const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
 myPromise().then(res => console.log(res));
 console.log('second');
}

async function secondFunction() {
 console.log(await myPromise());
 console.log('second');
}

firstFunction();
secondFunction();



const firstPromise = new Promise((res, rej) => {
 setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
 setTimeout(res, 100, 'two');
});
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));



// ------------------form validation----------------------

function validateForm() {
     var validate = document.forms["myForm"]["firstname"].value;
     if (validate == "") {
          console.log("Please fill in your name");
     } else {
          console.log("You are done with the forms");
     }
}