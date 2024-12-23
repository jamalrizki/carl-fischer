package ictgradschool.industry.assignment01.problems;

/**
 * Please run TestAssignmentOnePartOne to check your answers.
 * There are 10 exercises in this class. They are ordered roughly in increasing order of difficulty.
 * You can do them in any order you like. Each exercise is worth the same amount towards your overall Assignment 1 mark.
 * However, you will only get full marks for each exercise on confirmation by the markers that you have in fact
 * correctly completed the exercise. It is not enough that you have passed all of the tests.
 * <p>
 * You may modify the code in between the comments: // Answer here // . Do not modify other parts of the code.
 * <p>
 * Write your name and UPI here: name and UPI. jamal rizki - jriz084
 */
public class AssignmentOnePartOne {

    /**
     * Q1. Complete the method divideTwoInts, that will, when given two integer parameters,
     * return the quotient, which is also an integer. You may assume that the divisor is always larger than 0.
     */
    public int divideTwoInts(int dividend, int divisor) {
        int quotient = 0;
        quotient = dividend / divisor;
        return quotient;
    }

    /**
     * Q2. Complete the method remainderOfTwoInts that will, when given two integer parameters,
     * return the remainder of the two numbers after division. You may assume that the divisor is always larger than 0.
     */
    public int remainderOfTwoInts(int dividend, int divisor) {
        int remainder = 0;
        remainder = dividend % divisor;
        return remainder;
    }

    /**
     * Q3. Complete the method convertKilometresToMiles, making use the following formula: m = km * 0.621371,
     * where m is the distance in miles rounded to the nearest whole number, and km is the distance in kilometres.
     */
    public int convertKilometresToMiles(int km) {
        int m = 0;
        m = (int) Math.round(km * 0.621371);
        return m;
    }

    /**
     * Q4. Complete the method convertCharToString that takes a character,
     * and returns a String consisting of just that character.
     */
    public String convertCharToString(char character) {
        return String.valueOf(character);
    }

    /**
     * Q5. Complete the method getThreeLettersInCapital that takes two parameters: a string for text and an integer for
     * index. The method returns the first three letters of the String in CAPITAL after the index (inclusive of the index).
     * <p>
     * For example, given "hello" and 2, the method should return "LLO".
     * If the index exceeds the length of the given text, you should return an empty string "".
     * If the string does not have three more letters after the index, you should return all letters in CAPITAL
     * after the index.
     */
    public String getThreeLettersInCapital(String text, int index) {
        if(index > text.length()) {
            return "";
        }
        if(text.length() < index + 3) {
            return text.substring(index).toUpperCase();
        } else {
            return text.substring(index, index + 3).toUpperCase();
        }
    }

    /**
     * Q6. Complete the method EnoughToBuyDrinks that takes three integer parameter representing the number of dollar
     * coins (1), fifty-cent coins (0.5) and ten-cent coins (0.1).
     * The method returns a boolean value: true if the total amount is enough to buy a pint of beer (9.8 dollars),
     * otherwise false.
     */
    public boolean EnoughToBuyDrinks(int dollarCoins, int fiftyCentCoins, int tenCentCoins) {
        double beerPrice = 9.8;
        double total = dollarCoins + (fiftyCentCoins * 0.5) + (tenCentCoins * 0.1);
        if(total >= beerPrice) {
            return true;
        }
        return  false;
    }

    /**
     * Q7. Complete the method called implies that takes two boolean parameters a and b,
     * and returns the result of the boolean expression a => b. That is, if a is true and b is true, the result is true.
     * If a is false, the result is true. Otherwise, the result is false.
     */
    public boolean implies(boolean a, boolean b) {
        if(a && b || !a) {
            return true;
        }
        return false;
    }

    /**
     * Q8. Complete the method checkErrorInRange that takes three double values, a, b, delta.
     * The method returns true if a and b are the same within a given error range indicated by delta.
     * Otherwise, the method returns false if a and b are not the same.
     */
    public boolean checkErrorInRange(double a, double b, double delta) {
        boolean isEqual = Math.abs(a - b) < delta;
        return isEqual;
    }

    /**
     * Q9. Complete the method generateUsername that takes in as input a full name in the format of "firstName lastName"
     * and returns a String representing a username. The username comprises the first letter of the first name,
     * the first three letters of the last name, and three digits. The three digits are calculated based on the
     * sum of the decimal values of the four letters of the username.
     * <p>
     * For example, given the full name "Taylor Swift", the username would be tswi455.
     * The three digits are calculated based on:
     * The character 't' has the decimal value of 116, the character 's' has the decimal value of 115,
     * the character 'w' has the decimal value of 119, and the character 'i' has the decimal value of 105.
     * Therefore, the three digits are 116 + 115 + 119 + 105 = 455.
     * <p>
     * Note that the username is all in lowercase. You may assume that the given name has no middle name and
     * the last name always has more than three letters.
     * <p>
     * Hint: Consider saving each letter as a char.
     */
    public String generateUsername(String fullName) {
        String newUser = "";
        char first = fullName.toLowerCase().charAt(0);
        int last = fullName.indexOf(" ");
        String lastName = fullName.substring(last + 1, last + 4).toLowerCase();
        newUser += first;
        int nums = 0;
        for (int i = 0; i < 3; i++) {
            newUser += lastName.charAt(i);
        }
//        System.out.println(newUser);
        for (int i = 0; i < newUser.length(); i++) {
//            System.out.print((int)newUser.charAt(i));
//            System.out.println(newUser.charAt(i));
            nums += (int)newUser.charAt(i);
//            System.out.println(nums);
        }
        newUser += nums;
//        System.out.println(newUser);
        return newUser;
    }

    /**
     * Q10. Complete the method medianOfThreeInts that takes three integer parameters, and
     * returns the median of the three values. That is, the method returns the second largest (or
     * second smallest) of the three values.
     */
    public int medianOfThreeInts(int numOne, int numTwo, int numThree) {
        int max = Math.max(numOne, Math.max(numTwo, numThree));
        int min = Math.min(numOne, Math.min(numTwo, numThree));
        if(numOne != max && numOne != min) {
            return numOne;
        } else if(numTwo != max && numTwo != min) {
            return numTwo;
        } else  {
            return numThree;
        }
    }
}