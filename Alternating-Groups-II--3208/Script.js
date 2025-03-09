// Time complexity: O(n)
// Space complexity: O(n)


/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
function numberOfAlternatingGroups(colors, k) {
    let counter = 0;
    for (let r = 1, l = 0; r < colors.length + k - 1; r++){
        if (colors[r % colors.length] === colors[(r - 1) % colors.length]) l = r;
        if (r - l + 1 > k) l++;
        if (r - l + 1 === k) counter++;
    }
    return counter;
}

console.log(numberOfAlternatingGroups([0,1,0,1,0], 3))
// Time Limit Exceeded
// Okay! Okay!
/*
function numberOfAlternatingGroups(colors, k) {
    let counter = 0;
    for (let i = 0; i < colors.length; i++) {
        let arr = [], isAlternating = true;

        let prevDiff = arr[1] - arr[0];
        if (prevDiff === 0) isAlternating = false;
         else
            for (let l = 2; l < k; l++) {
                let curDiff = arr[l] - arr[l - 1];
                if (curDiff === 0 || prevDiff * curDiff >= 0) { isAlternating = false; break; }
                prevDiff = curDiff;
            }
        if (isAlternating) counter++;
    }
    return counter;
}
*/