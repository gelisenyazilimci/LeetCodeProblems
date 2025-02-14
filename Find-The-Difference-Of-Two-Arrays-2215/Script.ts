// Time Complexity: O(N)
// Space Complexity: O(N)

function findDifference(nums1: number[], nums2: number[]): number[][] {
    // @ts-ignore
    let set1: Set<number> = new Set<number>(nums1);
    // @ts-ignore
    let set2: Set<number> = new Set<number>(nums2);
    nums1.forEach((number: number)=> set2.delete(number));
    nums2.forEach((number: number)=> set1.delete(number));

    // @ts-ignore
    return [Array.from(set1), Array.from(set2)];
}

console.log(findDifference([1,2,3,3],[2,2,4,6]))