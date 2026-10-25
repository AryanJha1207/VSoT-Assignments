import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int[] arr = new int[n];
      for(int i = 0; i<n; i++){
        arr[i] = scn.nextInt();
      }
      int target = scn.nextInt();
      System.out.print(Arrays.toString(twoSum(arr,target)));
    }
  public static int[] twoSum(int[] nums, int k){
    HashMap<Integer,Integer> hm = new HashMap<>();
    
    for(int i = 0; i<nums.length; i++){
      int comp = k - nums[i];

      if(hm.containsKey(comp)){
        return new int[]{hm.get(comp),i};
      }

      hm.put(nums[i],i);
    }

    return new int[]{-1,-1};
  }
}
