"use strict";

// Time Complexity: O(N)
// Space Complexity: O(N)
function maxVowels(s: string, k: number): number {
    let sLength: number = s.length;
    let sArray: number[] = [];
    let windowSum: number = 0;
    let vowelArray: number[] = [];

    if (k > sLength) return 0;

    for (let i: number = 0; i < sLength; i++) sArray.push(s.charCodeAt(i));
    for (let i: number = 0; i < sLength; i++) vowelArray[i] = isVowel(sArray[i]) ? 1 : 0;
    for (let i: number = 0; i < k; i++) windowSum += vowelArray[i];

    let maxCount: number = windowSum;
    for (let i: number = k; i < sLength; i++) {
        windowSum += vowelArray[i] - vowelArray[i - k];
        if (windowSum > maxCount)  maxCount = windowSum;
    }

    return maxCount;
}

function isVowel(charCode: number): boolean {
    return (
        charCode === 97  || charCode === 101 ||
        charCode === 105 || charCode === 111 || charCode === 117 ||
        charCode === 65  || charCode === 69  ||
        charCode === 73  || charCode === 79  || charCode === 85
    );
}

console.log(maxVowels("abciiidef", 3))