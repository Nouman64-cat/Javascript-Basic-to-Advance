function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Return -1 if the target element is not found
    }

    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
        return middle; // Return the index of the target element
    } else if (arr[middle] < target) {
        return binarySearchRecursive(arr, target, middle + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, middle - 1);
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearchRecursive(arr, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`); // Output: Element found at index: 6
} else {
    console.log('Element not found in the array');
}
