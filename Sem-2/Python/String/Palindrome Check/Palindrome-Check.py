b = input()
a = len(b)
sp = 0
ep = a-1
c = list(b)
def reverse(c,sp,ep):
    while sp<ep:
        temp = c[sp]
        c[sp] = c[ep]
        c[ep] = temp
        sp+=1
        ep-=1
reverse(c,sp,ep)
ans = "".join(c)
if ans==b:
    print(True)
else:
    print(False)