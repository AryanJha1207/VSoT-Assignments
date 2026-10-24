a = int(input())
sp = a-1
st = 1

for i in range(a):
    for i in range(sp):
        print(" ",end="")
    for i in range(st):
        print("*",end="")
    sp-=1
    st+=1
    print()

