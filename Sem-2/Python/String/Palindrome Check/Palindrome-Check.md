# Python String: Check Palindrome

**Success Rate:** 44.83%

Write a Python program to check whether a given string is a palindrome or not. 

A **palindrome** is a string that reads the same forward and backward. 

---

## Input Format
```
A single line containing a string s
```

## Output Format
```
Print True if the string is a palindrome
Otherwise, print False
```

---

## Sample Test Case

**Input:**
```
madam
```

**Expected Output:**
```
True
```

---

## Solution Code

```python
s = input().strip()

# Check if string reads the same forwards and backwards
if s == s[::-1]:
    print(True)
else:
    print(False)
```

### How it works:
- `s[::-1]` reverses the string using slicing
- Compares original string with its reverse
- Prints `True` if they match, `False` otherwise