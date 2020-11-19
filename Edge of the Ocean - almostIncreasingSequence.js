function almostIncreasingSequence(sequence) {
    let length = sequence.length;
    if (isIncreasing(sequence)){
        return true;

    }
   for (let i = 0; i < length; i++){
       let tempSequence = [...sequence];
       tempSequence.splice(i,1);
       if(isIncreasing(tempSequence) ){
           return true;
       }
   }

   return false;

}

function isIncreasing(array) {
 for (let i = 0; i < array.length; i++) {
   if ( array[i] >= array[i + 1]) {
     return false;
   }
 }
 return true;
}