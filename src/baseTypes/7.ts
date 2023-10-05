/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

function isWeekend(day: string): boolean {
  if (day === DayOfWeek.Saturday || DayOfWeek.Sunday) {
    console.log("${day} a weekend day!");
    return true;
  } else {
    console.log("${day} a working day!");
    return false;
  }
}
export {};
