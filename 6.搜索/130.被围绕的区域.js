/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board == null || board.length == 0) {
    return null;
  }
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  let seen = JSON.parse(JSON.stringify(board));
  let m = board.length;
  let n = board[0].length;
  // 找四条边界的
  for (let i = 0; i < m; i++) {
    if (seen[i][0] == 'O') {
      DFS(i, 0);
    }
    if (seen[i][n - 1] == 'O') {
      DFS(i, n - 1);
    }
  }
  for (let j = 0; j < n; j++) {
    if (seen[0][j] == 'O') {
      DFS(0, j);
    }
    if (seen[m - 1][j] == 'O') {
      DFS(m - 1, j);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = seen[i][j] == 'G' ? 'O' : 'X';
    }
  }
  return board;

  function DFS(x, y) {
    seen[x][y] = 'G';
    for (let each of dir) {
      let neX = each[0] + x;
      let neY = each[1] + y;
      if (
        neX < 0 ||
        neX >= m ||
        neY < 0 ||
        neY >= n ||
        seen[neX][neY] == 'X' ||
        seen[neX][neY] == 'G'
      )
        continue;
      DFS(neX, neY);
    }
  }
};
console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'X'],
    ['O', 'O', 'X', 'X'],
    ['X', 'O', 'X', 'X']
  ])
);
// @lc code=end
