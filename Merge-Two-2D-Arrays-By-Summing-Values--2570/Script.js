// Time Complexity: O(N+M)
// Space Complexity: O(N+M)
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
const mergeArrays = function(nums1, nums2) {
    const result = [];
    let o = 0, t = 0; // o: nums1 index, t: nums2 index

    while (o < nums1.length && t < nums2.length) {
        const [id1, val1] = nums1[o], [id2, val2] = nums2[t];
        if (id1 === id2) { result.push([id1, val1 + val2]); o++; t++;
        } else if (id1 < id2) { result.push([id1, val1]); o++; }
        else { result.push([id2, val2]); t++; }
        id1 === id2 ? result.push([id1, val1 + val2])
    }
    for (;o < nums1.length; o++) result.push(nums1[o]);
    for (;t < nums2.length; t++) result.push(nums2[t]);
    return result;
}

console.log(mergeArrays([[2,4],[3,6],[5,5]],[[1,3],[4,3]]));