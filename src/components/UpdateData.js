import React from "react";
import { Container, Row, Col } from "reactstrap";
import BackComponent from "./BackComponent";

function UpdateData() {
	return (
		<Container>
			<Row>
				<Col>
					<BackComponent />
				</Col>
				<Col>Update data</Col>
			</Row>
		</Container>
	);
}

export default UpdateData;
