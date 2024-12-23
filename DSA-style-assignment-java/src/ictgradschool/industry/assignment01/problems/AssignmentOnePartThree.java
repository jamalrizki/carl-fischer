package ictgradschool.industry.assignment01.problems;



/**
 * Please run TestAssignmentOnePartThree to check your answers.
 * There are 10 exercises in this class. You can do them in any order you like.
 * Each exercise is worth the same amount towards your overall Assignment 1 mark.
 * However, you will only get full marks for each exercise on confirmation by the markers that you have in fact
 * correctly completed the exercise. It is not enough that you have passed all of the tests.
 * <p>
 * You may modify the code in between the comments: // Answer here // . Do not modify other parts of the code.
 * <p>
 * Write your name and UPI here: name and UPI. jamal rizki - jriz084
 */
public class AssignmentOnePartThree {
    /**
     * Q1. Complete the method zip that takes two non-negative integer numbers, and returns the decimal zip (which is
     * also an integer). The decimal zip, C, of two non-negative integers A and B is created as follows:
     * <p>
     * 1. the first digit of C is the first digit of A;
     * 2. the second digit of C is the first digit of B;
     * 3. the third digit of C is the second digit of A;
     * 4. the fourth digit of C is the second digit of B;
     * 5. and so forth
     * <p>
     * If one of the integers A and B runs out of digits, the remaining digits of the other integer are appended to C.
     * <p>
     * For example, zip(12, 56) will return 1526
     * zip(56, 12) will return 5162
     * zip(12345, 678) will return 16273845
     * zip(123, 67890) will return 16273890
     * <p>
     * The method returns 0 if one of the given integer is also 0.
     */
    public int zip(int a, int b) {
        String a1 = Integer.toString(a);
        String a2 = Integer.toString(b);
        String longest;
        String zipCode = "";

        if(a1.length() >= a2.length()) {
            longest = a1;
        } else {
            longest = a2;
        }
        for (int i = 0; i < longest.length(); i++) {
            if(i < a1.length() )  {
                zipCode += a1.charAt(i);
            }
            if(i < a2.length()) {
                zipCode += a2.charAt(i);
            }

        }
//       System.out.println(zipCode);
        return Integer.parseInt(zipCode);
    }

