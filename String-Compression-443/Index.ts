// Time Complexity O(N)
// Space Complexity O(1)
function compress(chars: string[]): number {
    let writeIndex: number = 0;
    let start: number = 0;

    let charsLength: number = chars.length;

    for (let i: number = 0; i < charsLength; i++) {
        if (i === charsLength - 1 || chars[i] !== chars[i + 1]) {
            chars[writeIndex++] = chars[start];

            if ((i - start + 1) > 1)
                for (let c of (i - start + 1).toString())
                    chars[writeIndex++] = c;

            start = i + 1;
        }
    }

    chars.length = writeIndex;
    return writeIndex;
}
