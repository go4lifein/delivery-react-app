import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import moment from 'moment-timezone';
import {exportCSV} from '../../helpers/exportCSV';

/**
 * ## ExportCSVButton
 * 
 * * `filterData`: a function that filters the data, should return `true` or `false`
 * * `mapDataCallback`: a function that is used as a callback for `data.map(mapDataCallback)`
 */
function ExportCSVButton({
	label = "Export Data",
  mapDataCallback,
  filterData,
	columns,
	filename = `export-${moment().format('YYYY-MM-DD HH:mm:ss')}.csv`,
  data,
	...props
}) {

	const onExportData = () => {

		if(mapDataCallback) {
			data = data.map(mapDataCallback);
		}
		
		if(filterData) {
			data = filterData(data);
		}
		
		let firstItem = {};
		if (data.length) firstItem = data[0];

		let autoColumns = Object.keys(firstItem).map(key => ({
			name: key,
			selector: key
		}));

		exportCSV(data, columns || autoColumns, filename)

	}

	return (
		<Button
			onClick={onExportData}
			startIcon={<ArrowDownward />}
			variant="outlined"
		>
			{label}
		</Button>
	)
}

export default ExportCSVButton
