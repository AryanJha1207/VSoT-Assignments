a = int(input());
sum = 0;
while a>0:
    sum+=a%10;
    a//=10;
print(sum);


# Time Complexity: O(d)  (where d = number of digits in the number)
# Space Complexity: O(1)