function nestedArrayReverser(words) {

    if (!words || words.length === 0) {
        return "";
    }

    return words.flat().reverse().join(" ");
};

// lets also try using a for loop


// Test Case 1
console.log(
  nestedArrayReverser([
    ["hello", "world"],
    ["this", "is"],
    ["a", "test"],
  ])
);

// Test Case 2
console.log(nestedArrayReverser([]));