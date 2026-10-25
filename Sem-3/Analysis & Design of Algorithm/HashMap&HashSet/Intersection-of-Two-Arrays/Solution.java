import java.util.*;
class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n1 = scn.nextInt();
      int n2 = scn.nextInt();

      //Adding unique elements from Array1
      HashSet<Integer> hs1 = new HashSet<>();
      for(int i = 0; i<n1; i++){
        hs1.add(scn.nextInt());
      }

      //Iterating on Array2 and adding only the elements which were in Array1
      TreeSet<Integer> hs2 = new TreeSet<>(); //using TreeSet because we want the output in sorted order and time complexity of adding an element in Treeset is 0(1) while in hashset it's O(logN)
      for(int i = 0; i<n2; i++){
        int temp = scn.nextInt();
        if(hs1.contains(temp)){
          hs2.add(temp);
        }
      }
      
      //Printing the intersected elements in sorted order
      for(int val: hs2){
        System.out.print(val+" ");
      }
    }
}
