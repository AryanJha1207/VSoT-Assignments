n = int(input());
c = 1;
nst = (n*2)-1;
nsp = 0;
num = 1;
while c<=(n*2)-1:
    val = num
    for i in range(1,nsp+1):
        print(" ",end="");
    for i in range(1,nst+1):
        print(val,end="");
        if i<=(nst//2):
            val+=1;
        else:
            val-=1;
    if (c<n):
        nst-=2;
        nsp+=1;
        num=1;
    else:
        nst+=2;
        nsp-=1;
        num=1;
    print();
    c+=1;

    
    
