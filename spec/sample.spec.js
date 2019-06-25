const { LeapYear } = require('./../src/LeapYear');

describe('Given a leap year calculator', () => {
    // All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
    describe('When the year is divisible by 400', () => {
        it('Then 2000 should be leap year', () => {
            // Arrange
            const leapYear = new LeapYear();
            // Act
            const isLeapYear = leapYear.isLeapYear(2000);
            // Assert
            expect(isLeapYear).toBeTruthy();
            expect(isLeapYear).toBe(true);
        });

        it('Then 2011 should not be leap year', () => {

            const leapYear = new LeapYear();

            const isLeapYear = leapYear.isLeapYear(2011);

            expect(isLeapYear).toBeTruthy();
            expect(isLeapYear).toBe(false);
        });
    });
});