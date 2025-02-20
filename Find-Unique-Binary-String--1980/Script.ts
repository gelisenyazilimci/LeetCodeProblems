// Time Complexity: O(N∗2M)
// Space Complexity: O(1)
function findMissingBinaryString(nums: string[]): string {
    if (nums.length === 0) return "";

    const len: number = nums[0].length;
    const sortedNums: string[] = [...nums].sort();
    const totalCombinations: number = 1 << len;

    const toFixedBinary: (num: number, fixedLength: number) => string = (num: number, fixedLength: number): string => {
        let binary: string = num.toString(2);
        while (binary.length < fixedLength) binary = "0" + binary;
        return binary;
    }

    for (let i: number = 0; i < totalCombinations && i < sortedNums.length; i++)
        if (toFixedBinary(i, len) !== sortedNums[i]) return toFixedBinary(i, len);

    // @ts-ignore
    return "1".repeat(len);
}