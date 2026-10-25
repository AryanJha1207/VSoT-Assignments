import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int k = scn.nextInt();
      int[] nums = new int[n];
      for(int i = 0; i<n; i++){
        nums[i] = scn.nextInt();
      }
      System.out.print(pairSumO(nums,k));
    }
  public static String pairSumO(int[] nums, int k){
    HashMap<Integer,Integer> hm = new HashMap<>();

    for(int i = 0; i<nums.length; i++){
      int comp = k-nums[i];

      if(hm.containsKey(comp)) return "Y";

      hm.put(nums[i],i);
    }
    return "N";
  }
}
