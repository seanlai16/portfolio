const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function yearOf(isoMonth: string): string {
  return isoMonth.slice(0, 4);
}

export function formatMonth(isoMonth: string): string {
  const [year, month] = isoMonth.split("-");
  const monthIndex = Number(month) - 1;
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return year;
  }
  return `${MONTHS[monthIndex]} ${year}`;
}

export function formatRange(start: string, end: string | null): string {
  const from = formatMonth(start);
  if (!end) return `${from} — Present`;
  return `${from} — ${formatMonth(end)}`;
}
