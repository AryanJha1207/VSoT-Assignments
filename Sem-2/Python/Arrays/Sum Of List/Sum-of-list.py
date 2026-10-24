a = int(input());
arr = [];
sum = 0;
for i in range(a):
    arr.insert(i,int(input()));
    sum+=arr[i];
print(sum);
