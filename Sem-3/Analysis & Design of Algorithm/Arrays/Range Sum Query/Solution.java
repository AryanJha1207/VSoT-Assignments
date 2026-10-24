import java.util.*;
class Solution {
    public static void solve(){
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int[] arr = new int[n];
      for(int i = 0; i<n; i++){
        arr[i] = scn.nextInt();
      }
      int query = scn.nextInt();
      for(int i = 0; i<query; i++){
        int l = scn.nextInt();
        int r = scn.nextInt();
        System.out.println(sum(arr,l,r));
      }
    }
  public static int sum(int[] arr, int l, int r){
    int ans = 0;
    while(l<r){
      ans+= arr[l]+arr[r];
      l++;
      r--;
    }
    if(l==r){
      ans += arr[l];
    }
    return ans;
  }
}
