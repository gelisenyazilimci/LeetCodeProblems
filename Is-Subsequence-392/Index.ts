function isSubsequence(s: string, t: string): boolean {
    let i: number = 0, j: number = 0;
    for (;i < s.length && j < t.length; ++j) if (s[i] === t[j]) ++i;
    return i === s.length;
}