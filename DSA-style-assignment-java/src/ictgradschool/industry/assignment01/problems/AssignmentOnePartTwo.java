package ictgradschool.industry.assignment01.problems;

/**
 * Please run TestAssignmentOnePartTwo to check your answers.
 * There are 10 exercises in this class. You can do them in any order you like.
 * Each exercise is worth the same amount towards your overall Assignment 1 mark.
 * However, you will only get full marks for each exercise on confirmation by the markers that you have in fact
 * correctly completed the exercise. It is not enough that you have passed all of the tests.
 * <p>
 * You may modify the code in between the comments: // Answer here // . Do not modify other parts of the code.
 * <p>
 * Write your name and UPI here: name and UPI. jamal rizki - jriz084
 */
public class AssignmentOnePartTwo {

    /**
     * Q1. Complete the method countDigits that has an integer parameter, and returns the number of digits the value of
     * the parameter has. For negative values, only count the digits, not the negative sign.
     */
    public int countDigits(int number) {
        String num = Integer.toString(number);
        int count = 0;
        for (int i = 0; i < num.length(); i++) {
            if (num.charAt(i) != '-') {
                count++;
            }
        }
        return count;
    }

    /**
     * Q2. Complete the method gcd that takes two integers and returns their greatest common divisor.
     * That is, the largest integer that divides both of them with no remainder.
     * You may assume both integers are positive and are greater than 0.
     */
    public int gcd(int num1, int num2) {
        int smallestNum;
        int gcd = 1;
        if (num1 < num2) {
            smallestNum = num1;
        } else {
            smallestNum = num2;
        }

        for (int i = smallestNum; i > 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                gcd = i;
                break;
            }
        }
        return gcd;
    }

    /**
     * Q3. Complete the method reverseInt that takes an integer parameter, and returns the integer in reverse order.
     * If given a negative integer, the number should be the reversed digits with the negative sign staying at the
     * front, i.e. given -45, the method will return -54.
     */
    public int reverseInt(int number) {
        String num = Integer.toString(number);
        String reversed = "";
        if (num.charAt(0) == '-') {
            reversed += "-";
        }
        for (int i = num.length() - 1; i >= 0; i--) {
            if (num.charAt(i) != '-') {
                reversed += num.charAt(i);
            }
        }
        return Integer.parseInt(reversed);
    }

    /**
     * Q4. Complete the method convertIntToColTitle that converts an integer to an excel column letter.
     * For example, column 0 is "A", column 1 is "B", column 26 is "AA".
     * If the given integer is less than 0, then the method should return "Input is invalid".
     */
    public String convertIntToColTitle(int column) {
        // Answer here

        return null;
        //
    }

    /**
     * Q5. Complete the method reverseString that takes a String parameter, and returns the given String in reverse order.
     * You may assume that the String is non-empty.
     */
    public String reverseString(String str) {
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return reversed;
    }

    /**
     * Q6. Complete the method isIntPalindrome that takes an integer parameter, and returns a boolean value: true if
     * the digits of the given integer are palindromic (i.e. reads the same backwards as forwards). Any leading negative
     * signs should be ignored for the purposes of this exercise.
     */
        public boolean isIntPalindrome(int number) {
        boolean isPalindrome = false;
        String num = Integer.toString(Math.abs(number));
            String reversed = "";
            for (int i = num.length() - 1; i >= 0; i--) {
                reversed += num.charAt(i);
            }
            if (Integer.parseInt(reversed) == Math.abs(number)) {
                isPalindrome = true;
            }
            return isPalindrome;
        }

