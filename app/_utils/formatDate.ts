export function formatDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
  }).format(date);
}
