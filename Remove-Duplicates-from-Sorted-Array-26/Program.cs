namespace Remove_Duplicates_from_Sorted_Array_26;

class Program
{
    static void Main(string[] args)
    {
        int[] nums = [1, 1, 2, 3, 3,];
        int[] exceptedNums = [1, 2, 3];
            // int k = RemoveDuplicates(nums);
            // if (k == exceptedNums.Length)
            // {
            //     for (int i = 0; i < k; i++)
            //     {
            //         nums[i] = exceptedNums[i];
            //     }
            // }    
    }
     static int RemoveDuplicates(int[] nums)
     {
         if (nums.Equals(null) || nums.Length == 0) return 0;

         var uniqueIndex = 0;

         for (int i = 1; i < nums.Length; i++)
         {
             if (nums[i] != nums[uniqueIndex])
             {
                 uniqueIndex++;
                 nums[uniqueIndex] = nums[i];
             }
         }

         return uniqueIndex + 1;
     }
     
     
}