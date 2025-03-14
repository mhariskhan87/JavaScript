//Exercise 1: Check if a Number is Positive, Negative, or Zero-------------
// let input = prompt("Check the number is Positive, Negative or Zero?");
// if (input > 0) {
//     console.log(`Number ${input} is positive.`);
// } else if (input < 0) {
//     console.log(`Number ${input} is negative.`);
// } else {
//     console.log(`Number ${input} is zero.`);
// }

//Exercise 2: Check Even or Odd--------------------------------

// let input = prompt("Check the number is Even or Odd?");
// if (input % 2 === 0) {
//     console.log(`Number ${input} is Even.`);
//  }
// else {
//     console.log(`Number ${input} is Odd.`);
// }

//Exercise 3: Check Voting Eligibility---------------------------------

// let input = prompt("Check the eligibility for voting");
// if (input>=18){
//     console.log("Eligible for voting")
// }
// else {
// console.log("Not eligible for voting");
// }

//Exercise 4: Find the Largest of Two Numbers---------------
// let input1=prompt("Write first number");
// let input2=prompt("Write second number");
// if (input1>input2){
//     console.log(`${input1} number is greater than ${input2}`)
// }
// else {
//     console.log(`${input2} number is greater than ${input1}`)
// }

//Check If a Person is Eligible for a Discount---------------
// let input1=prompt("What is your age?");
// let input2=prompt("Do you have a membership card? (yes or no)");
// if (input1>=60){
//     console.log("Person is eligible for Discount")
// }
// else if (input2==="yes"){
//     console.log("Person is eligible for Discount")
// }
// else {
//     console.log("Person is not eligible for Discount")
// }

//Login System with Username and Password-------
// let username=prompt("Username");
// let password=prompt("Password");
// if (username==="admin" && password==12345){
//     console.log("Login Successful")
// }
// else {
//     console.log("Invalid Credentials")
// }

//Grade System-------------------------
// let marks=prompt("Enter Your Marks")
// if (marks>=90 && marks<=100) {
//     console.log("A Grade")
// }
// else if (marks>=80 && marks<90){
//     console.log("B Grade")
// }
// else if (marks>=70 && marks<80){
//     console.log("C Grade")
// }
// else if (marks>=60 && marks<70){
//     console.log("D Grade")
// }
// else if (marks>=1 && marks<60){
//     console.log("F Grade")
// }
// else {
//     console.log("invalid Marks")
// }

// Traffic Light System-----------------
let input=prompt("Traffic Light Color")
if (input==="red"){
    console.log("Stop")
}
else if (input==="yellow"){
    console.log("Slow down")
}
else if (input==="green"){
    console.log("Go")
}
else {
    console.log("Invalid Color")
}