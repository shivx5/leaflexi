function formatFullDate(data) {
  if (!data) return "Select Date ";

  const suffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const months = [
    " Jan",
    " Feb",
    " March",
    " April",
    " May",
    " June",
    "July",
    " Aug",
    " Sept",
    " Oct",
    " Nov",
    " Dec",
  ];

  const day = data.day;
  const month = months[data.mnth - 1];
  const year = data.year;
  const hour = data.hr;
  const min = String(data.min).padStart(2, "0");
  const ampm = data.ampm;

  return (
    <div>
      {day}
      {/* {suffix(day)} */}
      {month}, {hour}:{min}
      {" " + ampm}
    </div>
  );
}
export default formatFullDate;
