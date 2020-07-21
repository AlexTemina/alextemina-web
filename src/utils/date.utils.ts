export function formatDates(dates: Date[]): string {
  const formattedDates = dates.map((date) => {
    const naturalMonth = date.getMonth() + 1;
    const twoDigitsMonth = `0${naturalMonth}`.slice(-2);
    return `${twoDigitsMonth}/${date.getFullYear()}`;
  });

  return formattedDates.join(' - ');
}
