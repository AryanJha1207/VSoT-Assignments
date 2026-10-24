a = int(input());
sum = 0;
i = 1;

while i<=a:
    if (i%3==0 and i%10!=9):
        sum+=i;
    i+=1

print(sum);
