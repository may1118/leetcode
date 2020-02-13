/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let ans = [];
  let lastIndexOfChar = {};
  for (let i = 0; i < S.length; i++) {
    lastIndexOfChar[S[i]] = i;
  }
  let i = 0;
  while (i < S.length) {
    let lastIndex = i;

    for (let j = i; j < S.length && j <= lastIndex; j++) {
      let index = lastIndexOfChar[S[j]];
      lastIndex = Math.max(index, lastIndex);
    }
    ans.push(lastIndex - i + 1);
    i = lastIndex + 1;
  }
  return ans;
};
console.log(partitionLabels('ababcbacadefegdehijhklij'));
// @lc code=end
