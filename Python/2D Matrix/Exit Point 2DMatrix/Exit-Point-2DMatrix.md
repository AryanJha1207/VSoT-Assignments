# Python 2D List: Exit Point of a Matrix

**Success Rate:** 32.80%

You are given a 2D list (matrix) of size `n x m` containing only 0s and 1s.

## Problem Description
- Start from the **top-left corner** `(0, 0)`
- Initial direction: **Right**
- **Rules:**
  - If current cell is `0`: Continue in the same direction
  - If current cell is `1`: 
    - Change direction to the **right** (clockwise)
    - Change cell value from `1` → `0`
- Exit when you go out of matrix bounds
- Print the **exit coordinates** 

## Direction Order
```
Right → Down → Left → Up → Right (cycle repeats)
```

## Input Format
```
n m
a11 a12 ... a1m
a21 a22 ... a2m
...
an1 an2 ... anm
```

## Output Format
```
row col
```

## Sample Test Case
**Input:**
```
3 3
0 1 0
0 1 1
0 0 0
```

**Expected Output:**
```
1 0
```