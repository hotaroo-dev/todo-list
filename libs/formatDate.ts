export function formatDate(date: number) {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
  }).format(new Date(Number(date) * 1000));
}
