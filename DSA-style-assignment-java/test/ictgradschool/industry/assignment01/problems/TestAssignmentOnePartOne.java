package ictgradschool.industry.assignment01.problems;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Run this test to check your answers for Assignment One Part One.
 * Do not modify this class.
 */
public class TestAssignmentOnePartOne {
    private AssignmentOnePartOne assignmentOnePartOne;

    @BeforeEach
    public void setUp() {
        assignmentOnePartOne = new AssignmentOnePartOne();
    }

    @Test
    public void testDivideTwoInts() {
        assertEquals(5, assignmentOnePartOne.divideTwoInts(10, 2));
        assertEquals(0, assignmentOnePartOne.divideTwoInts(2, 5));
        assertEquals(1, assignmentOnePartOne.divideTwoInts(9, 6));
    }

    @Test
    public void testRemainderOfTwoInts() {
        assertEquals(0, assignmentOnePartOne.remainderOfTwoInts(124, 2));
        assertEquals(11, assignmentOnePartOne.remainderOfTwoInts(143, 12));
        assertEquals(1, assignmentOnePartOne.remainderOfTwoInts(10, 3));
    }

    @Test
    public void testConvertKilometresToMiles() {
        assertEquals(1, assignmentOnePartOne.convertKilometresToMiles(1));
        assertEquals(0, assignmentOnePartOne.convertKilometresToMiles(0));
        assertEquals(19, assignmentOnePartOne.convertKilometresToMiles(31));
        assertEquals(20, assignmentOnePartOne.convertKilometresToMiles(32));
    }

    @Test
    public void testConvertCharToString() {
        assertEquals("a", assignmentOnePartOne.convertCharToString('a'));
        assertEquals("9", assignmentOnePartOne.convertCharToString('9'));
        assertEquals("A", assignmentOnePartOne.convertCharToString('\u0041'));
    }

    @Test
    public void testGetThreeLettersInCapital() {
        assertEquals("LLO", assignmentOnePartOne.getThreeLettersInCapital("Hello World", 2));
        assertEquals("78", assignmentOnePartOne.getThreeLettersInCapital("12345678", 6));
        assertEquals("", assignmentOnePartOne.getThreeLettersInCapital("abcde", 5));
        assertEquals("ON", assignmentOnePartOne.getThreeLettersInCapital("information", 9));
    }

    @Test
    public void testEnoughToBuyDrinks() {
        assertFalse(assignmentOnePartOne.EnoughToBuyDrinks(0, 10, 5));
        assertTrue(assignmentOnePartOne.EnoughToBuyDrinks(8, 1, 100));
        assertTrue(assignmentOnePartOne.EnoughToBuyDrinks(0, 0, 10000));
    }

    @Test
    public void testImplies() {
        assertTrue(assignmentOnePartOne.implies(true, true));
        assertTrue(assignmentOnePartOne.implies(false, true));
        assertTrue(assignmentOnePartOne.implies(false, false));

        assertFalse(assignmentOnePartOne.implies(true, false));
    }

    @Test
    public void testCheckErrorInRange() {
        assertTrue(assignmentOnePartOne.checkErrorInRange(25.586, 25.586, 0.0001));
        assertFalse(assignmentOnePartOne.checkErrorInRange(1.23469, 1.22469, 0.0000005));
        assertTrue(assignmentOnePartOne.checkErrorInRange(1.0, 1.000101, 0.1));
        assertFalse(assignmentOnePartOne.checkErrorInRange(1.0, 1.0101, 0.001));
    }

    @Test
    public void testGenerateUsername() {
        assertEquals(assignmentOnePartOne.generateUsername("Taylor Swift"), "tswi455");
        assertEquals(assignmentOnePartOne.generateUsername("Taika Waititi"), "twai437");
        assertEquals(assignmentOnePartOne.generateUsername("Alan Turing"), "atur444");
        assertEquals(assignmentOnePartOne.generateUsername("Grace Hopper"), "ghop430");
    }

    @Test
    public void testMedianOfThreeInts() {
        assertEquals(1, assignmentOnePartOne.medianOfThreeInts(1, 1, 1));
        assertEquals(2, assignmentOnePartOne.medianOfThreeInts(1, 2, 3));
        assertEquals(2, assignmentOnePartOne.medianOfThreeInts(2, 3, 1));
        assertEquals(2, assignmentOnePartOne.medianOfThreeInts(5, -1, 2));
        assertEquals(-2, assignmentOnePartOne.medianOfThreeInts(-3, -1, -2));
    }
}