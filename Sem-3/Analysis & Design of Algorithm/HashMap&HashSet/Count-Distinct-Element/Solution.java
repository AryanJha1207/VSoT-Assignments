import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      HashSet<Integer> hs = new HashSet<>();
      for(int i = 0; i<n; i++){
        hs.add(scn.nextInt());
      }
      System.out.print(hs.size());
    }
}
