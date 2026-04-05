# 🐍 **The Balanced Kingdom**


## 📊 **Success Rate:** 40.77%

### 🎯 **Problem Statement**
In the Kingdom of Alphoria, every festival decoration must follow a strict rule of balance. The royal decorators use colorful flags represented by lowercase English letters (a to z). Each letter represents a different type of decorative flag.

The King has declared that a decoration is considered balanced only if each type of flag used appears the same number of times.

You are given a string `S` representing the arrangement of flags prepared by the decorators. Your task is to determine whether the decoration follows the King’s balance rule.

Return `True` if the decoration is balanced, otherwise return `False`.

---

### ⌨️ **Input Format**
A single line containing a string `S` representing the sequence of decorative flags.

---

### 📤 **Output Format**
- Print `True` if the decoration is balanced.
- Otherwise, print `False`.

---

### ⚠️ **Constraints**
- 1 ≤ |S| ≤ 10⁵
- String contains only lowercase English letters.

---

### 🧪 **Sample Test Cases**
| Input | Expected Output |
| :--- | :--- |
| `abacbc` | `True` |
| `abcabc` | `True` |
| `aabbc` | `False` |

---

### 💡 **Solution**
```python
from collections import Counter

S = input().strip()

# Count frequency of each character
char_count = Counter(S)

# Get the frequency of the first character
first_freq = char_count[S[0]]

# Check if all characters have the same frequency
is_balanced = all(count == first_freq for count in char_count.values())

print(is_balanced)
```