function RecentCounter () {this.q = [];}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while (this.q < t - 300) this.q.shift();
    return this.q.length;
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */