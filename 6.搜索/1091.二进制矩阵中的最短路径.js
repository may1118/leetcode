/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

function BFS(grid) {
  let dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  let m = grid[0].length; // x的范围
  let n = grid.length; // y的范围
  let queue = [];
  // 检查不满足开始的
  if (grid[m - 1][n - 1] == 1 || grid[0][0] == 1) {
    return -1;
  }
  queue.push([0, 0]);
  grid[0][0] = 1;
  while (queue.length > 0) {
    let node = queue.pop();
    let nodeX = node[0];
    let nodeY = node[1];
    let count = grid[nodeX][nodeY];

    // 遍历它的8个方向
    for (let each of dir) {
      let neX = nodeX + each[0];
      let neY = nodeY + each[1];
      if (neX < 0 || neY < 0 || neX >= m || neY >= n || grid[neX][neY] == 1) {
        continue;
      }
      if (grid[neX][neY] == 0 || grid[neX][neY] > count) {
        queue.push([neX, neY]);
        grid[neX][neY] =
          grid[neX][neY] == 0 ? count + 1 : Math.min(count + 1, grid[neX][neY]);
      }
    }
  }
  console.log(grid);
  return grid[m - 1][n - 1] == 0 ? -1 : grid[m - 1][n - 1];
}

// @lc code=end
/**运行超时 */
