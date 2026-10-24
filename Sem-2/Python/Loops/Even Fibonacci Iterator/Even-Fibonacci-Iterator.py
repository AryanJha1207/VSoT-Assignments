a = int(input());

sum1 = 0;
sum2 = 1;
print(sum1, end=" ");

while sum1<=a:
    sum1 = sum1+sum2;
    sum2 = sum1+sum2;
    if sum1%2==0:
        print(sum1, end=" ");
    if sum2%2==0:
        print(sum2, end=" ");
    
