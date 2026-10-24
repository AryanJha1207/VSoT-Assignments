# 🔷 Python Pattern: Number Diamond Pattern

## 📘 Problem Description

You are given an **odd integer `N`**.
Your task is to print a **number diamond pattern** with symmetric structure.

---

## ✨ Pattern Rules

* The **middle row** contains numbers:

  * Increasing from `1` to `N`
  * Then decreasing back to `1`

* The **upper half**:

  * Gradually increases the range of numbers
  * Maintains proper spacing for alignment

* The **lower half**:

  * Mirrors the upper half symmetrically

---

## 📥 Input Format

* A single integer `N`
* Constraint:

  * `N` is **odd**
  * `N ≥ 3`

---

## 📤 Output Format

* Print the **number diamond pattern**

---

## 🧪 Sample Test Case

### Input

```id="x7m2kp"
5
```

### Output

```id="q4z9vn"
    1 
  2 3 2 
3 4 5 4 3 
  2 3 2 
    1 
```

---

## 💡 Explanation

For `N = 5`:

* The **middle row** is:

  ```
  3 4 5 4 3
  ```

* Rows above:

  * Increase numbers step-by-step
  * Add spaces for alignment

* Rows below:

  * Mirror the upper rows to form a **diamond shape**

---
