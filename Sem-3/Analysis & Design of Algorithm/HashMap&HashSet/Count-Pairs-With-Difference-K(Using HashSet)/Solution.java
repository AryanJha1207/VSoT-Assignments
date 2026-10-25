import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      //Taking Inputs
      int n = scn.nextInt();
      int k = scn.nextInt();
      //Building Array
      int[] arr = new int[n];
      for(int i = 0; i<n; i++){
        arr[i] = scn.nextInt();
      }
      //Building HashSet
      HashSet<Integer> hs = new HashSet<>();
      for(int num: arr){
        hs.add(num);
      }
      //Counting the Number of Pairs with difference K
      int count = 0;
      for(int num: hs){
        if(hs.contains(num+k)) count++;
      }
      //Printing the Final count
      System.out.print(count);
    }
}
