// Time Complexity: O(N)
// Space Complexity: O(N)


/**
 * @param {number[][]} graph
 * @param {number} node
 * @param {number} parent
 * @param {number} depth
 * @param {Map<number, number>} bobPath
 * @return {boolean}
 */
function findBobPath(graph, node, parent, depth, bobPath) {
    bobPath.set(node, depth);
    if (node === 0) return true;
    for (const neighbor of graph[node])
        if (neighbor !== parent && findBobPath(graph, neighbor, node, depth + 1, bobPath)) return true;
    bobPath.delete(node);
    return false;
}

/**
 * @param {number} node
 * @param {number} parent
 * @param {number} currTime
 * @param {number} income
 * @param {number[]} amount
 * @param {number[][]} graph
 * @param {number[]} bobTime
 * @param {Object} result
 */
function dfsAlice(node, parent, currTime, income, amount, graph, bobTime, result) {
    if (currTime < bobTime[node]) income += amount[node];
    else if (currTime === bobTime[node]) income += amount[node] / 2;
    let isLeaf = true;
    for (const neighbor of graph[node])
        if (neighbor !== parent) {
            isLeaf = false;
            dfsAlice(neighbor, node, currTime + 1, income, amount, graph, bobTime, result);
        }
    if (isLeaf) result.maxIncome = Math.max(result.maxIncome, income);
}

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
let mostProfitablePath = function(edges, bob, amount) {
    const n = amount.length, graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) { graph[u].push(v); graph[v].push(u); }
    const bobPath = new Map(), bobTime = Array(n).fill(Infinity);;
    findBobPath(graph, bob, -1, 0, bobPath);
    for (const [node, t] of bobPath.entries()) bobTime[node] = t;
    let result = { maxIncome: -Infinity };
    dfsAlice(0, -1, 0, 0, amount, graph, bobTime, result);
    return result.maxIncome;
}