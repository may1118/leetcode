/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length == 0) return 0;
  intervals.sort((a, b) => {
    return a[1] == b[1] ? a[0] - b[0] : a[1] - b[1];
  });
  console.log(intervals);
  let en = intervals[0][1];
  let ans = 0;
  for (let i = 1; i < intervals.length; i++) {
    let each = intervals[i];
    if (each[0] < en) {
      ans++;
      continue;
    }
    en = each[1];
  }
  return ans;
};
// console.log(
//   eraseOverlapIntervals([
//     [1, 100],
//     [11, 22],
//     [1, 11],
//     [2, 12]
//   ])
// );
// @lc code=end
