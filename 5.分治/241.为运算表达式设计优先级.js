/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  let ans = [];
  for (let i = 0; i < input.length; i++) {
    let str = input[i];
    if (str == '-' || str == '+' || str == '*') {
      let left = diffWaysToCompute(input.substring(0, i));
      let right = diffWaysToCompute(input.substring(i + 1));
      for (let li of left) {
        for (let ri of right) {
          switch (str) {
            case '+':
              ans.push(li + ri);
              break;
            case '-':
              ans.push(li - ri);
              break;
            case '*':
              ans.push(li * ri);
              break;
          }
        }
      }
    }
  }
  if (ans.length == 0) {
    ans.push(parseInt(input));
  }
  return ans;
};
console.log(diffWaysToCompute('2*3-4*5'));
// @lc code=end
