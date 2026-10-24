# ⭐ Python Pattern: Diamond Pattern of Stars

## 📘 Problem Description

Given an **odd positive integer `n`**, print a **diamond pattern of stars** with exactly `n` rows.

The pattern follows a symmetric structure where:

* The number of stars increases until the middle row
* Then decreases symmetrically

---

## ✨ Pattern Rules

* Each row contains:

  * Leading spaces (**2 spaces per level**)
  * Stars printed as `"* "` (each followed by a space)

* Number of stars:

  * Starts from `1` in the first row
  * Increases by `2` each row
  * Reaches `n` stars at the middle row
  * Then decreases by `2` symmetrically

---

## 📥 Input

* A single odd integer `n`
* Constraint: `1 ≤ n ≤ 21`

---

## 📤 Output

* Print the **diamond pattern of stars**, row by row

---

## 🧪 Sample Test Case

### Input

```id="p2k8mv"
5
```

### Output

```id="z7x4qn"
    * 
  * * * 
* * * * * 
  * * * 
    * 
```

---

## 💡 Explanation

For `n = 5`:

* Row structure:

  * 1 star → 3 stars → 5 stars → 3 stars → 1 star
* Leading spaces decrease until the middle, then increase again
* The pattern forms a **perfect diamond shape**

---
