function mergeAlternately(word1: string, word2: string): string {
    let w1Array: string[] = word1.split("");
    let w2Array: string[] = word2.split("");

    let initialSpaceCount1: number = 0;
    let initialSpaceCount2: number = 3;
    let longLength: number;

    let w1: string[];
    w1 = Array<string>(0).map(():string => w1Array[0])
    let w2: string[] = Array<string>(initialSpaceCount2).map(():string => " ");

    if (word1.length > word2.length)
        longLength = word1.length;
    else if (word1.length === word2.length)
        longLength = word1.length;
    else
        longLength = word2.length;

    for (let i:number = 0; i < longLength; i++) {
        if (i <= w1Array.length) {
            for (let j: number = 1; j < 4; j++) {
                initialSpaceCount1 += 1;
                w1 = Array<string>(initialSpaceCount1).map((): string => " ");
            }

            initialSpaceCount1 += 1;

            w1 = Array<string>(initialSpaceCount1).map(():string => w1Array[i]);
        }
        if (i <= w2Array.length) {
            for (let x: number = 1; x < 4; x++) {
                initialSpaceCount2 += 1;
                w2 = Array<string>(initialSpaceCount2).map((): string => " ");
            }

            initialSpaceCount2 += 1;

            w2 = Array<string>(initialSpaceCount2).map(():string => w2Array[i]);
        }
    }

    let mergeWord: string[] = [];

    for (let i: number = 0; i < longLength; i++) {
        if (i === 2 ) w1[i] = mergeWord[i];
        if (i!== 2 && i % 2 === 0) {
            w2[i] = mergeWord[i];
        } else if (i % 2 !== 0) {
            w1[i] = mergeWord[i]
        }

    }


    return mergeWord.filter(char => char !== undefined).join("");
}
