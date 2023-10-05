/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

    //a
  for (let i = 0; i <= 20; i++){
    console.log(i)
  }
//b
  for (let i = 3; i <= 29; i++){
    if (i % 3 === 0){
      console.log(i)
    }
  }
//c
for (let i = 12; i >= -14; i--){
  if (i % 2 === 0){
    console.log(i)
  }
}
//d
for (let i = 50; i >= 20; i--){
  if (i % 3 === 0){
    console.log(i)
  }
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

//a
let LC = "LaunchCode";
let arrayLC = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arrayLC.length; i++){
  console.log(arrayLC[i])
}
//b
for (let i = 0; i < LC.length; i++){
  console.log(LC[(LC.length-1)-i])
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  //a
let numArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] 
let evenArr = []
  let oddArr = []
for (let i = 0; i < numArr.length; i++){
  
  if (numArr[i] % 2 === 0){
    evenArr.unshift(numArr[i])
   
  }
    if (numArr[i] % 2 !== 0) {
      oddArr.unshift(numArr[i])
  
    }

  }

  console.log(evenArr)
  console.log(oddArr)
