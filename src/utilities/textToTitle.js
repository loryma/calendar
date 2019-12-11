const regX = /(?:January)|(?:February)|(?:March)|(?:April)|(?:May)|(?:June)|(?:July)|(?:August)|(?:September)|(?:October)|(?:November)|(?:December)\s?\d{1,2},?\s?(?:\d{4})?,?\s?/i;

function textToTitle(text) {
  const title = text.replace(regX, "");
  return title;
}
export default textToTitle;
