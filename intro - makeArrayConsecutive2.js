function makeArrayConsecutive2(statues) {
    const sorted = statues.sort((a,b) => a-b);
    const diff=0;
    for (let i=0; i<sorted.length; i++){
        if(i+1 < sorted.length){
         diff +=  (sorted[i+1] - sorted[i] - 1);
        } 
    }
    return diff;    
}
