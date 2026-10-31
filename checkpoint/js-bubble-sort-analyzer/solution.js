// a function bubblesort that takes two arguments


function bubbleSortAnalyzer(arr, comparator) { // arr, the array we want to sort and a comparator function that tells us how to sort
    let sortedArray = [...arr];
    let iterations = 0;
    let swaps = 0;

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            iterations++

            if (comparator(sortedArray[j], sortedArray[j+1]) > 0) {
                [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]]

                swaps++
            }
        }
    }
    return {
        sortedArray,
        iterations,
        swaps
    };
};

// Example usage
const comparator = (a, b) => a - b;

const result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);

console.log(result);
