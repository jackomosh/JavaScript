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
    }

    let result = "";

    for (let i = words.length - 1; i >= 0; i--) {
      let innerArray = words[i];

      for (let j = innerArray.length - 1; j >= 0; j--) {
        if (result !== "") {
          result += " ";
        }
        result += innerArray[j]
      }
    }
    return result
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