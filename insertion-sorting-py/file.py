array = [5,4,6,9,1,10,3]

for i in range(1, len(array)):
    temp = array[i]
    j = i - 1


    while j >= 0 and array[j] > temp:
        array[j + 1] = array[j]
        j -= 1

    array[j + 1] = temp

print(array)