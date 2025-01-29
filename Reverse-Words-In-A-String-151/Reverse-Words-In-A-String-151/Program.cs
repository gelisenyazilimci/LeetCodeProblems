namespace Reverse_Words_In_A_String_151;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
    public string ReverseWords(string s)
    {
        s = s.Trim();
        string[] words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        Array.Reverse(words);
        return string.Join(" ", words);
    }
}