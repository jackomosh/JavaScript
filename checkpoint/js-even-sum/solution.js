function evenSum(nums) {

    result = 0;

    for (let i = 0; i <= nums; i += 2) {
        result += i;
    }

    return result
};


console.log(evenSum(5))
console.log(evenSum(1))