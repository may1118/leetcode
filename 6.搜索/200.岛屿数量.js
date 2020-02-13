/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length == 0) return 0;
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  let m = grid.length;
  let n = grid[0].length;
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (parseInt(grid[i][j])) {
        DFS(i, j);
        ans++;
      }
    }
  }
  return ans;

  function DFS(x, y) {
    grid[x][y] = 0;
    for (let each of dir) {
      let neX = each[0] + x;
      let neY = each[1] + y;
      if (
        neX < 0 ||
        neX >= m ||
        neY < 0 ||
        neY >= n ||
        parseInt(grid[neX][neY]) == 0
      ) {
        continue;
      }
      DFS(neX, neY);
    }
  }
};
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
// @lc code=end
