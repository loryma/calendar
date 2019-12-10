const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const regXMonth = /((?:January)|(?:February)|(?:March)|(?:April)|(?:May)|(?:June)|(?:July)|(?:August)|(?:September)|(?:October)|(?:November)|(?:December))/i;
const regXDay = /\b([1-9][0-9]?)\b/;
const regXYear = /\b(\d{4,4})\b/;

function validateDate(text) {
  const monthMatch = text.match(regXMonth);
  const dayMatch = text.match(regXDay);
  const yearMatch = text.match(regXYear);

  if (!monthMatch) {
    return "Invalid month name";
  }

  if (!dayMatch) {
    return "Invalid day";
  }

  if (!yearMatch) {
    return "Invalid year";
  }

  const month = MONTHS.indexOf(monthMatch[1]);

  if (month === -1) {
    return "Invalid month name";
  }

  try {
    const day = dayMatch[1];
    const year = yearMatch[1];

    const numberOfdays = new Date(year, month + 1, 0);

    if (day > numberOfdays) {
      return "Invalid number of days";
    }

    const dateObj = new Date(year, month, day);

    if (Object.prototype.toString.call(dateObj) !== "[object Date]") {
      return "Invalid date";
    }
  } catch (errot) {
    return "Invalid date";
  }

  return false;
}

export default validateDate;
