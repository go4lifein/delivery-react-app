import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { getAllFarmers } from "../api/v2/admin"
import Loading from "./Loading";
import FarmerDataTable from "./FarmerDataTable";

class FarmerDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			name: "",
			region: "",
			subregion: "",
			farmers: [],
			search: "",
		}
	}

	componentDidMount() {
		this.setState({
			loading: false
		})
		this.refreshData()
	}

	refreshData = async () => {
		const response = await getAllFarmers();
		this.setState({
			farmers: response.data
		})
	}
	filterData = () => {
		let { search, farmers } = this.state;
		let data = [];

		if (farmers) {
			data = farmers.filter(item => {
				const { name, region, subregion } = item;
				if (search) {
					search = search.toLowerCase()
					if (name.toLowerCase().includes(search)) return true;
					if (region.toLowerCase().includes(search)) return true;
					if (subregion.toLowerCase().includes(search)) return true;
					return false;
				}
				return true;
			});
		}
		return data;
	}

	onSearch = (e) => {
		this.setState({
			search: e.target.value
		})
		this.filterData()
	}

	render() {
		const { loading } = this.state;
		let data = this.filterData();

		if (loading) {
			return <Loading />
		}
		return (
			<div>
				<div
					className="flex space-bw m-10 middle"
				>
					<TextField
						style={{ minWidth: 300 }}
						label="Search by Name, Region or Subregion"
						value={this.state.search}
						onChange={this.onSearch}
					/>
				</div>
				<FarmerDataTable
					data={data}
				/>
			</div>
		);
	}
}

export default FarmerDashboard; 