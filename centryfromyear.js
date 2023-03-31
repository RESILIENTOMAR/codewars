/*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/



function century(year) {
    const centuryNumber = Math.ceil(year / 100);
    return centuryNumber;
}
/*In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.*/



function periodIsLate(last, today, cycleLength) {
    const oneDayMs = 24 * 60 * 60 * 1000; // number of milliseconds in a day
    const daysPassed = Math.round((today.getTime() - last.getTime()) / oneDayMs);
    return daysPassed > cycleLength;
}
