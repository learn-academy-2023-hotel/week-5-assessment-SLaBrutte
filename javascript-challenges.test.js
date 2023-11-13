// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// Pseudo code: 
// Created a function that that takes in both a string and function using the describe method
// it, declares what the test should do
// expect, calls on our function to execute in which we expect our outcome to equal the expected outcome

describe('myDecoder', () => {
    it('takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
        expect(myDecoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(myDecoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(myDecoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Pseudo code: 
// Created a function that takes in a string
// Turned my string into an array and assigned the array to a new variable
// Created a variable that is an empty string to hold my changes
// Created a loop to itterate over the new array anf finds any instance of ("a", "e", "i" "o") both lowercase/capitalized and assign it a number
// If no instance is found at the other indexs. return the original value
// If an instance is found then append each result into the empty string

const myDecoder = (string) => {
    let newArray = string.split("")
    let myResult = ""

    for (let i = 0; i < newArray.length; i++){
        if(newArray[i] === "a" || newArray[i] === "A"){
            myResult += 4
        }else if(newArray[i] === "e" || newArray[i] === "E"){
            myResult += 3
        }else if(newArray[i] === "i" || newArray[i] === "I"){
            myResult += 1
        }else if(newArray[i] === "o" || newArray[i] === "O"){
            myResult += 0
        }else {
            myResult += newArray[i]
        }
    }
    return myResult
}
// console.log(myDecoder(secretCodeWord1))
// console.log(myDecoder(secretCodeWord2))
// console.log(myDecoder(secretCodeWord3))


// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// a) Create a test with expect statements using the variable provided.

// Pseudo code: 
// Created a function that that takes in both a string and function using the describe method
// it, declares what the test should do
// expect, calls on our function to execute in which we expect our outcome to equal the expected outcome

describe('fullHouse', () =>{
    it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', () => {
        expect(fullHouse(hand1)).toEqual("true")
        expect(fullHouse(hand2)).toEqual("false")
        expect(fullHouse(hand3)).toEqual("false")
        expect(fullHouse(hand4)).toEqual("true")
    })
})


// Pseudo code:
// Created a function that takes in an array
// Created 2 variables that contain an empty array
// Created a loop to itterate over the array
// Created a variable that holds value at the index
// Created a conditional which sorts the value at each index and sorts/sets similiar values into the 2 created arrays
// Created a conditional in which it confirms the lengths of both arrays = 5 in any form


const fullHouse = (array) => {
    let myCard1 = []
    let myCard2 = []

  for (let i = 0; i < array.length; i++){
    const firstCard = array[i]

    if (myCard1.length === 0) {
      myCard1.push(firstCard)
    } else if (myCard1[0] === firstCard) {
      myCard1.push(firstCard)
    } else if (myCard2.length === 0) {
      myCard2.push(firstCard)
    } else if (myCard2[0] === firstCard) {
      myCard2.push(firstCard)
    } else {
      return false
    }
  }
  // return myCard1
  // return myCard2

  if ((myCard1.length === 2 && myCard2.length === 3) || (myCard1.length === 3 && myCard2.length === 2)) {
      return true;
    } else {
      return false;
    }
}
// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
// console.log(fullHouse(hand4))

