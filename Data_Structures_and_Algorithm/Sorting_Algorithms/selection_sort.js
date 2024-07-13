function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", selectionSort(array));

//time complexity : O(n^2)