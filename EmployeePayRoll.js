const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("Employee is Absent.");
} else {
  console.log("Employee is Present.");
  calculate_EMP_Wage();
}

function getWorkingHours(empCheck) {
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  let empHrs = 0;

  switch (empCheck) {
    case IS_PART_TIME:
      empHrs = PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      empHrs = FULL_TIME_HOURS;
      break;

    default:
      break;
  }
  return empHrs;
}

function calculate_EMP_Wage() {
  const WAGE_PER_HOUR = 20;

  let empCheck = (Math.floor(Math.random() * 10) % 2) + 1;
  let empHrs = getWorkingHours(empCheck);

  let empWage = empHrs * WAGE_PER_HOUR;
  console.log("Employee Wage : " + empWage);
}
