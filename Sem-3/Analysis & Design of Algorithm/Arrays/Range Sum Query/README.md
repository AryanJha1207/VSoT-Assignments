# Range Sum Query

> Scraped from https://student.vedam.org/sessions/546/09ac263a-c924-4db6-9f78-d28d6f31a6a1?courseOfferingId=22&attendanceStatus=Absent&type=dsa&questionId=338
>
> Language: Java

###Question 3

###Range Sum Query

Given **N** array elements and **Q** queries on an array. For each query, calculate the **sum of all elements in the given range**.

## Input Format

- First line contains an integer `N`, the size of the array.
- Second line contains `N` space-separated integers.
- Third line contains an integer `Q`, the number of queries.
- Each of the next `Q` lines contains two integers `L` and `R`.

## Output Format

For each query, print the sum of elements in the range `[L, R]` on a separate line.

Example 1:

Input:

```
10
2 5 1 3 4 1 7 -8 2 0
5
3 8
2 4
0 3
5 9
6 6
```

Output:

```
9
8
11
2
7
```

Constraints:

```
2 ≤ N ≤ 10^5
1 ≤ Q ≤ 10^5
-10^9 ≤ A[i] ≤ 10^9
0 ≤ L ≤ R < N
```
