const month = [
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
  "December",
];
const dateFormater = (date) => {
  const newDate = date.split("T");
  const splitDate = newDate[0].split("-");
  return `${month[Number(splitDate[1])]} ${splitDate[2]},${splitDate[0]}`;
};

export default dateFormater;
