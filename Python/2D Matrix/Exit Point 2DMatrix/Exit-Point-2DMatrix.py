# Read dimensions
n, m = map(int, input().split())
arr = []

# Read matrix
for _ in range(n):
    arr.append(list(map(int, input().split())))

# Initial position and direction (0: Right, 1: Down, 2: Left, 3: Up)
i = 0
j = 0
dir = 0  # Start moving right

while True:
    # Change direction if current cell is 1
    if arr[i][j] == 1:
        arr[i][j] = 0  # Mark as visited
        dir = (dir + 1) % 4  # Turn right

    # Move based on direction
    if dir == 0:   # Right
        j += 1
    elif dir == 1: # Down
        i += 1
    elif dir == 2: # Left
        j -= 1
    elif dir == 3: # Up
        i -= 1

    # Check if out of bounds (exit found)
    if i < 0:
        print(i + 1, j)
        break
    elif i >= n:
        print(i - 1, j)
        break
    elif j < 0:
        print(i, j + 1)
        break
    elif j >= m:
        print(i, j - 1)
        break   