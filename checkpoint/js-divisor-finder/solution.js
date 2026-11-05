function divisors(n) {
    let num = n;

    if (num < 0) {
        num = -num
    }

    const result = [];

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }
    return result
}

console.log(divisors(15));
console.log(divisors(28));
console.log(divisors(1));
console.log(divisors(-15));