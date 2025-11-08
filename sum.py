# sum all the elements

def sum(numbers):
  addition = 0
  
  for i in range(len(numbers)):
    addition = numbers[i] + addition
  return addition

addition = sum([1,2,3])
print(addition)