/**
 * @param {string} s
 * @return {string}
 */
let decodeString = function(s) {
    let ans = [], prev = 0, repetitions = 0, depth = 0;
    for (let i = 0; i < s.length; i++) {
        if (depth === 0 && 'a' <= s[i] && s[i] <= 'z') { ans.push(s[i]); prev = i + 1; }
        if (s[i] === '[') {
            depth++;
            if (depth === 1) { repetitions = parseInt(s.substring(prev, i)); prev = i + 1; }
        } else if (s[i] === ']') { depth--;
            if (depth === 0) {
                const decoded = decodeString(s.substring(prev, i));
                for (let j = 0; j < repetitions; j++) ans.push(decoded);
                prev = i + 1;
            }
        }
    }
    return ans.join("");
}