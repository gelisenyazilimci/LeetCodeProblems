namespace Reverse_Vowels_Of_A_String_345;

class Program
{
    static void Main()
    {
        Console.WriteLine(ReverseVowels("IceCreAm"));
    }
    
    public static string? ReverseVowels(string s)
    {
        char[] sCharacters = s.ToCharArray();
        char[] vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];

        int left = 0, right = s.Length - 1;

        while (left < right)
        {
            var isLeftVowel = vowels.Any(t => sCharacters[left] == t);

            if (!isLeftVowel)
            {
                left++;
                continue;
            }

            var isRightVowel = vowels.Any(t => sCharacters[right] == t);

            if (!isRightVowel)
            {
                right--;
                continue;
            }

            (sCharacters[left], sCharacters[right]) = (sCharacters[right], sCharacters[left]);

            left++;
            right--;
        }

        return new string(sCharacters);
    }
}