import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);

        String[] input = scn.nextLine().trim().split("\\s+");
        int[] nums = new int[input.length];

        for (int i = 0; i < input.length; i++) {
            nums[i] = Integer.parseInt(input[i]);
        }

        System.out.println(sumOfUnique(nums));
    }
    
    // Function that solves the actual question
    public static int sumOfUnique(int[] nums) {
        HashMap<Integer, Integer> hm = new HashMap<>();

        for (int num : nums) {
            hm.put(num, hm.getOrDefault(num, 0) + 1);
        }

        int sum = 0;

        for (int num : hm.keySet()) {
            if (hm.get(num) == 1) {
                sum += num;
            }
        }

        return sum;
    }
}
