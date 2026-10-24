# 🔺 Python Pattern: Binary Number Triangle

## 📘 Problem Description

Print a **right-angled triangle pattern** using **binary digits (0 and 1)**.

The pattern alternates between `1` and `0` in each row, starting with `1` in the first row.

---

## ✨ Pattern Rules

* The triangle has `n` rows
* Each row `i` contains `i` elements
* The values alternate between `1` and `0`
* The starting value of each row alternates:

  * Odd rows start with `1`
  * Even rows start with `0`

---

## 📥 Input Format

* A single integer `n`
* Constraint: `1 ≤ n ≤ 20`

---

## 📤 Output Format

* Print the **binary triangle pattern**

---

## 🧪 Sample Test Case

### Input

```id="p7m3kx"
5
```

### Output

```id="z9q2vn"
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1
```

---

## 💡 Explanation

For `n = 5`:

* Row 1 → starts with `1`
* Row 2 → starts with `0`
* Row 3 → starts with `1`
* Row 4 → starts with `0`
* Row 5 → starts with `1`

Each row alternates values to form the binary pattern.

---
