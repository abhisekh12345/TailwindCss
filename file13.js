//new keyword
//1. empty object this {}
//2. return this
// function createUser(firstName,age){
    
//     this.firstName = firstName
//     this.age = age
   

// }

// const user1 = new createUser("Harshit",23)
// const user2 = new createUser("Nitesh",20)
// console.log(user2.firstName)


// function createUser(firstName,lastName,email,age,address){
//     const user = {}
//     user.firstName = firstName
//     user.lastName = lastName
//     user.email = email
//     user.age = age
//     user.address = address
//     user.about = function(){
//         return(`${this.firstName} ${this.lastName}  and ${this.email} ${this.address}`)
//     }
//     user.is18 = function(){
//         return this.age >=18
//     }
//     return user
// }


//class

// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this.age = age
//         this.address = address
//     }

//     about(){
//         return(`${this.firstName} ${this.lastName} and age is ${this.age}`)
//     }
//     is18(){
//         return this.age >= 18
//     }
//     sing(){
//         return ("la la la")
//     }
// }

// const user1 = new CreateUser("Harsit","Thapa","harshit@gmail.com",23,"Pokhara")
// const user2 = new CreateUser("Mohit","Thapa","Mohit@gmail.com",20,"Ktm")
// console.log(user2.sing())
