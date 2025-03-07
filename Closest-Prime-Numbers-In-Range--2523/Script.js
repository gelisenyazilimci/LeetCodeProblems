/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let closestPrimes = function(left, right) {
    if (left > right) return [-1, -1];
    let isPrime = new Array(right + 1).fill(true),
        primes = [], minDiff = Infinity, num1 = -1, num2 = -1; // minDiff not equals (left - right) formula!
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; Math.pow(i, 2) <= right; i++) if (isPrime[i])
        for (let j = Math.pow(i, 2); j <= right; j += i) isPrime[j] = false;
    for (let i = left; i <= right; i++) if (isPrime[i]) primes.push(i);
    if (primes.length < 2) return [-1, -1];
    for (let i = 1; i < primes.length; i++) {
        let diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            num1 = primes[i - 1];
            num2 = primes[i];
        }
    }
    return [num1, num2];
}