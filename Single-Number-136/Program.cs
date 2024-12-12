namespace Single_Number_136;

public abstract class Solution
{
    public static void Main(string[] args)
    {
        int[] nums = [2,2,1];
        Console.WriteLine(SingleNumber(nums));
    }

    static int SingleNumber(int[] nums)
    {
        if (nums.Length == 1)
        {
            return nums[0];
        }
        for (int i = 0; i < nums.Length; i++)
        {
            bool isUnique = true;
            for (int j = 0; j < nums.Length; j++)
            {
                if ( !i.Equals(j) && nums[i].Equals(nums[j]))
                {
                    isUnique = false;
                    break;
                }
            }

            if (isUnique)
            {
                return nums[i];
            }
        }

        return 0;
    }
}