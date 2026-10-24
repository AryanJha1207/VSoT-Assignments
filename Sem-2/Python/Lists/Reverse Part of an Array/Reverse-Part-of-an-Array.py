a = int(input())
arr = list(map(int,input().split()))
sp, ep = map(int,input().split())

while(sp<ep):
    arr[sp], arr[ep] = arr[ep], arr[sp]
    sp+=1;
    ep-=1;
for i in arr:
    print(i);