//Time Complexity: O(2^n)
//Space Complexity: O(N)
function numTilePossibilities(tiles: string): number {
    const freqMap = new Map<string, number>();
    for (const ch of tiles) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    // ["A":2, "B":1, "C":3] -> [2,1,3]
    const freqArray: number[] = Array.from(freqMap.values());

    let result: number = 0;

    function backtrack(index: number, used: number[]): void {
        if (index === freqArray.length) {
            const sumUsed: number = used.reduce((acc: number, val: number): number => acc + val, 0);
            if (sumUsed > 0) {
                let perms: number = factorial(sumUsed);
                for (const count of used) perms /= factorial(count);
                result += perms;
            }
            return;
        }

        for (let count: number = 0; count <= freqArray[index]; count++) {
            used[index] = count;
            backtrack(index + 1, used);
            used[index] = 0;
        }
    }
    backtrack(0, new Array(freqArray.length).fill(0));
    return result;
}

function factorial(n: number): number {
    let res: number = 1;
    for (let i: number = 2; i <= n; i++) res *= i;
    return res;
}
