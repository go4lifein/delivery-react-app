/**
 * ## downloadCSV  
 * Call this function with `array`, `filename`  
 * 
 * `array`: Array of rows. Eg:  
 * ```
 * [
 *    ['Location', 'Region'], 
 *    ['Sector 70', 'Gurgaon'], 
 *    ..., 
 *    []
 * ]
 * 
 * ```
 * @param {*} array - 
 * @param {*} filename - 
 */
export function downloadCSV(array, filename = 'export.csv') {
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

export function exportCSV(data = [], columns = [], filename) {
  let headers = columns.map(({name}) =>  name);
  let rows = [headers];

  data.forEach(item => {
    let row = columns.map(column => {
      const {cell, selector} = column;
      if(cell) {
        return `"${String(cell(item)).replace(',', '').replace('#', '')}"`;
      }
      return `"${String(item[selector]).replace(',', '').replace('#', '')}"`;
    })

    rows.push(row);
  });

  downloadCSV(rows, filename);

}

export default downloadCSV;