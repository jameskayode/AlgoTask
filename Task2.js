//Write a function to reverse an integer using numeric operators and without using any arrays or other data structures.


function reverseInt(num){

    let reversedInt=0;


    const intToString=num.toString();

   // Loop through each character of the string from right to left
   for (let i = intToString.length - 1; i >= 0; i--) {
    const digit = parseInt(intToString[i]);
    reversedInt = (reversedInt * 10) + digit;
}

return reversedInt;
}


//Test case sample
console.log(reverseInt(123));