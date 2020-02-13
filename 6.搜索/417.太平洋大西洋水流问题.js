/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix == null || matrix.length == 0) return [];
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  let m = matrix.length;
  let n = matrix[0].length;
  let seenT = [];
  let seenD = [];

  for (let i = 0; i < m; i++) {
    seenT[i] = new Array();
    seenD[i] = new Array();
    for (let j = 0; j < n; j++) {
      seenT[i][j] = false;
      seenD[i][j] = false;
    }
  }
  for (let i = 0; i < m; i++) {
    DFS(i, 0, seenT);
    DFS(i, n - 1, seenD);
  }
  for (let i = 0; i < n; i++) {
    DFS(0, i, seenT);
    DFS(m - 1, i, seenD);
  }

  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (seenD[i][j] && seenT[i][j]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;

  function DFS(x, y, seenSea) {
    if (seenSea[x][y]) return;
    seenSea[x][y] = true;
    for (let each of dir) {
      let neX = each[0] + x;
      let neY = each[1] + y;
      if (
        neX < 0 ||
        neX >= m ||
        neY < 0 ||
        neY >= n ||
        matrix[x][y] > matrix[neX][neY]
      ) {
        continue;
      }
      DFS(neX, neY, seenSea);
    }
  }
};
console.log(pacificAtlantic([]));
// @lc code=end
