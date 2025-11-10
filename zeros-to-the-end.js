const moveAllZerosToTheEnd = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            numbers.push(numbers[i])
            numbers.splice(i,1)
        }
    }
    return numbers
}

const zeros = moveAllZerosToTheEnd([0,1,0,3,12])

module.exports = { moveAllZerosToTheEnd };