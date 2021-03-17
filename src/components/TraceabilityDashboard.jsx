
import React, { Component } from 'react';
import Loading from "./Loading";
import { connect } from 'react-redux';

import {getAllProducts, getAllCategories} from '../api/products';
import {getAllFarmers} from "../api/v2/admin"
import HarvestReportForm from './HarvestReportForm';
import { Typography } from '@material-ui/core';

function mapStateToProps(state) {
	return {

	};
}

function mapDispatchToProps(dispatch) {
	return {
	}

}

class TraceabilityDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.refreshData()
	}

	refreshData = async () => {

		this.setState({
			loading: true
		})
		
		try {
			let farmers = await getAllFarmers().then(res => res.data);
			let products = await getAllProducts().then(res => res.data);
			let categories = await getAllCategories().then(res => res.data);
		
			this.setState({
				products,
				categories,
				farmers,
				loading: false
			})
		} catch(err) {

			this.setState({
				loading: false,
				error: err.response ? err.response.data : err.message
			});
		}
	}
	addHarvestReport = (data) => {
		console.log(data);
	}

	render() {
		const {products, categories, farmers, error, loading} = this.state;

		if(error) {
			return error;
		}
		return (
			<div>
				{
					loading ?
					<Loading /> :
					<div>
						<Typography variant="h4" className="p-10">Add Harvest Report</Typography>
						<HarvestReportForm 
							farmers={farmers}
							products={products}
							categories={categories}
							onSubmit={this.addHarvestReport} 
						/>
					</div>
				}
				
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TraceabilityDashboard);