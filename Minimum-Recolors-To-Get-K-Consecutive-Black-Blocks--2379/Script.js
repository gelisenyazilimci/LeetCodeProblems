// Time Complexity: O(N)
// Space Complexity: O(N)

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
const minimumRecolors = function (blocks, k) {
  let minOp = 0,
    count = 0;
  for (let i = 0; i < k; i++) blocks[i] === `W` ? count++ : "";
  minOp = count;
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === `W`) count--;
    if (blocks[i] === `W`) count++;
    minOp = Math.min(minOp, count);
    if (minOp === 0) return 0;
  }
  return minOp;
};
