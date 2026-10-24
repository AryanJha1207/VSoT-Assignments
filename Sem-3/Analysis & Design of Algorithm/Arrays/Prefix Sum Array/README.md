# Prefix Sum Array

> Scraped from https://student.vedam.org/sessions/546/05cea32c-c518-4458-b3e6-f133d3ac0d36?courseOfferingId=22&attendanceStatus=Absent&type=dsa&questionId=339
>
> Language: Java

###Question 4

###Array_Prefix Sum Array

A wizard records magical energy collected every day. Instead of checking each day separately, he wants to know the total energy collected up to every position.

Given an array `arr[]` of size `N`, create a prefix sum array `pf[]` where:

`pf[i] = arr[0] + arr[1] + arr[2] + ... + arr[i]`

Print the final prefix sum array in a single line.

## Input Format

- First line contains an integer `N`, the size of the array.
- Second line contains `N` space-separated integers.

## Output Format

- Print the elements of the prefix sum array in a single line separated by spaces.

Example 1:

Input:

```
5
4 1 6 -2 7
```

Output:

```
4 5 11 9 16
```

Constraints:

```
1 ≤ N ≤ 10^5
-10^9 ≤ arr[i] ≤ 10^9
```

Case 1

Input

Expected Output
