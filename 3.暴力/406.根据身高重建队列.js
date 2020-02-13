/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    return a[0] == b[0] ? a[1] - b[1] : b[0] - a[0];
  });
  let ans = [];
  for (let each of people) {
    let h = each[0];
    let k = each[1];
    if (!ans[k]) {
      ans[k] = each;
    } else {
      ans.splice(k, 0, each);
    }
  }
  // console.log(people);
  return ans;
};
console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ])
);
// @lc code=end
