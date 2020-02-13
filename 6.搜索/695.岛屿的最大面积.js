/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid == null || grid.length == 0) return 0;
  // 四个方向
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  let seen = JSON.parse(JSON.stringify(grid));
  let m = grid.length;
  let n = grid[0].length;

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (seen[i][j]) {
        let area = DFS(seen, i, j);
        ans = Math.max(area, ans);
      }
    }
  }
  return ans;

  function DFS(seen, x, y) {
    seen[x][y] = 0;
    let ans = 1;
    for (let each of dir) {
      let neX = each[0] + x;
      let neY = each[1] + y;
      if (neX < 0 || neX >= m || neY < 0 || neY >= n || 0 == seen[neX][neY]) {
        continue;
      }
      ans += DFS(seen, neX, neY);
    }
    return ans;
  }
};
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
// @lc code=end
