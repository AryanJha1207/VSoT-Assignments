import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int[] arr = new int[n];
      for(int i = 0; i<n; i++){
        arr[i] = scn.nextInt();
      }
      Arrays.sort(arr);
      int min = 1;
      for(int i = 0; i<n; i++){
        if(arr[i]>min){
          System.out.print(min);
          System.exit(0);
        } 
        else if(arr[i]<=0) continue;
        else{
          min++;
        }
      }
      System.out.print(min);
    }
}
