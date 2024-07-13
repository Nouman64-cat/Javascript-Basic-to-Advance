function linearSearch(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            console.log(`element found at ${i} index`)
            return true;
        }
    }
    return false;
}




const arr = [3, 6, 1, 8, 4, 2];
const target = 3;
const result = linearSearch(arr, target);
