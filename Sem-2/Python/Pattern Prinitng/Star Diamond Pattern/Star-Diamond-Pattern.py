n = int(input());
c = 1;
nst = 1;
nsp = n//2;
while c<=n:
    for i in range(1,nsp+1):
        print(" ",end="");
    for i in range(1,nst+1):
        print("*",end="");
    if (c<=n//2):
        nst+=2;
        nsp-=1;
    else:
        nst-=2;
        nsp+=1;
    print();
    c+=1;

    
    