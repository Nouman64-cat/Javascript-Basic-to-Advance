function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element
    const pivot = arr[Math.floor(arr.length / 2)];

    // Partition the array into three parts
    let left = [];
    let right = [];
    let equal = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    // Recursively sort the left and right parts, and concatenate them with the equal part
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); // Output: [1, 1, 2, 3, 6, 8, 10]


//worst case time complexity of quick sort is : O(n^2)