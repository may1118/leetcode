/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length == 0) return 0;
  points.sort((a, b) => {
    return a[1] != b[1] ? a[1] - b[1] : a[0] - b[0];
  });
  console.log(points);
  let coun = 1;
  let point = points[0][1];
  for (let i = 1; i < points.length; i++) {
    let each = points[i];
    if (points[i][1] == 0) continue;

    if (point >= points[i][0] && point <= points[i][1]) {
      points[i][1] = 0;
      continue;
    }
    coun++;
    if (point < points[i][1]) {
      point = points[i][1];
    }
  }
  return coun;
};
console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
  ])
);
// @lc code=end
