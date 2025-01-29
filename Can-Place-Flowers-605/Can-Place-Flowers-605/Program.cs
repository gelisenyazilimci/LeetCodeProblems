namespace Can_Place_Flowers_605;

internal static class Program
{
    private static void Main()
    {
        Console.WriteLine(CanPlaceFlowers([1,0,0,0,0,0,1], 2));
    }
    
    public static bool CanPlaceFlowers(int[] flowerbed, int n)
    {
        int count = 0;
        
        for (int i = 0; i < flowerbed.Length; i++)
        {
            if (flowerbed[i] == 0)
            {
                bool emptyPrev = (i == 0) || (flowerbed[i - 1] == 0);
                bool emptyNext = (i == flowerbed.Length - 1) || (flowerbed[i + 1] == 0);

                if (emptyPrev && emptyNext)
                {
                    flowerbed[i] = 1; 
                    count++;
                    if (count >= n) return true;
                }
            }
        }

        return count >= n;
    }
    
}