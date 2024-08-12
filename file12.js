//fill method
//value, start, end

// const myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.fill(0,2,5)
// console.log(myArray)

//splice method --- to delete item from array
//start,delete,insert

// const myArray = ["item1","item2","item3"]

//delete
//  myArray.splice(1,1)

//insert
// myArray.splice(1,0,"insert item1","insert item2")
// console.log(myArray)

//insert and delete at a time
// myArray.splice(1,2,'insert newItem')
// console.log(myArray)

//optional chaining

// const user = {
//     firstName : "harshit",
//     address : { houseNumber : '1234'}
// }

// console.log(user?.firstName)
// console.log(user?.address?.houseNumber)

//method
//function inside object
//this -->keyword

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`)

// }

// const person1 = {
//     firstName : "mhoit",
//     age : 18,
//     about : personInfo
// }

// const person2 = {
//     firstName : "Harshit",
//     age : 23,
//     about : personInfo
// }

// const person3 = {
//     firstName : "Nitesh",
//     age : 15,
//     about : personInfo
// }

// person1.about()
// person2.about()
// person3.about()

//call
//apply
//bind

// function about(hobbies,favouriteSong){
//     console.log(`person name is ${this.firstName} and age is ${this.age} and ${hobbies} ${favouriteSong}`)
// }

// const user1 =  {
//         firstName : "mhoit",
//         age : 18,
// }

// const user2 = {
//     firstName : "Harshit",
//     age : 24,
// }

// about.call(user2,"guitar","mozart")

// about.apply(user1,["piano","playing piano"])

// const newBindFunc = about.bind(user1,"Drumset","ACDC")
// newBindFunc()

// const user1 = {
//   firstName: "mhoit",
//   age: 18,
//   about: () => {
//     console.log(this)
//   },
// };

// user1.about()


// create functions to create multiple object
// const user1 = { 
//     firstName : "Harshit",
//     lastName : "thapa",
//     email: "harshitthapa@gmail.com",
//     age : 12,
//     address : "Ktm houseNo.2",
//     about : function (){
//         return(`${this.firstName} ${this.lastName}  and ${this.email} ${this.address}`)
//     },
//     is18 : function(){
//         return this.age >=18
//     }
    
// }


//function create multiple objects
//function return
function createUser(firstName,lastName,email,age,address){
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    user.about = function(){
        return(`${this.firstName} ${this.lastName}  and ${this.email} ${this.address}`)
    }
    user.is18 = function(){
        return this.age >=18
    }
    return user
}

const user1 = createUser("Mhoit","Sharma","mohit@gmail.com",34,"Pokhara")
const user2 = createUser("Harshit","Thapa","harshit@gmail.com",26,"Ktm")
const user3 = createUser("Harshit","Thapa","harshit@gmail.com",26,"Ktm")





