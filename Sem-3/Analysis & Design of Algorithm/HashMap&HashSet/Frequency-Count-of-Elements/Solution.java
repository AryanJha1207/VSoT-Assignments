import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);

        String[] input = scn.nextLine().trim().split("\\s+");
        int[] nums = new int[input.length];

        for (int i = 0; i < input.length; i++) {
            nums[i] = Integer.parseInt(input[i]);
        }
        
        TreeMap<Integer,Integer> sorted = FreqCount(nums);

        StringJoiner sj = new StringJoiner(", ", "{", "}");

        for (Map.Entry<Integer, Integer> entry : sorted.entrySet()) {
            sj.add(entry.getKey() + ": " + entry.getValue());
        }

        System.out.println(sj);
    }
  public static TreeMap<Integer,Integer> FreqCount(int[] nums){
    TreeMap<Integer,Integer> hm = new TreeMap<>();

    for(int num: nums){
      hm.put(num, hm.getOrDefault(num,0)+1);
    }

    return hm;
  }
}
