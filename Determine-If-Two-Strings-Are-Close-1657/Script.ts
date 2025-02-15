// Time Complexity: O(N)
// Space Complexity: O(N)
function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    let s1Frequency: { [key: string]: number } = {};
    let s2Frequency: { [key: string]: number } = {};

    for (let i: number = 0; i < word1.length; i++) { s1Frequency[word1[i]] = (s1Frequency[word1[i]] || 0) + 1; s2Frequency[word2[i]] = (s2Frequency[word2[i]] || 0) + 1; }

    let s1Keys: string[] = Object.keys(s1Frequency);
    let s2Keys: string[] = Object.keys(s2Frequency);

    if (s1Keys.length !== s2Keys.length) return false;

    for (let key of s1Keys) if (!s2Frequency.hasOwnProperty(key)) return false;

    let freqCount1: { [freq: number]: number } = {};
    let freqCount2: { [freq: number]: number } = {};

    for (let key of s1Keys) freqCount1[s1Frequency[key]] = (freqCount1[s1Frequency[key]] || 0) + 1;
    for (let key of s2Keys) freqCount2[s2Frequency[key]] = (freqCount2[s2Frequency[key]] || 0) + 1;

    let freqKeys1: string[] = Object.keys(freqCount1);
    let freqKeys2: string[] = Object.keys(freqCount2);

    if (freqKeys1.length !== freqKeys2.length) return false;

    // @ts-ignore
    for (let freqKey of freqKeys1) if (freqCount1[freqKey] !== freqCount2[freqKey]) return false;

    return true;
}
