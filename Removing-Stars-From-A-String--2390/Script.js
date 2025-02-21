/**
 * @param {string} s
 * @return {string}
 */
let removeStars = function(s) {
// const array = s.split('');
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === '*') {
//         let starCount = 1;
//         let j = i + 1;
//         while (j < array.length && array[j] === '*') { starCount++; j++; }
//         array.splice(i, starCount);
//         let start = i - starCount;
//         if (start < 0) start = 0;
//         array.splice(start, starCount);
//         i = start;
//         if (i < 0) i = 0;
//     }
// }
// return array.join('');
    const stack = [];
    for (let char of s) if (char === '*') stack.pop(); else stack.push(char);
    return stack.join('');
}



console.log(removeStars("abb*cdfg*****x*"))