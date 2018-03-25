export function formatDate(date: Date): string {
  let format = 'YYYY-MM-DD';
  format = format.replace(/YYYY/g, date.getFullYear().toString());
  format = format.replace(
    /MM/g,
    ('0' + (date.getMonth() + 1)).slice(-2).toString()
  );
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2).toString());
  return format;
}
