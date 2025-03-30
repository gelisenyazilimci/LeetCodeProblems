/**
 * @param {string} s
 * @return {number[]}
 */
let partitionLabels = function(s) {
    const last = new Map(), partitions = [];
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) last.set(s[i], i);
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last.get(s[i]));
        if (i === end) { partitions.push(end - start + 1); start = i + 1; }
    }
    return partitions;
}