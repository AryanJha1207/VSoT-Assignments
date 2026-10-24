n = int(input())
sp = n-1
st = 1

for i in range(n):
    val = 1
    for i in range(sp):
        print(" ", end="")
    for i in range(st):
        print(val, end=" ")
        val+=1
    st+=2
    sp-=1
    print()