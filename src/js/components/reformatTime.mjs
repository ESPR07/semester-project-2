export function reformatTime(time) {
  const parseDate = new Date(time);

  let day = parseDate.getDate();
  day = day.toString().padStart(2, "0");
  let month = parseDate.getMonth() + 1;
  month = month.toString().padStart(2, "0");
  let year = parseDate.getFullYear();
  year = year.toString().padStart(2, "0");
  let hour = parseDate.getHours();
  hour = hour.toString().padStart(2, "0");
  let minute = parseDate.getMinutes();
  minute = minute.toString().padStart(2, "0");

  const formattedDate = `${day}.${month}.${year} ${hour}:${minute}`;
  return formattedDate;
}
