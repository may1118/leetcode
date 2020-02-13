import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if (nums == null)
            return null;
        int len = nums.length;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < len; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < len; i++) {
            int index2 = target - nums[i];
            if (map.containsKey(index2) && map.get(index2) != i) {
                return new int[] { i, map.get(index2) };
            }
        }
        return null;
    }
}
// @lc code=end
// 暴力解题
// if (nums == null)
// return null;
// int len = nums.length;
// int[] nums = new int[len];
// for (int i = 0; i < len; i++) {
// nums[i] = nums[i];
// }
// for (int i = 0; i < len; i++) {
// for (int j = i + 1; j < len; j++) {
// if (nums[i] > nums[j]) {
// int temp = nums[i];
// nums[i] = nums[j];
// nums[j] = temp;
// }
// }
// }
// int index1 = 0, index2 = nums.length - 1;
// while (index1 < index2) {
// int arr1 = nums[index1];
// int arr2 = nums[index2];
// int sum = arr1 + arr2;
// if (sum == target) {
// int[] ans = new int[2];
// boolean flag = false;
// for (int i = 0; i < len; i++) {
// if (nums[i] == arr1 && !flag) {
// ans[0] = i;
// flag = true;
// continue;
// }
// if (nums[i] == arr2) {
// ans[1] = i;
// }
// }
// return ans;
// } else if (sum > target) {
// index2--;
// } else {
// index1++;
// }
// }
// return null;