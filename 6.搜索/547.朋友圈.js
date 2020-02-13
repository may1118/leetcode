/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  // 一共有N为同学
  let seen = {};
  let ans = 0;
  let n = M.length;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      DFS(i, n);
    }
  }
  return ans;
  function DFS(k, n) {
    seen[k] = true;
    for (let i = 0; i < n; i++) {
      if (M[k][i] && !seen[i]) {
        DFS(i, n);
      }
    }
  }
};
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
);
// @lc code=end
