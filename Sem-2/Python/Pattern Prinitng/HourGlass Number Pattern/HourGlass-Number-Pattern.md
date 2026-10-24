# 🔷 Python Pattern: Hourglass Number Pattern

## 📘 Problem Description

Create a **diamond (hourglass) pattern using numbers**, where:

* Numbers **decrease towards the center**
* Numbers **increase towards the edges**
* The structure follows a **symmetric pattern**

---

## 📥 Input Format

* A single integer `N`
* Constraint: `3 ≤ N ≤ 9`

---

## 📤 Output Format

* Print the **number diamond (hourglass) pattern**

---

## 🧪 Sample Test Case

### Input

```id="p4x8mn"
5
```

### Output

```id="z2k7qy"
123454321
 1234321
  12321
   121
    1
   121
  12321
 1234321
123454321
```

---

## 💡 Explanation

For `N = 5`:

* The first row increases from `1` to `N`, then decreases back to `1`
* Each next row:

  * Adds **one leading space**
  * Reduces the range of numbers
* The pattern continues until the center (`1`)
* Then it mirrors back to form a **symmetric diamond shape**

---
