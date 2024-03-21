export function getDateDifferenceInDays(givenDate) {
  // 1. Create Date objects for current date and given date
  const currentDate = new Date();
  const givenDateObject = new Date(givenDate);

  // 3. Calculate the absolute time difference in milliseconds
  const timeDifference = Math.abs(
    currentDate.getTime() - givenDateObject.getTime()
  );

  // 4. Convert milliseconds to days (divide by 1000 * 60 * 60 * 24)
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // 5. Return the difference (0 for negative, absolute value for positive)
  return dayDifference < 0 ? 0 : dayDifference;
}
