a = input()
arr = [0]*26

for i in range(len(a)):
    temp = ord(a[i])-97
    arr[temp]+=1

count = arr[ord(a[0])-97]

for i in range(1,len(arr)):
    if arr[i]!=count and arr[i]!=0:
        print(False)

print(True)
    
    