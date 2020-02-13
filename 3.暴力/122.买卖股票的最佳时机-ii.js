/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) return 0;
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// @lc code=end
