def reverseNumbers(ar):
  reversedNumbers = []

  for i in  range(len(ar)-1,-1,-1):
    reversedNumbers.append(ar[i])
  return reversedNumbers

reversedNumbers = reverseNumbers([1,2,3])
print(reversed)  # Output: [3, 2, 1]