function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

    let bigNumber:number = Math.max(...candies);
    let result: boolean[] = [];
    for (let i: number = 0; i < candies.length; i ++) {
        candies[i]+= extraCandies;
        if (candies[i] === bigNumber || candies[i] > bigNumber)
            result[i] = true;
        else
            result[i] = false;
    }
    return result;
}