//    public boolean isIntPalindrome(int number) {
//        boolean isPalindrome = false; // a little confused on wording need to double check
//        String num = Integer.toString(number);
//        String reversed = "";
//        if (num.charAt(0) == '-') {
//            reversed += "-";
//        }
//        for (int i = num.length() - 1; i >= 0; i--) {
//            if (num.charAt(i) != '-') {
//                reversed += num.charAt(i);
//            }
//        }
//        if (Integer.parseInt(reversed) == number) {
//            isPalindrome = true;
//        }
//        ;
//        return isPalindrome;
//    }

    /**
     * Q7. Complete the method sortNumbersByAscending that takes four integers as arguments, and returns a string of
     * the numbers in ascending order.
     * Note that the numbers are separated by commas with no space. You may use if statements.
     */
    public String sortNumbersByAscending(int num1, int num2, int num3, int num4) { // brute force
        int max = Math.max(Math.max(num1, num2), Math.max(num3, num4));
        int min = Math.min(Math.min(num1, num2), Math.min(num3, num4));
        int second;
        int third;
        int middleOne = Math.min(Math.max(num1, num2), Math.max(num3, num4));
        int middleTwo = Math.max(Math.min(num1, num2), Math.min(num3, num4));
        if (middleOne < middleTwo) {
            second = middleOne;
            third = middleTwo;
        } else {
            third = middleOne;
            second = middleTwo;
        }
        String sortedString = Integer.toString(min) + "," + Integer.toString(second) + "," +
                Integer.toString(third) + "," + Integer.toString(max);
        return sortedString;
    }

    /**
     * Q8. Complete the method printPrimeNumbers that takes an integer parameter and returns a String containing
     * a space separated list of all of the prime numbers starting at 2 and all the way up to and including the given integer.
     * If the given number is negative or no prime numbers are found, return "No prime number found".
     * <p>
     * Note that there is no extra space at the end of the String returned.
     */
    public String printPrimeNumbers(int num) {
        //Nope
        return null;
    }

    /**
     * Q9. Complete the method findLifePathNumber that takes three integers to calculate the "Life Path Number".
     * The Life Path Number is a magical number commonly used by fortune-tellers to predict future and
     * personality of the individual. The Life Path Number is calculated using the following two steps:
     * Step 1. For each given integer, sums up all digits. Then, add all three values together.
     * Step 2. Sums up all digits of the total from step 1 and continue until you get to a single digit between 1 and 9.
     * The number you get from Step 2 will be your life Path Number. You may assume that the given integers are all
     * positive.
     * <p>
     * For example, given the following parameters: yearOfBirth = 1993, monthOfBirth = 5, dateOfBirth = 22,
     * Step 1. We sum up all digits for each given integer and add all values together: (1+9+9+3) + (5) + (2+2) = 31
     * Step 2. We sum up all digits of the total from step 1: (31) => 3 + 1 = 4.
     * Therefore, the Life Path Number is 4.
     */
    public int findLifePathNumber(int yearOfBirth, int monthOfBirth, int dateOfBirth) {
        String num1 = Integer.toString(yearOfBirth); // brute force copy and paste
        int num1Total = 0;
        for (int i = 0; i < num1.length(); i++) {
            num1Total += num1.charAt(i) - '0';
        }

        String num2 = Integer.toString(monthOfBirth);
        int num2Total = 0;
        for (int i = 0; i < num2.length(); i++) {
            num2Total += num2.charAt(i) - '0';
        }

        String num3 = Integer.toString(dateOfBirth);
        int num3Total = 0;
        for (int i = 0; i < num3.length(); i++) {
            num3Total += num3.charAt(i) - '0';
        }

        int sum1 = num1Total + num2Total + num3Total;
        System.out.println(" sum1 " + sum1);
        String finalString = Integer.toString(sum1);
        System.out.println(" final string " + finalString);
        int finalSum = 0;

        for (int i = 0; i < finalString.length(); i++) {
            finalSum += finalString.charAt(i) - '0';
        }
        System.out.println(" final sum " + finalSum); // todo fix case if > 9

        if (finalSum > 9) {
            finalSum = sumDigits(finalSum); // todo can probably refractor and use this earlier
        }


        return finalSum;
        //
    }

    public int sumDigits(int num) { // helper function for above question
        String finalString2 = Integer.toString(num);
        int finalFinal = 0;
        for (int i = 0; i < finalString2.length(); i++) {
            finalFinal += finalString2.charAt(i) - '0';
        }
        return finalFinal;
    }

    /**
     * Q10. Complete the method simpleMultiplicationTable that takes an integer parameter, and returns a String showing
     * the multiplication table (rows and columns) starting at 1 and up to and including that number.
     * Any 'cell' in the table should display the result of multiplying that row number by that column number.
     * For example, the method would return the following String for an integer parameter of 2:
     * 1 2
     * 2 4
     * For an integer parameter of 3, the method would result in a 3x3 table:
     * 1 2 3
     * 2 4 6
     * 3 6 9
     * Hint: Remember that you can nest loops too. To print new line, use "\n".
     * You may assume that the given integer is always larger than 0.
     */
    public String simpleMultiplicationTable(int num) {
        // Answer here
        String table = "";
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= num; j++) {
                table += i * j;
                if(j < num) {
                    table += " ";
                }
            }
            table += "\n";
        }
        System.out.println(table);
        return table.trim();
    }

}
