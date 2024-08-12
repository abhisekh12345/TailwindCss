//Object keys -- it returns into array 

// const person = {
//     name : "harshit",
//     age : 24,
//     hobbies : [" listen music", " playing football"]
// }

// console.log(Object.keys(person))
// const val = Array.isArray(Object.keys(person))
// console.log(val)


// for(let key in person){
//     console.log(key, ' : ',person[key])
// }


//computed properties
// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// // const obj = {
// //     objkey1 : "myvalue1",
// //     objkey2 : "myvalue2"
// // }

// // const obj = {
// //     [key1] : value1,
// //     [key2] : value2
// // }

// const obj = {}

// obj[key1] = value1
// obj[key2] = value2

// console.log(obj)

//spread operator
// const array1 = [1,4,5,7]
// const array2 = [12,45,67,89]

// const newArray = [...array1,...array2, 89 , 23 , 55]
// console.log(newArray)

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = {
//     key1 : "Unique Value",
//     key3 : "value3",
//     key4 : "value4"
// }


// const newObj = {...obj2,...obj1, key59 : "value59"}
// console.log(newObj)






//object destructing
// const obj = {
//     brandName : "Led Zepplin",
//     famouSong : "Stairway to heaven",
//     publish : 1998,
//     anotherFamousSong : "Good ways"
// }

// const brandName = obj.brandName
// const famouSong = obj.famouSong
// const {brandName ,famouSong,  ...newObj} = obj
// console.log(brandName)
// console.log(famouSong)
// console.log(newObj)


//object inside array
//very useful in real world application

// const users = [
//     {userId : 1, firstName : "harshit", gender : "male"},
//     {userId : 2, firstName : "Mohit", gender : "male"},
//     {userId : 3, firstName : "Nitish", gender : "male"}
// ]




// for(let user of users){
//      console.log(user)
// }




//nested destructing
const users = [
    {userId : 1, firstName : "harshit", gender : "male"},
    {userId : 2, firstName : "Mohit", gender : "male"},
    {userId : 3, firstName : "Nitish", gender : "female"}
]

const [{firstName},{userId} ,{gender }] = users
console.log(firstName)
console.log(userId)
console.log(gender)






























































