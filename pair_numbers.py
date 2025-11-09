def filterPairNumbers(numbers):
  pairNumbers = []
  for i in range(len(numbers)):
    if numbers[i] % 2 == 0:
      pairNumbers.append(numbers[i])
  return pairNumbers