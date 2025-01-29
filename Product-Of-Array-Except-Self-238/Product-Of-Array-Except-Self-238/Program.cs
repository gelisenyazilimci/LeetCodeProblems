namespace Product_Of_Array_Except_Self_238;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
    
    public int[] ProductExceptSelf(int[] nums)
    {
        int zeros = 0, idx = -1, prod = 1;
        var n = nums.Length;
        int[] newNums;
        
        
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                zeros++;
                idx = i;
            } else {
                prod *= nums[i];
            }
        }

        newNums = new int[n];
        Array.Fill(newNums, 0);

        switch (zeros)
        {
            case 0:
            {
                for (int i = 0; i < n; i++) newNums[i] = prod / nums[i];
                break;
            }
            case 1:
                newNums[idx] = prod;
                break;
        }
        return newNums;
    }
}