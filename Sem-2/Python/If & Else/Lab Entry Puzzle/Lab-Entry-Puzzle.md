# 🧪 Python Innovation Lab Entry Puzzle

## 📘 Problem Description

At **Vedam School of Technology**, the **Innovation Lab** is one of the most exciting places on campus. It is used by students working on:

* 🚀 Hackathons
* 💡 Startups
* 🔬 Research ideas
* 🎓 Final-year projects

Although the lab usually follows a strict schedule, faculty members may grant **special permission** to students with exceptional interest or urgent project needs.

---

## ⚙️ Scenario

One evening, the **digital entry system malfunctioned**.
Instead of verifying student names, it now checks only three values from the student’s ID:

* Year of study
* Whether it is a lab day
* Whether special permission is granted

Your task is to determine whether the system should **ALLOW** or **DENY** entry.

---

## 📥 Input

You are given three integers:

* `Y` → Year of B.Tech

  * `1` = First Year
  * `2` = Second Year
  * `3` = Third Year
  * `4` = Final Year

* `L` → Lab Day

  * `1` = Scheduled Lab Day
  * `0` = No Lab Scheduled

* `P` → Special Permission

  * `1` = Permission Granted
  * `0` = No Permission

---

## 📏 Entry Rules

### 🎓 Final Year Students (`Y = 4`)

* ✅ **Always ALLOW**
* Reason: They frequently work late on final-year projects.

---

### 🧑‍💻 Third Year Students (`Y = 3`)

* ✅ **ALLOW** if:

  * `L = 1` (Lab Day)
    **OR**
  * `P = 1` (Special Permission)

* ❌ Otherwise, **DENY**

---

### 👨‍🎓 First & Second Year Students (`Y = 1 or 2`)

* ❌ Normally **DENY**
* ✅ **ALLOW** only if:

  * `P = 1` (Special Permission)

---

### ⚠️ Invalid Year Value

* ❌ **DENY**

---

## 📤 Output

Print:

* `"ALLOW"` → If the student is permitted to enter
* `"DENY"` → Otherwise

---

## 🧪 Sample Test Case

### Input

```id="5a9wq1"
2
0
1
```

### Output

```id="x1kz8p"
ALLOW
```

---
