

public class Solution {
    public static bool ContainsDuplicate(int[] nums)
    {
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                if (nums[i].Equals(nums[j]))
                {
                    return true;
                    break;
                }
            } 
        }
        return false; 
    }
}