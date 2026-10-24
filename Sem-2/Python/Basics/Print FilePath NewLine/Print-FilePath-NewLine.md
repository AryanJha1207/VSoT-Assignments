# Python_Print_File_Path_With_NewLine

**Success rate: 79.59%**

**Problem:** Print the file path where `\n` should appear as text, not as a new line.

👉 *This question is designed to be solved using a raw string (r).*

---

## Output Format
Print exactly:
```
C:\newfolder\notes\python
```

## Sample Test Cases

| Input | Expected Output |
|-------|-----------------|
| (No input) | `C:\newfolder\notes\python` |

---

### Example Solution:
```python
print(r"C:\newfolder\notes\python")
```