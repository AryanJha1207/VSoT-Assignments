import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      String st = scn.next();
      
      boolean ans = equalOccurence(st);
      
      if(ans==true){
        System.out.print("True");
      }else{
        System.out.print("False");
      }
    }

  public static boolean equalOccurence(String st){
    HashMap<Character,Integer> hm = new HashMap<>();

    for(char ch: st.toCharArray()){
      hm.put(ch, hm.getOrDefault(ch,0)+1);
    }
      
    int freq = hm.get(st.charAt(0));
    
    for(int target: hm.values()){
        if(target!=freq) 
          return false;
    }
    return true;
  }
}
