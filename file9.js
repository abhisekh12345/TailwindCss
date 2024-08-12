//lexical scope
//golbal scope


// const myValue = "value1"
// function myApp(){
   
//     function myFunc(){

//        function myFunc2(){
//          console.log(myValue)
//        }

//        myFunc2()

//     }
//     console.log(myValue)
//     myFunc()
// }


// myApp()



//block scope vs function scope
//let and const are block scopw
//var is function scope



// if(true){
//     var firstName = "Harshit"
//     console.log(firstName)
// }
// console.log(firstName)

//default Parameters
// function addTwo(a,b=0){
//     return a+b
// }

// const ans = addTwo(4,6)
// console.log(ans)

//rest Parameters

// function myfunc(a,b,...c){
//     console.log(`a value is ${a}`)
//     console.log(`b value is ${b}`)
//     console.log(c)
// }

// myfunc(1,5,6,7,8,9,10)

// function addAll(...numbers){
//     let total = 0;
//     for(number of numbers){
//         total = total + number
//     }
//     return total
// }


// console.log(addAll(1,2,3,4,5))

//params destructing
//object
//react 

// const person = {
//     firstName : "Harshit",
//     gender : "male",
//     age : 24
// }


// function printDetails({firstName,gender,age}){
//     console.log(firstName)
//     console.log(gender)
//     console.log(age)
// }

// printDetails(person)


//callback function - any variable take input function

// function myfun2(name){ // name = harshit
//     console.log("inside my func")
//     console.log(name)
// }

// function myfunc(callback){  // callback = myfun2()
//    console.log("Hello here I from myfunc")
//    callback("Mohit")
// }

// myfunc(myfun2)











