# 🔄 Python List: Reverse Part of an Array

## 📘 Problem Description

You are given an array of size `N` and two indices `idx1` and `idx2`.

Your task is to:

* Reverse the elements of the array **between `idx1` and `idx2` (inclusive)**
* Then print the updated array, with **each element on a new line**

---

## 📏 Constraints

* `1 ≤ N ≤ 100`

---

## 📥 Input

* First line: Integer `N` → size of the array
* Second line: `N` integers → elements of the array
* Third line: Two integers `idx1` and `idx2` → indices for reversal

---

## 📤 Output

* Print the updated array after reversal
* Each element should be printed **on a separate line**

---

## 🧪 Sample Test Case

### Input

```id="k3x9mp"
10
-3 4 2 8 3 9 6 2 8 10
3 7
```

### Output

```id="z7q2vn"
-3
4
2
2
6
9
3
8
8
10
```

---

## 💡 Explanation

Original array:

* -3, 4, 2, 8, 3, 9, 6, 2, 8, 10

Indices:

* `idx1 = 3`, `idx2 = 7`

Subarray to reverse:

* 8, 3, 9, 6, 2

Reversed:

* 2, 6, 9, 3, 8

Updated array:

* -3, 4, 2, 2, 6, 9, 3, 8, 8, 10

---
