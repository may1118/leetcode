/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x == 0 || x == 1) return x;
  let ac = 1;
  let en = x;
  while (ac <= en) {
    let mid = Math.floor((ac + en) / 2);

    let sqrt = Math.floor(x / mid);
    if (sqrt == mid) {
      return mid;
    }
    if (sqrt > mid) {
      ac = mid + 1;
    } else {
      en = mid - 1;
    }
  }
  return en;
};
console.log(mySqrt(8));
// @lc code=end
