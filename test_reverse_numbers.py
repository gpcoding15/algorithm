import unittest
from reverse_numbers import reverseNumbers

class TestReverseNumbers(unittest.TestCase):

    def test_reverse_numbers(self):
        ar = [1,2,3,4,5]

        result = reverseNumbers(ar)
        expectedResult = [5,4,3,2,1]

        self.assertEqual(result, expectedResult)

if __name__ == '__main__':
    unittest.main()