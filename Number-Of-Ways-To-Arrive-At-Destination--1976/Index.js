/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
let countPaths = function(n, roads) {
    const mod = 1e9 + 7, adj = Array.from({length: n}, ()=> []);
    for (const[u,v,t] of roads) {adj[u].push([v,t]); adj[v].push([u, t]);}
    const shortTime = Array(n).fill(Infinity), c = Array(n).fill(0), minimumHeap = [[0, 0]];
    shortTime[0] = 0; c[0] = 1;
    while (minimumHeap.length) {
        minimumHeap.sort((a, b) => a[0] - b[0]);
        const [time, node] = minimumHeap.shift();
        if (time > shortTime[node]) continue;
        for (const [nb, rtime] of adj[node]) {
            if (time + rtime < shortTime[nb]) {
                shortTime[nb] = time + rtime; c[nb] = c[node];
                minimumHeap.push([shortTime[nb], nb]);
            } else if (time + rtime === shortTime[nb]) c[nb] = (c[nb] + c[node]) % mod;
        }
    }
    return c[n -1]
}