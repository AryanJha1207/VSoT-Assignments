def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

n = int(input())
arr = list(map(int, input().split()))
k = int(input())

k = k % n

# Step 1: reverse whole array
reverse(arr, 0, n-1)

# Step 2: reverse first k elements
reverse(arr, 0, k-1)

# Step 3: reverse remaining elements
reverse(arr, k, n-1)

print(*arr)