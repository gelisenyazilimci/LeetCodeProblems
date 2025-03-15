/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
function maximumCandies(candies, k) {
    const total = candies.reduce((acc, val) => acc + val, 0);
    if (total < k) return 0;
    let left = 1, right = Math.floor(total / k), result = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let c of candies) { count += Math.floor(c / mid);  if (count >= k) break; }
        if (count >= k) { result = mid; left = mid + 1; } else { right = mid - 1; }
    }
    return result;
}



/*

// Time Limit Exceeded

function maximumCandies(candies, k) {
    if (('' + candies.reduce((firstNum, secNum) => firstNum + secNum, 0) / k )[0] === '0') return 0;
    let answer = 0;
    for (let x = 1; x <= Math.max(...candies); x++) {
        let count = 0;
        for (let c of candies) count += Math.floor(c / x);
        if (count >= k) answer = x; else break;
    }
    return answer;
}
*/