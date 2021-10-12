import React, { Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const columns = [
	{
		dataField: "id",
		text: "ID",
		sort: "true",
		headerStyle: {
			width: `5%`,
		},
	},
	{
		dataField: "name",
		text: "Nama",
		sort: "true",
	},
	{
		dataField: "address",
		text: "Alamat",
		sort: "true",
	},
	{
		dataField: "link",
		isDummyField: true,
		text: "Action",
		formatter: (cellContent, row) => {
			return (
				<div>
					<Link to={"/detail/" + row.id}>
						<Button color="secondary">Detail</Button>
					</Link>
					<Link to={`/update/${row.id}`}>
						<Button color="primary" className="mx-2">
							Update
						</Button>
					</Link>
					<Button color="danger">Delete</Button>
				</div>
			);
		},
	},
];

const defaultSorted = () => [
	{
		dataField: "id",
		order: "desc",
	},
];
function TableComponents(props) {
	return (
		<Container className="mt-3">
			<ToolkitProvider bootstrap4 search keyField="id" data={props.data} columns={columns} defaultSorted={defaultSorted}>
				{(props) => (
					<Fragment>
						<div className="mb-3 d-flex justify-content-between align-items-center">
							<Link to="/create">
								<Button>Tambah Data</Button>
							</Link>
							<SearchBar {...props.searchProps} placeholder="Search ..." />
						</div>
						<BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
					</Fragment>
				)}
			</ToolkitProvider>
		</Container>
	);
}

export default TableComponents;
