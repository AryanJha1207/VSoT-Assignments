# 🔺 Python Pattern: Number Pyramid

## 📘 Problem Description

Print a **pyramid pattern using numbers**.

The pyramid should have `n` rows, where:

* Each row is **centered**
* Each row contains **consecutive numbers starting from 1**

---

## ✨ Pattern Rules

* Row `i` contains:

  * Numbers from `1` to `(2 × i - 1)`
* Each row is **center-aligned** using spaces
* The number of elements increases as we move down

---

## 📥 Input Format

* A single integer `n`
* Constraint: `1 ≤ n ≤ 9`

---

## 📤 Output Format

* Print the **number pyramid pattern**

---

## 🧪 Sample Test Case

### Input

```id="k8m2xp"
4
```

### Output

```id="z3q7vn"
      1 
    1 2 3 
  1 2 3 4 5 
1 2 3 4 5 6 7 
```

---

## 💡 Explanation

For `n = 4`:

* Row 1 → `1`

* Row 2 → `1 2 3`

* Row 3 → `1 2 3 4 5`

* Row 4 → `1 2 3 4 5 6 7`

* Each row:

  * Adds more numbers
  * Reduces leading spaces to maintain pyramid shape

---
