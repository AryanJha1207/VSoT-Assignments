class Solution {
    public static void solve() {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int[] height = new int[n];
      for(int i = 0; i<n; i++){
        height[i] = scn.nextInt();
      }

      int left = 0;
      int right = height.length-1;

      int leftmax = 0;
      int rightmax = 0;
      int water = 0;

      while(left<=right){
        if(height[left]<=height[right]){
          if(height[left]>=leftmax){
            leftmax = height[left];
          }else{
            water += leftmax - height[left];
          }
          left++;
        }else{
          if(height[right]>=rightmax){
            rightmax = height[right];
          }else{
            water += rightmax - height[right];
          }
          right--;
        }
      }
      System.out.print(water);
    }
}
