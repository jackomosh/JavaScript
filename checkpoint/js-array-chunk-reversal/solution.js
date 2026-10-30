function reverseChunks(arr, chunkSize) {

    for (let i = 0; i < arr.length; i += chunkSize) {
        let left = i;
        let right = i + chunkSize - 1;

        if (right >= arr.length) {
            right = arr.length - 1
        }

        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++
            right--
        }
    }
    return arr
}

console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
console.log(reverseChunks([10, 20, 30, 40, 50], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));