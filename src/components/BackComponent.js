import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function BackComponent() {
	return (
		<div>
			<Link to="/">
				<Button>Kembali</Button>
			</Link>
		</div>
	);
}

export default BackComponent;
