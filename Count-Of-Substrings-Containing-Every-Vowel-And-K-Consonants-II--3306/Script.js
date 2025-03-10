/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
let countOfSubstrings = function(word, k) {
    let result = 0, count = 0, con = 0, i = 0, j = 0, v = 0;
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    const arr = new Array(26).fill(0);
    const vowels = new Array(word.length + 1).fill(0);
    for (let l = word.length - 1; l >= 0; l--) if (vowelsSet.has(word[l])) {count++; vowels[l] = count;} else count = 0;
    while (i < word.length) {
        if (vowelsSet.has(word[i]))
            if (arr[word[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) arr[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            else { v++; arr[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++; }
        else con++; i++;
        while (v >= 5 && con >= k && j < i) {
            if (v === 5 && con === k) result += 1 + vowels[i];
            if (vowelsSet.has(word[j])) {
                arr[word[j].charCodeAt(0) - 'a'.charCodeAt(0)]--;
                arr[word[j].charCodeAt(0) - 'a'.charCodeAt(0)] === 0 ? v -- : "";
            } else con--; j++;
        }
    }
    return result;
}

