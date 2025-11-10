def findSmallestMissingNumber(numbers):
  sortedNumbers = sorted(numbers)
  print(sortedNumbers)
  missingSmallestNumber = 0
  missingNumbers = []

  for i in range(len(sortedNumbers)-1):
    if sortedNumbers[i] + 1 != sortedNumbers[i+1]:
      rest = sortedNumbers[i + 1] - sortedNumbers[i]
      missingSmallestNumber = sortedNumbers[i + 1] - rest + 1
      missingNumbers.append(missingSmallestNumber)
      
  if len(missingNumbers) > 1:
    sorted(missingNumbers)
    missingSmallestNumber = missingNumbers[0]
    return missingSmallestNumber
  else:
    return missingNumbers


smallestMissingNumber = findSmallestMissingNumber([3,4,5,6,1,2,8,14])
print(smallestMissingNumber)