import unittest
from find_smallest_number import findSmallestMissingNumber

class TestSmallesNumber(unittest.TestCase):

    def test_returns_the_smallest_number(self):
        numbers = [3,4,5,6,1,2,8,14]

        result = findSmallestMissingNumber(numbers)
        expectedResult = 7

        self.assertEqual(result, expectedResult)

if __name__ == '__main__':
    unittest.main()