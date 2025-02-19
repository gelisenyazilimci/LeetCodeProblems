// Time Complexity: O(N)
// Space Complexity: O(1)
function getHappyString(n: number, k: number): string {
    const chars: string[] = ['a', 'b', 'c'];
    let groupSize: number = Math.pow(2, (n - 1)), result: string = "";
    if (groupSize * 3 < k || n === 0) return "";
    for (let i: number = 0; i < chars.length; i++) { if (k <= groupSize) { result += chars[i]; break; } k -= groupSize; }
    for (let pos:number = 1; pos < n; pos++){
        groupSize =  Math.pow(2, (n - (pos + 1)));
        for (let char of chars) {
            if (char === result[result.length - 1]) continue;
            if (k <= groupSize) {result += char; break} k -= groupSize;
        }
    }
    return result;
}
