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
  const monthStr = text.match(regXMonth)[1];
  const month = MONTHS.indexOf(monthStr);
  const day = text.match(regXDay)[1];
  const yearMatch = text.match(regXYear);
  let year = new Date().getFullYear();

  // if (!yearMatch) {
  //   const guessDate = new Date(year, month, day);
  //   const timeNow = new Date();
  //   const dateNow = new Date(
  //     timeNow.getFullYear(),
  //     timeNow.getMonth(),
  //     timeNow.getDate()
  //   );
  //   if (guessDate < dateNow) {
  //     year += 1;
  //   }
  // } else {
  //   year = yearMatch[1];
  // }

  if (yearMatch) {
    year = yearMatch[1];
  }

  if (month && day && year) {
    date = `${+new Date(year, month, day)}`;
    return date;
  }
  return false;
}

export default textToDate;
