import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      String st = scn.next();
      char[] arr = st.toCharArray();
      TreeMap<Character,Integer> hm = new TreeMap<>();
      for(char ch: arr){
        hm.put(ch,hm.getOrDefault(ch,0)+1);
      }
      for(int i = 0; i<arr.length; i++){
        if(hm.get(arr[i])==1){
          System.out.print(arr[i]);
          return;
        }
      }
      System.out.print(-1);
    }
}
