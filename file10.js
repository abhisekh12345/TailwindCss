//function return function

// function myfunc(){
//     return {firstName : "Harshit", age : 23}
// }

// const ans = myfunc()
// console.log(ans)


//important array method
//forEach
//map
//filter
//reduce


//forEach
// const numbers = [4,2,5,8]

// function multiBy2(number,index){
//     console.log("index is ", index)
//     console.log(`${number} * 2 = ${number * 2}`)
// }

// multiBy2(4,0)
// multiBy2(2,1)
// multiBy2(5,2)

// for(let i=0; i< numbers.length; i++){
//     multiBy2(numbers[i],i)
// }

// numbers.forEach(multiBy2)



// const numbers = [4,2,5,8]

// numbers.forEach(function (number,index){
//     console.log(`index is ${index}  and number is ${number}`)
// })


// numbers.forEach((number,index) => {
//     console.log(`index is ${index}  and number is ${number}`)
// })


// for(let number of numbers){
//     console.log(number *3)
// }


// const users = [
//     {firstName : "Harshit" , age : 23},
//     {firstName : "Mohit" , age : 20},
//     {firstName : "Nitesh" , age : 21},
//     {firstName : "Garima" , age : 24},
// ]

// users.forEach((user) => {
//    console.log(user.firstName)
//    console.log(user.age)
// })

// for(let user of users){
//     console.log(user.firstName)
// }


//map - it returns into array 

// const numbers = [3,4,6,1,8]

// const square = function (number){
//     return number * number
// }

// const squareNumber = number.map(square)


// const squareNumber =  numbers.map((number) =>{
//     return number
// })

// console.log(squareNumber)


// const users = [
//     {firstName : "Harshit" , age : 23},
//     {firstName : "Mohit" , age : 20},
//     {firstName : "Nitesh" , age : 21},
//     {firstName : "Garima" , age : 24},
// ]

// const userName = users.map((user) => {
//     return user.firstName
// })



// console.log(userName)

//filter Method - it always check or return in boolean

// const numbers = [1,2,5,6,8,9,3]

// const oddNummber = numbers.filter(isOdd)

// const isEven = function(number){
//    return number % 2 !== 0
// }



// const evenNumber = numbers.filter((number) => {
//     return number % 2 === 0
// })
// console.log(evenNumber)

//reduce 

