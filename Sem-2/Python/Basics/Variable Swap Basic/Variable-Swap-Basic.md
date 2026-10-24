# 🐍 **Python_Variable_Swap_Basic**

## 📊 **Success Rate:** 48.75%

### 🎯 **Problem Statement**
Take two numbers as input from the user, store them in variables, swap their values using a third variable, and print the swapped values.

---

### ⚠️ **Problem Constraints**
- Numbers are integers
- No advanced concepts

---

### ⌨️ **Input Format**
Two integers:
```
a
b
```

---

### 📤 **Output Format**
Print the swapped values in the following format:
```
b = 10
a = 20
```

---

### 🧪 **Sample Test Cases**
| Input | Expected Output |
| :--- | :--- |
| `10`<br>`20` | `b = 10`<br>`a = 20` |

---

### 💡 **Solution**
```python
a = int(input())
b = int(input())

# Swap using third variable
temp = a
a = b
b = temp

print(f"b = {b}")
print(f"a = {a}")
```