import unittest
from pair_numbers import filterPairNumbers

class TestPairNumbers(unittest.TestCase):

    def test_filter_pair_numbers_correctly(self):
        numbers = [1,2,3,4,5]

        result = filterPairNumbers(numbers)
        expectedResult = [2,4]

        self.assertEqual(result, expectedResult)

if __name__ == '__main__':
    unittest.main()