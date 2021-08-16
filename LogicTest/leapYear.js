

const leapYear = (startYear, endYear) => {
  let yearRange = [];
  let result = [];

  for (let i = startYear + 1; i <= endYear; i++){
    yearRange.push(i);
  }

  const isLeapYear = (year) => {
    if ((year % 4 === 0 || year % 100 === 0) || (year % 100 === 0 && year % 400 === 0)) {
      return year
    } else {
      return false
    }
  }

  yearRange.forEach(
    (year) => {
      if(isLeapYear(year)) {
        result.push(year)
      }
    }
  );
  
  return result
};



console.log(leapYear(1900, 2020))