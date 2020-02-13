/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  function main() {
    return resolve(n);
  }
  function resolve(n) {
    let target = generateSquares(n);
    let level = 1;
    let queue = [];
    let temp = [];
    let obj = {};

    obj[n] = 1;
    queue.push(n);

    while (queue.length) {
      // 记录层次
      let cur = queue.shift();

      for (let each of target) {
        let nex = cur - each;
        if (nex < 0) continue;
        if (nex == 0) {
          return level;
        }
        if (!obj[nex]) {
          obj[nex] = 1;
          temp.push(nex);
        }
      }
      if (queue.length == 0) {
        level++;
        queue = JSON.parse(JSON.stringify(temp));
        temp = [];
      }
    }
    return n;
  }
  function generateSquares(n) {
    let ans = [];
    let i = 1;
    while (i ** 2 <= n) {
      ans.push(i ** 2);
      i++;
    }
    return ans;
  }
  return main();
};
console.log(numSquares(7168));
// @lc code=end
