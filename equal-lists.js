const verifyIfListsAreEquals = (list1, list2) => {
  const lengthList1 = list1.length;
  const lengthList2 = list2.length;

  let result = false;

  if (lengthList1 === lengthList2) {
    for (let i = 0; i < lengthList1; i++) {
      if (list1[i] !== list2[i]) {
        result = false;
        break;
      } else {
         result = true
      }
    }
   } else {
       return false
   }

  return result;
};

const result = verifyIfListsAreEquals([1, 2, 3], [1, 2, 3]);

module.exports = { verifyIfListsAreEquals };