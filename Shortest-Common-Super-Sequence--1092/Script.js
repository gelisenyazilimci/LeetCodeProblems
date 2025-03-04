/**
 * @param  {string} str1
 * @param  {string} str2
 * @return {string}
 */
let shortestCommonSuperSequence = function(str1, str2) {
    let lcs = findLcs(str1, str2, str1.length-1, str2.length-1, {});
    return findScs(lcs, str1, str2);
}

/**
 *
 * @param str1
 * @param str2
 * @param i1
 * @param i2
 * @param cache
 * @returns {*|string[]}
 */

function findLcs(str1, str2, i1, i2, cache) {
    let key = i1 + '-' + i2;
    if(cache[key]) return cache[key];
    if(i1 === -1 || i2 === -1) return "";
    if(str1[i1] === str2[i2]) cache[key] = findLcs(str1, str2, i1-1, i2-1, cache) + str1[i1];
    else {
        let option1 = findLcs(str1, str2, i1, i2-1, cache);
        let option2 = findLcs(str1, str2, i1-1, i2, cache);
        cache[key] = option1.length > option2.length ? option1 : option2;
    }
    return cache[key];
}

/**
 * @param  lcs
 * @param  {string} str1
 * @param  {string} str2
 * @return {string}
 */


function findScs(lcs, str1, str2) {
    let scs = "";
    for(let i = 0; i < lcs.length; i++) {
        scs += str1.slice(0, str1.indexOf(lcs[i]));
        scs += str2.slice(0, str2.indexOf(lcs[i]));
        scs += lcs[i];
        str1 = str1.slice(str1.indexOf(lcs[i])+1);
        str2 = str2.slice(str2.indexOf(lcs[i])+1);
    }
    scs += str1 + str2;
    return scs;
}