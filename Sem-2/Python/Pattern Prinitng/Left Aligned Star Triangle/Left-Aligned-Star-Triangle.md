# 🔺 Python Pattern: Left-Aligned (Right-Shifted) Triangle

## 📘 Problem Description

Given an integer `N`, print a **right-angled triangle of `*`**, aligned towards the **right side** (also known as a left-angled or right-shifted triangle).

---

## ✨ Pattern Rules

* The triangle has `N` rows

* Each row contains:

  * Leading spaces for right alignment
  * Stars (`*`) increasing row by row

* Row `i` contains:

  * `(N - i)` spaces
  * `i` stars

---

## 📥 Input Format

* A single integer `n`
* Constraint: `1 ≤ n ≤ 100`

---

## 📤 Output Format

* Print the **right-aligned triangle pattern**

---

## 🧪 Sample Test Case

### Input

```id="m2k9xp"
5
```

### Output

```id="z4q7vn"
    *
   **
  ***
 ****
*****
```

---

## 💡 Explanation

For `n = 5`:

* Row 1 → 4 spaces + 1 star
* Row 2 → 3 spaces + 2 stars
* Row 3 → 2 spaces + 3 stars
* Row 4 → 1 space + 4 stars
* Row 5 → 0 spaces + 5 stars

This creates a **right-aligned triangle shape**.

---
