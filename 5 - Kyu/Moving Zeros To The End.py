# 

# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# Sample = moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

# 

# link = https://www.codewars.com/kata/52597aa56021e91c93000cb0

def move_zeros(array):
    return [array.append(array.pop(array.index(x))) for x in array if x == 0] and array or array
