//Write a function that accepts a character array, a zero-based start position and a length. It should return a character array containing lengthcharacters starting with the startcharacter of the input array. The function should do error checking on the start position and the length and return null if the either value is not legal.


function arrCheck(arr, start, len){

    if (start < 0 || start >= arr.length || len < 0 || start + len > arr.length) {
        return null;
    }

     
     const result = [];
     for (let i = start; i < start + len; i++) {
         result.push(arr[i]);
     }
     
     return result; 
    

}


//Test case sample

console.log(arrCheck(['a', 'b', 'c', 'd', 'e'], 1, 3)); 