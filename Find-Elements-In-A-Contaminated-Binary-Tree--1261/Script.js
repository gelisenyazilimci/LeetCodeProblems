

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 */

function FindElements(root) {
    if (!root) return;
    this.values = new Set();
    this.values.add(0);
    root.val = 0;
    // TreeNode[]
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.left) {
            node.left.val = Math.imul(node.val,  2) + 1;
            this.values.add(node.left.val);
            queue.push(node.left);
        }
        if (node.right) {
            node.right.val = Math.imul(node.val,  2) + 2;
            this.values.add(node.right.val);
            queue.push(node.right);
        }
    }
    /**
     * @param {number} target
     * @return {boolean}
     */
    this.find = (target) => this.values.has(target)
}
