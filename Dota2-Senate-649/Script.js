/**
 * @param {string} senate
 * @return {string}
 */
let predictPartyVictory = function(senate) {
    const n = senate.length;
    if (n === 1) if (senate === 'D') return "Dire"; else if (senate === 'R') return "Radiant"; else return "";
    if (n === 0) return "";
    let radiant = [], dire = [];
    for (let i = 0; i < n; i++) if (senate[i] === 'R') radiant.push(i); else dire.push(i);
    while (radiant.length && dire.length) {
        let r = radiant.shift(), d = dire.shift();
        if (r < d) radiant.push(r + n); else dire.push(d + n);
    }
    return radiant.length > 0 ? "Radiant" : "Dire";
}

console.log(predictPartyVictory("RDD"));
