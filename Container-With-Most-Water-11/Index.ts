function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let maxArea: number = 0;

    while (left < right) {
        maxArea = Math.max(maxArea, ((right - left) * (Math.min(height[left], height[right]))));
        if (height[left] < height[right]) left++; else right--;
    }
    return maxArea;
}