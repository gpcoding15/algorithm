import unittest
from reverse_numbers import reverseNumbers

class TestReverseNumbers(unittest.TestCase):

    def sum(self):
        numbers = [1,2,3]

        result = sum(numbers)
        expectedResult = 6

        self.assertEqual(result, expectedResult)
        

if __name__ == '__main__':
    unittest.main()