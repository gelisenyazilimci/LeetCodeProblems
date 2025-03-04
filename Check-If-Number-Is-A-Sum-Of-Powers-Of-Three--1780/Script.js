//Time Complexity: O(log n) ( O(log3n) = O(log n) )
//Space Complexity: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
let checkPowersOfThree = (n)  => { while (n > 0) if (n % 3 === 2) return false; else n = Math.round(n / 3); return true; }