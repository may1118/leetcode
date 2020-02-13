/*
 * @lc app=leetcode.cn id=167 lang=java
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (numbers == null)
            return null;
        int index1 = 0, index2 = numbers.length - 1;
        while (index1 < index2) {
            int arr1 = numbers[index1];
            int arr2 = numbers[index2];
            int sum = arr1 + arr2;
            if (sum == target) {
                return new int[] { index1 + 1, index2 + 1 };
            } else if (sum > target) {
                index2--;
            } else {
                index1++;
            }
        }
        return null;
    }

}
// @lc code=end
