//reduce 

// const numbers = [1,2,3,4,5]

// const ans = numbers.reduce((accumaltor,currentValue) => {
//     return accumaltor + currentValue
// },)

// console.log(ans)


//accmulator       currentValue     return
// 1                  2                 3
// 3                  3                 6
// 6                  4                 10
// 10                 5                 15


// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "Laptop", price : 22000},
//     {productId : 3, productName : "Tv", price : 15000}
// ]


// const totalPrice = userCart.reduce((totalPrice , currentProduct) => {
//      return  totalPrice + currentProduct.price
// },0)

// console.log(totalPrice)

//totalPrice      currentProduct      return
//  0                {}  12000       12000
// 12000                22000        34000
//34000                 15000        49000


//sort method
//ASCII-value

//[5,9,1200,400,3000]
//[5,9,400,1200,3000] excpected

// const numbers = [5,9,1200,400,3000]
//["5", "9","1200", "400", "3000"]
//[ 53,  57,  49   , 52 ,   51]

// 0	48	
// 1	49	
// 2	50	
// 3	51	
// 4	52	
// 5	53	
// 6	54	
// 7	55	
// 8	56	
// 9	57

// numbers.sort()
// console.log(numbers)

// const userNames = ['harshit','ajay', 'aab','mohit','nitesh','Arjun','Harshit']
// userNames.sort()
// console.log(userNames)

//Uppercase letter or character
// A- Z ---> 65- 90

//  
//  a	 97	  
//  b	 98	  
//  c	 99	
//  d	100	
//  e	101	
//  f	102	
//  g	103	
//  h	104	
//  i	105	
//  j	106	
//  k	107	
//  l	108	
//  m	109	
//  n	110	
//  o	111	
//  p	112	
//  q	113	
//  r	114	
//  s	115	
//  t	116	
//  u	117	
//  v	118	
//  w	119	
//  x	120	
//  y	121	
//  z	122	


// const numbers = [5,9,1200,400,3000]

// numbers.sort((a,b) => {
//     return a-b 
// })

// console.log(numbers)

//1200 400  
//1200 - 400 = 800
// a - b ---> postive (greater than 0 ) b,a  --> 400 , 1200

// 5 9
// 5 - 9 = -4
// a - b ---> negative ---> a,b --> 5,9


// const produts = [
//     {productId : 1, productName : "mobile", price : 200},
//     {productId : 2, productName : "Laptop", price : 1200},
//     {productId : 3, productName : "Tv", price : 300},
//     {productId : 4, productName : "Ipad", price : 3000},
//     {productId : 5, productName : "IPhone", price : 500}
// ]

//lowTohigh products
 
// const lowToHigh = produts.slice(0).sort((a,b) =>{
//     return a.price - b.price
// })

// const higToLow =  produts.slice(0).sort((a,b) => b.price - a.price)

// console.log(lowToHigh)
// console.log(higToLow)



//find method

// const myArray = ["Hello","catt","dogg","Lion"]


// const ans = myArray.find((string) => {
//      return string.length === 3
// })

// console.log(ans)


// const produts = [
//     {productId : 1, productName : "mobile", price : 200},
//     {productId : 2, productName : "Laptop", price : 1200},
//     {productId : 3, productName : "Tv", price : 300},
//     {productId : 4, productName : "Ipad", price : 3000},
//     {productId : 5, productName : "IPhone", price : 500}
// ]

// const productRoutePram = 5
// const productList = produts.find((product) => {
//       return product.productId === productRoutePram
// })

// console.log(productList)


//every method -- it returns boolean value true/false
// const myArray = [2,4,6,8,]

// function isEven(number){
//     return number % 2 === 0
// }

// const ans = myArray.every((number) => {
//     return number % 2 === 0
// })
// console.log(ans)


// const produts = [
//     {productId : 1, productName : "mobile", price : 200},
//     {productId : 2, productName : "Laptop", price : 1200},
//     {productId : 3, productName : "Tv", price : 300},
//     {productId : 4, productName : "Ipad", price : 6000},
//     {productId : 5, productName : "IPhone", price : 500}
// ]

// const ans = produts.every((product) => product.price < 5000)
// console.log(ans)





























