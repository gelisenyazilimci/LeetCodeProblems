//Time Complexity: O(N)
//Space Complexity: O(N)
function uniqueOccurrences(arr: number[]): boolean {
    const frequency: {[key: number]: number} = {};
    const seen: { [key: number]: boolean } = {};
    for (let i: number = 0; i < arr.length; i++) frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    for (let key in frequency) { if (seen[frequency[key]]) return false; seen[frequency[key]] = true; }
    return true;
}