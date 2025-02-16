// Time Complexity:  O(N^n)
// Space Complexity: O(N)
function constructDistancedSequence(n: number): number[] {
    const length: number = 2 * n - 1;
    const numsList: number[] = Array(length).fill(0);
    const visited: boolean[] = Array(n + 1).fill(false);

    const backtrack: (numberPosition: number) => boolean  = (pos: number): boolean => {
        if (pos === length) {
            for (let i: number = 1; i <= n; i++) if (!visited[i]) return false;
            return true;
        }

        if (numsList[pos] !== 0) return backtrack(pos + 1);

        for (let num: number = n; num >= 1; num--) {
            if (visited[num]) continue;

            if (num === 1) {
                numsList[pos] = 1;
                visited[1] = true;
                if (backtrack(pos + 1)) return true;
                visited[1] = false;
                numsList[pos] = 0;
            } else {
                const nextPos: number = pos + num;
                if (nextPos < length && numsList[nextPos] === 0) {
                    numsList[pos] = num;
                    numsList[nextPos] = num;
                    visited[num] = true;
                    if (backtrack(pos + 1)) return true;
                    visited[num] = false;
                    numsList[pos] = 0;
                    numsList[nextPos] = 0;
                }
            }
        }
        return false;
    }
    return backtrack(0) ? numsList : [];
}
