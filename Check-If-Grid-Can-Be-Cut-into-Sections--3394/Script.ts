enum Coord { startX = 0, startY = 1, endX = 2, endY = 3  }

/**
 *
 * @param n
 * @param rectangles
 * @returns {boolean}
 */

function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const checkThreCuts = (startKey, endKey): boolean => {
        const sorted: number[][] = rectangles.sort((l, r) => l[startKey] - r[startKey])
        let currEnd: number = sorted[0][endKey]
        let count: number = 0
        for(let i=1; i<sorted.length; i++) {
            if (currEnd > sorted[i][startKey]) {
                currEnd = Math.max(currEnd, sorted[i][endKey])
            } else {
                currEnd = sorted[i][endKey]
                if (++count === 2) return true
            }
        }
        return false
    }
    return (checkThreCuts(Coord.startX, Coord.endX) || checkThreCuts(Coord.startY, Coord.endY));
}