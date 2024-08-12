//use const in array
//refrence data types
// heap memory 0x11 ["apple" , "orange", "grapes", "banana"]

// const fruits = ["apple","orange","grapes"] //0x11
// fruits.push("banana")
// console.log(fruits)


//for of loop in array
// const fruits = ["apple","orange","grapes","mango"]
// const fruits2 = []

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase())
// }

// console.log(fruits2)


//for in loop array -- index number
// const fruits = ["apple","orange","grapes","mango"]
// const fruits2 = []

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase())
// }

// console.log(fruits2)

// for(let i= 0; i<fruits.length;i++){
//     console.log(fruits[i])
// }

//array destructuring
// const myArray = ["value1","value2","value3","value4","value5"]
// let myValue1 = myArray[0]
// let myValue2 = myArray[1]
// console.log("Value of myValue1 " ,myValue1)
// console.log("Value of myValue2 " ,myValue2)

// let [myValue1, myValue2, ...newArray ] = myArray

// console.log("Value of myValue1 " ,myValue1)
// console.log("Value of myValue2 " ,myValue2)
// console.log("newArray",newArray)





//object --- reference data types
//array are good but not sufficent for real world
//object --- key value pair
//object -- it doesnot have index

// const person = {name : "Harshit", age : 23}

// const person = {
//     name : "harshit",
//     age : 25,
//     hobbies : ["gutiar","sleeping", "listening music"]
// }


//how to acces object 

// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)


// console.log(person["name"])
// console.log(person["age"])
// console.log(person["hobbies"])


//how to add key value pair to object
// person.gender = "male"
// console.log(person)


//differnce in dot and bracket

// let key = "email"
// const person = {
//     name : "harshit",
//     age : 25,
//     personalHobbies : ["gutiar","sleeping", "listening music"]
// }

// person[key] = "harshit@gmail.com"

// console.log(person)



// //for in loop 
// const person = {
//     name : "harshit",
//     age : 23,
//     hobbies : ["gutiar","sleeping", "listening music"]
// }

// for(let key in person){
//     console.log(person[key]) 
//     console.log(`${key} : ${person[key]}`)
//     console.log(key, " ", person[key])
// }



































