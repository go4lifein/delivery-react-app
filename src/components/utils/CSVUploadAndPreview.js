import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'
import DataTable from 'react-data-table-component';
import './css/csvStyles.css';
import Alert from '@material-ui/lab/Alert'
import UploadIcon from '@material-ui/icons/CloudUpload'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ConfirmAndSubmitButton from '../UI/ConfirmAndSubmitButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const parseOptions = {
	header: true,
	dynamicTyping: true,
	skipEmptyLines: true,
	transformHeader: header => header.replace(/\W/g, "_")
};

/**
 * ## CSVUploadAndPreview
 * 
 * * `validator`: a function that validates and throws an error if data is not correct
 * * `mapDataCallback`: a function that is used as a callback for `data.map(mapDataCallback)`
 */
function CSVUploadAndPreview({
	hints, 
	label = "Upload File", 
	papaparseOptions = parseOptions,
	validator,
	maxLength,
	mapDataCallback,
	tableProps = {
		pagination: true
	},
	onSubmit,
	...props
}) {

	const [csvData, setData] = useState([]);
	const [showData, toggleData] = useState(false);
	const [fileInfo, setFileInfo] = useState(null);
	const [columns, setColumns] = useState(undefined)
	const [error, setError] = useState(null)

	const updateCSV = (data) => {

		if(mapDataCallback) {
			data = data.map(mapDataCallback);
		}
		
		let firstItem = {};
		if (data.length) firstItem = data[0];

		let keys = Object.keys(firstItem).map(key => ({
			name: key,
			selector: key,
			width: '200px',
			sortable: true
		}));


		let hadError = false;
		if(maxLength) {
			hadError = true;
			maxLength = parseInt(maxLength)
			if(data.length > maxLength) {
				setError(`Total number of records can't exceed ${maxLength}. You added ${data.length}.`);
			}
		}
		if(validator) {
			data.forEach(item => {
				try {
					validator(item);
				} catch(err) {
					console.log(item);
					hadError = true;
					setError(err.message);
				}
			})
			if(!hadError) {
				setError(null);
			}
		}

		setColumns(keys);
		setData(data);
		toggleData(true);
	}

	const handleFileUpload = (data, fileInfo) => {
		updateCSV(data);
		setFileInfo(fileInfo);
	}

	const onConfirmUpdate = (e) => {
		if(onSubmit) onSubmit(csvData);
		toggleData(false);
	}

	return (
		<div>
			<div className="flex middle">
				<CSVReader
					cssClass="csv-reader-input"
					label={<div className="flex center middle"> <UploadIcon style={{marginRight: 8}} /> {label}</div>}
					onFileLoaded={handleFileUpload}
					cssLabelClass="csv-input-label"
					cssInputClass="csv-input"
					parserOptions={papaparseOptions}
				/>
			</div>

			{showData && <Dialog fullScreen open={showData}>
				<DialogTitle>
					<div className="flex space-bw middle">
						<div>Preview Data - <span style={{padding: 4, backgroundColor: 'lightgreen', borderRadius: 4}}>{fileInfo && fileInfo.name}</span></div>
						<div className="flex middle">
						{error && <Alert variant="standard" severity="error">
							{error}
						</Alert>}

						{
							<ConfirmAndSubmitButton 
								onSubmit={onConfirmUpdate}
								disabled={Boolean(error)}
								onCancel={() => toggleData(false)}
							>
								Submit
							</ConfirmAndSubmitButton>
						}
						
						<Button onClick={() => toggleData(false)}>
							Cancel
						</Button>
						</div>
					</div>
				</DialogTitle>
				<Divider />
				<DialogContent>
					<DataTable
						fixedHeader={true}
						noHeader={true}
						columns={columns}
						data={csvData}
						{...tableProps}
					/>
				</DialogContent>
			</Dialog>}
		</div>
	)
}

export default CSVUploadAndPreview
