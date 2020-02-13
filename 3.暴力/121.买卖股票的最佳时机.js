/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) return 0;
  let min = prices[0];
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      ans = Math.max(ans, prices[i] - min);
    }
  }
  return ans;
};
console.log(maxProfit([1, 2]));
// @lc code=end
// 不够优化
// var maxProfit = function(prices) {
//   let ans = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     let bin = prices[i];
//     let bout = Math.max(...prices.slice(i + 1));
//     ans = Math.max(ans, bout - bin);
//   }
//   return ans;
// };
