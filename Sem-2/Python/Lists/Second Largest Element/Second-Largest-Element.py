a = int(input())
arr = list(map(int, input().split()))

first = second = -float('inf')

for num in arr:
    if num > first:
        second = first
        first = num
    elif num > second and num != first:
        second = num

if second == -float('inf'):
    print(-1)
else:
    print(second)