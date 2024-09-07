/**
 * SIMPLE LOGIC:
 * year will be e leap year if the year is divisible by 4
 */
 
 function isLeapYear(year) {
   if (year % 4 === 0) {
     return true;
   }
   return false;
 }
 
 const leapYear = isLeapYear(2021);
 console.log(leapYear)
 
 
 
 
 /**
  * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
  * 2. if the year is divisible by 400, then it is a leap year
  * 3. else it is not a leap year
  */
  
  function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  const year = isLeapYear(2052);
  console.log(year)
 