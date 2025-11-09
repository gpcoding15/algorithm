const findTheSecondBiggestNumber = numbers => {
  let secondBiggestNumber = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] < numbers[i + 1]) && (numbers[i] > numbers[i - 1])) {
      secondBiggestNumber = numbers[i];
    }
  }
  return secondBiggestNumber;
};

const secondBiggest = findTheSecondBiggestNumber([2,3,4,10,25])
console.log(secondBiggest)

module.exports = { findTheSecondBiggestNumber };