from collections import Counter

S = input().strip()

# Count frequency of each character
char_count = Counter(S)

# Get the frequency of the first character
first_freq = char_count[S[0]]

# Check if all characters have the same frequency
is_balanced = all(count == first_freq for count in char_count.values())

print(is_balanced)