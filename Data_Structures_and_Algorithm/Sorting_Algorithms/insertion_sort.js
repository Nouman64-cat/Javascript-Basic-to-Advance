function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            array[j+1] = array[j];
            j = j - 1;
        }
        array[j+1] = key;
    }
    return array;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", insertionSort(array));


//time complexity : O(n^2)