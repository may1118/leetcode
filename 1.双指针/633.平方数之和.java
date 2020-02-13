/*
 * @lc app=leetcode.cn id=633 lang=java
 *
 * [633] 平方数之和
 */

// @lc code=start
class Solution {
    public boolean judgeSquareSum(int c) {
        int i = 0, j = (int) Math.sqrt(c);
        int target = c;
        while (i <= j) {
            int sum = i * i + j * j;
            if (sum == target) {
                return true;
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }
        return false;
    }
}
// @lc code=end
