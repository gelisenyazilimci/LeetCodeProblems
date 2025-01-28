function gcdOfStrings(str1: string, str2: string): string {
    const gcd: (a: number, b: number) => number = (a:number, b:number):number => {return b === 0 ? a: a === 0 ? b: gcd(b, a % b);}
    if (str1 + str2 !== str2 + str1) return "";
    let gcdLength: number = gcd (str1.length, str2.length);
    return str1.substring(0, gcdLength);
}