    /**
     * Q2. Complete the method sumArray that returns the sum of values in a given int array.
     * For example, sumArray(new int[]{1, 2 ,3}) should return 6 as the sum.
     */
    public int sumArray(int[] values) {
        int sum = 0;
        for (int i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return sum;
    }

    /**
     * Q3.Complete the method getBiggestValue that returns the maximum value from a given int array.
     * For example, getBiggestValue(new int[]{0, 12 ,101}) should return 101 as the biggest value.
     */
    public int getBiggestValue(int[] values) {
        int largest = values[0];

        for (int value : values) {
            if (value > largest) {
                largest = value;
            }
        }
        return largest;
    }

    /**
     * Q4. Complete the method findOccurrenceOfCharacters that returns an array of integers indicating all the indices
     * of the target character from the search string. Note that the result is case-insensitive.
     * <p>
     * For example, findOccurrenceOfCharacters("Hello World", 'o') will return {4, 7}, and
     * findOccurrenceOfCharacters("Goodbye Earth", 'z') will return null.
     */
    public int[] findOccurrenceOfCharacters(String searchString, char targetChar) {
        searchString = searchString.toLowerCase();
        targetChar = Character.toLowerCase(targetChar);
        int count = 0;
        for (int i = 0; i < searchString.length(); i++) {
            if (searchString.charAt(i) == targetChar) {
                count++;
            }
        }
        if (count == 0) {
//            System.out.println("here is the issue");
            return null;
        }
        int[] newArr = new int[count];
        int countAgain = 0;
        for (int i = 0; i < searchString.length(); i++) {
            if (searchString.charAt(i) == targetChar) {
                newArr[countAgain] = i;
                countAgain++;
            }
        }
        return newArr;
    }

    /**
     * Q5. Complete the method computeFibonacci that returns an int array of Fibonacci sequence where the size of which
     * is controlled by a given positive integer number.
     * <p>
     * A Fibonacci sequence is a series of numbers where the next number is the sum of the previous numbers. For example,
     * if the method is given the number 6, it will return an int array with size 6 consisting the following numbers:
     * {1, 1, 2, 3, 5, 8}
     * <p>
     * If the size is 0, the method should return null.
     */
    public int[] computeFibonacci(int size) {
        int[] fibArray = new int[size];
        if (size == 0) {
            return null;
        }
        if (size == 1) {
            fibArray[0] = 1;
        }
        if (size == 2) {
            fibArray[0] = 1;
            fibArray[1] = 1;
        } else if (size > 2) {
            fibArray[0] = 1;
            fibArray[1] = 1;
            for (int i = 2; i < size; i++) {
                fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
            }
        }
        return fibArray;
    }

    /**
     * Q6. Complete the method findMostFrequentInteger that returns the most frequently occurring number in an integer
     * array. For example, given an int array: {1, 2, 3, 4, 5, 1}, the method will return 1 as the most frequently
     * occurring number.
     * <p>
     * If there are more than one most frequently occurring number, then return the smallest number from the most
     * frequently occurring numbers. For example, given an int array {2, 3, 3, 2, 4, 5, 4}, the method should
     * return 2 as the most frequently occurring number.
     * <p>
     * You may assume that there is always at least one value in the given array.
     */
    public int findMostFrequentInteger(int[] values) {
        int currentHighest = values[0]; //2
        int lastcount = 0; //2
        for(int i = 0; i < values.length; i++) {
            int count = 0; //1, 0, 1
            for (int j = 0; j < values.length; j++) {
                if(values[i] == values[j]) {
                    count++;
                }
            }
            if(count > lastcount) { //1 > 0,
                currentHighest = values[i]; // 2
                lastcount = count; //
            }
        }
        //{2, 3, 3, 2, 4, 5, 4}
        return currentHighest;
    }


    /**
     * Q7. Complete the method getMedianValue that returns the median integer value from a given int array.
     * The median is the middle number in the set (after the numbers have been rearranged from smallest to largest).
     * If the number of integer values in the array is even, then the median is the average of the middle two numbers.
     * You may assume that the int array always contains one or more values.
     * <p>
     * For example, getMedianValue(new int[]{30,11,20}) returns 20 as the median value;
     * getMedianValue(new int[]{100,50,52,30}) returns 51 (average of 50 and 52) as the median value.
     * {100,50,52,30}
     * 50,52,30,100
     * 50,30,52,100
     * 30,50,52,100
     */
    public int getMedianValue(int[] values) {
//        int[] sorted = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            for (int j = i + 1; j < values.length; j++) { // todo: refractor so that loop breaks out if j is already sorted
                if(values[j] < values[i]) {  // probably not the greatest time and space complexity
                    int temp = values[j]; // temp 50
                    values[j] = values[i]; // j = 100
                    values[i] = temp; // i = 50

                }
            }
        }
        if(values.length % 2 == 0) {
            int avg = values.length / 2;
            int avg2 = values.length / 2 -1;
            return (values[avg] + values[avg2]) / 2;
        } else {
            int median = values.length / 2;
            return values[median];
        }
    }

    /**
     * Q8. Complete the method findBestMatch that given two int arrays of the same size, the method returns an array of
     * two values (the first value from array1 and the second value from array2) that would have the smallest sum
     * in comparison with other pairs from the two arrays.
     * <p>
     * For example, given two integer arrays: {1, -2, 3, 1, -4} and {-10, -3, 2, -1, 4},
     * the method returns {-4, -10} as the pair that has the smallest sum.
     */
    public int[] findBestMatch(int[] array1, int[] array2) {
        int[] pair = new int[2];
        int sum = array1[0] + array2[0] ;
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                int temp = array1[i] + array2[j];
                if(array1[i] + array2[j] < sum) {
                    sum = temp;
                    pair[0] = array1[i];
                    pair[1] = array2[j];
                }
            }
        }
       return pair;
    }

    /**
     * Q9. Complete the method range that returns the difference between the maximum and minimum values
     * in an int array. For example, given an int array {1, 2, 3, 1, 4}, the method will return 3 as the range.
     * If the integer array only contains one value, then the method should return the value itself.
     * <p>
     * You may assume that there is always at least one value in the given array.
     */
    public int range(int[] values) {
        if(values.length == 1) {
            return values[0];
        }
        int min = values[0];
        int max = values[0];
        for (int i = 0; i < values.length; i++) {
            if(values[i] < min) {
                min = values[i];
            }
            if(values[i] > max) {
                max = values[i];
            }
        }
        return max - min;
    }

    /**
     * Q10. Complete the method findUniqueNumbers that returns an int array of unique numbers.
     * For example, given an int array {1, 2, 3, 2, 3}, the method will return an int array {1}.
     * <p>
     * Notice that the order of the values in the return array follow the order of the
     * first appearance of the number from the original array. If there are no unique numbers in the given array, then
     * the method will return an array of length 0.
     * <p>
     * You may assume that there is always at least one value in the given array.
     */
    public int[] findUniqueNumbers(int[] values) {
        int[] numbers = new int[values.length];
        int arrayLength = 0;
        for (int i = 0; i < values.length; i++) {
            int count = 0;
            for (int j = 0; j < values.length; j++) {
                if(values[i] == values[j]) {
                    count++;
                }
            }
            if(count == 1) {
                numbers[arrayLength] = values[i];
                arrayLength++;
            }
        }
        int[] correctLength = new int[arrayLength];
        for (int i = 0; i < arrayLength; i++) {
            correctLength[i] = numbers[i];
        }
        return correctLength;
    }
}
