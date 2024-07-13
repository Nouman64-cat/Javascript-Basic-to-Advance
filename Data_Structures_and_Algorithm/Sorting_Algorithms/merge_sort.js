function mergeSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort the two halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of the two halves and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both halves
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", mergeSort(array));
