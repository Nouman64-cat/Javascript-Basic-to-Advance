function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Finding the block where the element is present
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1;
        }
    }

    // Doing a linear search for target in the block starting with prev
    while (arr[prev] < target) {
        prev++;
        // If we reach the next block or end of the array
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    // If element is found
    if (arr[prev] === target) {
        return prev;
    }

    return -1;
}

// Example usage
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = jumpSearch(arr, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`); // Output: Element found at index: 7
} else {
    console.log('Element not found in the array');
}
