/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  return main();
  function main() {
    return BFS();
  }
  function BFS() {
    let leavel = 1;
    let queue = [];
    let seen = {};
    seen[beginWord] = true;
    queue.push(beginWord);

    while (queue.length) {
      let size = queue.length;
      leavel++;
      while (size-- > 0) {
        let cur = queue.shift();
        for (let each of wordList) {
          // 符合要求，并且之前没有出现过层次中
          if (isChange(each, cur) && !seen[each]) {
            if (each == endWord) {
              return leavel;
            }
            seen[each] = true;
            queue.push(each);
          }
        }
      }
    }
    return 0;
  }
  function isChange(target, sameWord) {
    let i = 0;
    let len = target.length;
    let flag = 0;
    while (i < len) {
      if (target[i] != sameWord[i]) {
        flag++;
      }
      i++;
    }
    return flag <= 1;
  }
};
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
// @lc code=end
