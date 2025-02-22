function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * @param {string} traversal
 * @return {TreeNode}
 */

let recoverFromPreorder = function(traversal) {
    const tokens = [], regex = /(-*)(\d+)/g;
    let match;
    while ((match = regex.exec(traversal)) !== null) {
        const depth = match[1].length, val = parseInt(match[2], 10);
        tokens.push({ depth, val });
    }
    /*
    while ((match = regex.exec(traversal)) !== null) tokens.push(match[1].length, parseInt(match[2], 10));
     */

    if (tokens.length === 0) return null;

    const root = new TreeNode(tokens[0].val), stack = [root];

    for (let i = 1; i < tokens.length; i++) {
        while (stack.length > tokens[i].length) stack.pop();
        const node = new TreeNode(tokens[i].val);
        if (!stack[stack.length - 1].left) stack[stack.length - 1].left = node; else stack[stack.length - 1].right = node;
        stack.push(node);
    }

    return root;
}


 console.log(recoverFromPreorder("1-2--3--4-5--6--7"));