const { LeapYear } = require('./../src/LeapYear');

describe('Given a leap year calculator', () => {
  // All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
  describe('When the year is divisible by 400', () => {
    it('Then 2000 should be leap year', () => {
      // Arrange

      // Act
      const isLeapYear = LeapYear.isLeapYear(2000);
      // Assert
      expect(isLeapYear).toBeTruthy();
    });
  });

  describe('When the year is divisible by 100 but not by 400', () => {
    // All years divisible by 100 but not by 400 are NOT leap years

    it('Then 1700 should not be leap year', () => {
      // Arrange
      // Act
      const isLeapYear = LeapYear.isLeapYear(1700);
      // Assert
      expect(isLeapYear).toBeFalsy();
    });
  });


  describe('When the year is divisible by 4 but not by 100 ', () => {
    // All years divisible by 100 but not by 400 are NOT leap years
    it('Then 2008 should be leap year', () => {
      // Arrange
      // Act
      const isLeapYear = LeapYear.isLeapYear(2008);
      // Assert
      expect(isLeapYear).toBeTruthy();
    });
  });

  describe('When the year is divisible by 4', () => {
    // All years not divisible by 4 are NOT leap years
    it('Then 2017 should not be leap year', () => {
      // Arrange
      // Act
      const isLeapYear = LeapYear.isLeapYear(2017);
      // Assert
      expect(isLeapYear).toBeFalsy();
    });
  });
});
