//---------------Gliobal Variable
// // -----Not a good practice------ while declaring global variable because it directly change the value of global variable.
// // It cause because we don’t follow this above RULE --
// // Avoid modifying global variables inside of functions. If you need to modify a global variable inside of a function, pass it to the function as a parameter.

// // This code declares a global variable called myGlobalVariable.
// myGlobalVariable = 0;

// function myFunction() {
// // This code modifies the global variable myGlobalVariable.
// myGlobalVariable++;
// }

// // This code calls the myFunction() function.
// myFunction();

// // This code prints the value of the global variable myGlobalVariable.
// console.log(myGlobalVariable); // Outputs 1




// //----Good practice----- while declaring global variable as we follow the RULE

// // This code declares a global variable called myGlobalVariable.
// myGlobalVariable = 0;

// function myFunction(myGlobalVariable) {
// // This code modifies the value of the parameter myGlobalVariable.
// myGlobalVariable++;
// }
// // This code calls the myFunction() function and passes the global variable myGlobalVariable as a parameter.
// myFunction(myGlobalVariable);

// // This code prints the value of the global variable myGlobalVariable.
// console.log(myGlobalVariable); // Outputs 0




// //---------It gives value 6 as between the 2 same function only the last one is executed

// myGlobalVariable = 5;
// function myyFunction() {
// myGlobalVariable--;
// }
// function myyFunction() {
// myGlobalVariable++;
// }
// myyFunction();
// console.log(myGlobalVariable); // Outputs 6

// // ----------• Write a function that takes a variable as an argument and returns its type.

// function typechecker(value){
// return typeof(value);
// }
// let type = typechecker(5);
// console.log(type);

// // --------• Write a function that takes two variables and swaps their values.

// function swapy(){
// var value3=value1;
// value1=value2;
// value2=value3;
// }
// var value1 =5;
// var value2=8;
// swapy();
// console.log(value1,value2); //This code change the value of variable in actual

// -------------------------------------
// function swapy(var1,var2){
// var value3=var1;
// var1=var2;
// var2=value3;
// return(var1+" "+var2)
// }
// var value1 =5;
// var value2=8;
// x=swapy(value1,value2);
// console.log(x);
// console.log(value1,value2); //This code not change the value of variable in actual,so the value of variable (value1,value2) is remains same
