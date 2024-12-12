namespace Majority_Element_169;

public abstract class Solution
{
    public static void Main(string[] args)
    {
        int[] nums = [3,2,3];
        Console.WriteLine(MajorityElement(nums));
    }

    static int MajorityElement(int[] nums)
    {
        if (nums.Length == 1)
        {
            return nums[0];
        }

        return nums.GroupBy(x => x)
            .OrderByDescending(g => g.Count())
            .First()
            .Key;
    }
}