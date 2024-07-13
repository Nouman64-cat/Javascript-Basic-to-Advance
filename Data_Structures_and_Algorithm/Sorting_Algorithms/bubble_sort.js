function bubbleSort(array){
    let swapped = false;

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapped = true;
            }
            if(!swapped){
                break;
            }
        }
    }
    return array;
}


let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
//time complexity : O(n^2)