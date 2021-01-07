function downloadCSV(array, filename = 'export.csv') {
  const link = document.createElement('a');
  let rows = [];
  array.forEach(row => {
    row = row.join(',');
    rows.push(row);
  });
  let csv = rows.join('\n');
  if (csv == null) return;

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
export default downloadCSV;