# 🔄 Python List: Rotation

## 📘 Problem Description

You are given a list of size `N` and an integer `K`.

Your task is to **rotate the list to the right by `K` steps**, where `K` is a non-negative integer.

---

## 📥 Input Format

* First line: Integer `N` → size of the list
* Second line: `N` space-separated integers → elements of the list
* Third line: Integer `K` → number of right rotations

---

## 📤 Output Format

* Print the list after performing the rotation
* Output should be **space-separated**

---

## 🧪 Sample Test Case

### Input

```id="k9x2mp"
7
3 -2 1 4 6 9 8
3
```

### Output

```id="z7q4vn"
6 9 8 3 -2 1 4
```

---

## 💡 Explanation

Original list:

* 3, -2, 1, 4, 6, 9, 8

Rotate right by `K = 3`:

* Last 3 elements → 6, 9, 8
* Remaining elements → 3, -2, 1, 4

Final list:

* 6, 9, 8, 3, -2, 1, 4

---
