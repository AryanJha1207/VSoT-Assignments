# ⏰ Python Vedamian’s Morning Alarm Decision

## 📘 Problem Description

Every **Vedamian** wants to reach college on time, but mornings can be unpredictable.

To handle this, a simple program is created that checks how late the student is after waking up and gives a clear instruction.

The program evaluates the delay step-by-step and decides whether the Vedamian can:

* 😌 Relax
* 🏃 Hurry
* 🚨 Panic

---

## 📥 Input

You are given a single integer:

* `T` → Minutes late after **8:00 AM**

  * `0` means exactly 8:00 AM

---

## 📏 Decision Rules

* If `0 ≤ T ≤ 30` → **RELAX**
* Else if `31 ≤ T ≤ 60` → **HURRY**
* Else → **PANIC**

---

## 📤 Output

Print the appropriate instruction based on the delay.

---

## 🧪 Sample Test Case

### Input

```id="a2k9mv"
15
```

### Output

```id="q7x1zn"
RELAX
```

---
