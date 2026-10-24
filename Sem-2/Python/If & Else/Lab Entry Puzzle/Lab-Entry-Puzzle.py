y = int(input());
l = int(input());
p = int(input());

if y==4:
    print("ALLOW")
elif y==3:
    if l==1 or p==1:
        print("ALLOW")
    else:
        print("DENY")
elif y==1 or y==2:
    if p==1:
        print("ALLOW")
    else:
        print("DENY")
else:
    print("DENY")


# Time Complexity: O(1)
# Space Complexity: O(1)