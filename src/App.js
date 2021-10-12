import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavbarComponent from "./components/NavbarComponent";
import TableComponents from "./components/TableComponents";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateData from "./components/CreateData";
import DetailData from "./components/DetailData";
import UpdateData from "./components/UpdateData";

const products = [
	{ id: 1, name: `Afifah`, address: "Amerika" },
	{ id: 2, name: `Budi`, address: "Brazil" },
	{ id: 3, name: `Cantika`, address: "Ceko" },
];

function App() {
	const [data, setData] = useState(products);
	return (
		<div>
			<Helmet>
				<title>Simple CRUD with Redux</title>
			</Helmet>
			<NavbarComponent />

			<Router>
				<Switch>
					<Route path="/" exact>
						<TableComponents data={data} />
					</Route>
					<Route path="/create" component={CreateData} />
					<Route path="/detail" component={DetailData} />
					<Route path="/update/:id" component={UpdateData} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
