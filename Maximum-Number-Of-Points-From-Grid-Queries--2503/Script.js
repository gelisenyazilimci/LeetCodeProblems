/**
 *
 * @param grid
 * @param queries
 * @returns {any[]}
 */
function maxPoints (grid, queries) {
    const m = grid.length;
    const n = grid[0].length;
    const k = queries.length;
    const answer = new Array(k).fill(0);

    const heap = new MinHeap();
    heap.push([grid[0][0], 0, 0]);
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));
    visited[0][0] = true;
    let currentPoints = 0;

    const sortedQueries = queries.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
    const prefix = [];

    for (const [val, idx] of sortedQueries) {
        while (heap.size() > 0 && heap.peek()[0] < val) {
            const [i, j] = heap.pop();
            currentPoints++;
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for (const [di, dj] of directions) {
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj]) {
                    visited[ni][nj] = true;
                    heap.push([grid[ni][nj], ni, nj]);
                }
            }
        }
        prefix.push([val, currentPoints]);
    }

    prefix.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < k; i++) {
        const q = queries[i];
        let low = 0;
        let high = prefix.length - 1;
        let res = 0;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (prefix[mid][0] <= q) {
                res = prefix[mid][1];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        answer[i] = res;
    }

    return answer;
};

class MinHeap {
    constructor() { this.heap = []; }
    push(val) { this.heap.push(val); this.bubbleUp(); }
    pop() {
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return this.heap[0];
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2), parent = this.heap[parentIndex];
            if (this.heap[index][0] >= parent[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = this.heap[index];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1, rightChildIndex = 2 * index + 2;
            let leftChild, rightChild, swap = null;
            if (leftChildIndex < this.heap.length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < this.heap[0][0]) swap = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild[0] < this.heap[0][0]) || (swap !== null && rightChild[0] < leftChild[0])) swap = rightChildIndex;
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = this.heap[0];
            index = swap;
        }
    }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}