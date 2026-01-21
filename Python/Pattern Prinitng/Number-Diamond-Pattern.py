n = int(input());
c = 1;
nst = 1;
nsp = n//2;
num = 1;
while c<=n:
    val = num
    for i in range(1,nsp+1):
        print("  ",end="");
    for i in range(1,nst+1):
        print(val,end=" ");
        if i<=nst//2:
            val+=1;
        else:
            val-=1;
    if (c<=n//2):
        nst+=2;
        nsp-=1;
        num+=1;
    else:
        nst-=2;
        nsp+=1;
        num-=1;
    print();
    c+=1;

    
    
