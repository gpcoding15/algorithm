const findMinMax = (numbers) => {
   let maxNumber = numbers[0];
   let minNumber = numbers[0];

   numbers.forEach(number => {
        if (number < maxNumber) {
            minNumber = number;
            
        } else {
           maxNumber = number;
           
        }
   });
  return {maxNumber, minNumber}
}

console.log(findMinMax([10,8,3]))