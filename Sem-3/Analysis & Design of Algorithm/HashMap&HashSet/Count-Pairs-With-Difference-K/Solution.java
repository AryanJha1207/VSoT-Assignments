import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int k = scn.nextInt();
      int[] arr = new int[n];
      for(int i = 0; i<n; i++){
        arr[i] = scn.nextInt();
      }
      int count = 0;
      for(int i = 0; i<n-1; i++){
        for(int j = i+1; j<n; j++){
          if(Math.abs(arr[i]-arr[j])==k) count++;
        }
      }
      System.out.print(count);
    }
}
