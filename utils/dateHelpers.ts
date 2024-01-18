export function addMonths(date: Date, months: number) {
  let d = new Date(date.getTime());
  d.setMonth(d.getMonth() + months);

  return d;
}

export function addDays(date: Date, dates: number) {
  let d = new Date(date.getTime());
  d.setDate(d.getDate() + dates);

  return d;
}
