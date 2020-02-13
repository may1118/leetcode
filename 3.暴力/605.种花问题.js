/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let len = flowerbed.length;
  if (len == 0) return false;
  let coun = 0;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i]) continue;

    let pre = i == 0 ? 0 : flowerbed[i - 1];
    let next = i == len - 1 ? 0 : flowerbed[i + 1];
    if (pre == 0 && next == 0) {
      coun++;
      flowerbed[i] = 1;
    }
  }
  return coun >= n;
};
console.log(canPlaceFlowers([0], 1));
// @lc code=end
