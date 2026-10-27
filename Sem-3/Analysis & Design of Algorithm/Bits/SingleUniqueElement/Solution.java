class Solution {
    public static int singleUniqueElement(int[] nums) {
        int ans = 0;
        for(int num: nums){
            ans = ans ^ num;
        }
        return ans;
    }
}
