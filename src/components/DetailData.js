import React from "react";
import { Container, Row, Col } from "reactstrap";
import BackComponent from "./BackComponent";

function DetailData() {
	return (
		<Container>
			<Row>
				<Col>
					<BackComponent />
				</Col>
				<Col>Detail data</Col>
			</Row>
		</Container>
	);
}

export default DetailData;
