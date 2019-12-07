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
const regXDay = /\b(\d{1,2})\b/;
const regXYear = /\b(\d{4,4})\b/;

function textToDate(text) {
  let date;
  const month = text.match(regXMonth)[1];
  const day = text.match(regXDay)[1];
  const year = text.match(regXYear)[1];

  if (month && day && year) {
    const monthIndex = MONTHS.indexOf(month);
    date = `${+new Date(year, monthIndex, day)}`;
    return date;
  }
  return false;
}

export default textToDate;
