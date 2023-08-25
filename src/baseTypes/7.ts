/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  monday="monday",
  tuesday="tuesday", 
  wednesday="wednesday", 
  thursday="thursday", 
  friday="friday",
  sunday="sunday",
  saturday="saturday"
}

let isWeekend = (day:Day):boolean => (day === Day.sunday || day === Day.saturday)

console.log(isWeekend(Day.thursday))
