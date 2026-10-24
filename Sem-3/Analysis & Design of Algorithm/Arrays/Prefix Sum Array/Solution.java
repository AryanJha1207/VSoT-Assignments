import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int[] arr = new int[n];
      int sum = 0;
      for(int i = 0; i<n; i++){
        sum += scn.nextInt();
        System.out.print(sum+" ");
      }

    }
}
