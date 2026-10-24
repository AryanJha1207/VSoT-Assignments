def check(elem,arr):
    count = 0
    for i in range(len(a)):
        if a[i]==elem:
            count+=1
    return count
a = input()
arr = []
count1 = 0
arr.append(a[0])
for i in range(1,len(a)):
    if a[i] in arr:
        continue
    else:
        arr.append(a[i])
temp = check(arr[0],arr)
for i in range(1,len(arr)):
    if check(arr[i],arr)!=temp:
        print(False)
        break
    else:
        count1+=1
        continue
if count1==len(arr)-1:
    print(True)
    

    
#The Occurence of each letter must be same