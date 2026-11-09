// function nestedArrayReverser(words) {

//     if (!words || words.length === 0) {
//         return "";
//     }

//     return words.flat().reverse().join(" ");
// };

// lets also try using a for loop

function nestedArrayReverser(words) {

    if (!words || words.length === 0) {
      return "";
    };

    let flatwords = words.flat();
    let reversewords = [];

    for (let i = flatwords.length- 1; i >= 0; i--) {
      reversewords.push(flatwords[i])
    }
    return reversewords.join(" ");
};




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