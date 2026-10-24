# Python List - Sum of List

**Success rate:** 43.88%

---

## Problem Description
Take an Array of N size as Input and Print the sum of all the elements

---

## Problem Constraint
```
1 <= N <= 100
```

---

## Input Format
```
The first line contains an Integer N representing the size of an Array.
The second line contains N integers representing the elements of the Array.
```

---

## Output Format
```
Print all the sum of all the elements of the array.
```

---

## Sample Test Case

**Input:**
```
5
10
20
30
40
50
```

**Expected Output:**
```
150
```

---

*Note: Each array element appears on a separate line in the input.*

# Code Explanation

```bash
a = int(input());
```

Reads the first number (array size). `input()` gets text, `int()` makes it a number. Stores in `a`.

---

```bash
arr = [];
```

Creates an empty list called `arr` to store numbers.

---

```bash
sum = 0;
```

Sets up `sum` variable starting at 0 to add everything later.

---

```bash
for i in range(a):
```

Starts a loop that repeats `a` times. `i` goes 0, 1, 2... until a-1.

---

```bash
    arr.insert(i,int(input()));
```

Inside loop: reads a number, puts it in the list at position `i`.

---

```bash
    sum+=arr[i];
```

Takes the number just added to list and adds it to `sum`.

---

```bash
print(sum);
```

After loop finishes, shows the final total.