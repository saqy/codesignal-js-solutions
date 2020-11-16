function adjacentElementsProduct(inputArray) {
    let product = inputArray.map((el,index, arr)=>{
             if(index+1 <= arr.length){
             return el * arr[index+1];
             }
     }).sort( (a,b) =>{ return b - a})[0];
     console.log(product);
     return product;
}
