import React from "react";
import { Container, Row, Col } from "reactstrap";
import BackComponent from "./BackComponent";

function CreateData() {
	return (
		<Container>
			<Row>
				<Col>
					<BackComponent />
				</Col>
				<Col>Create data</Col>
			</Row>
		</Container>
	);
}

export default CreateData;
