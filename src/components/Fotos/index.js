import * as React from 'react';
import { Image, Row, Col }  from 'react-bootstrap';

	
const Fotos = () =>{
	return(
							<>
								  <Row>
								    <Col xs={12} md={4}>
								      <Image src="./Imagens/img9.jpg" rounded fluid />
								    </Col>
								    <Col xs={12} md={4}>
								      <Image src="./Imagens/img10.jpg" roundedCircle fluid />
								    </Col>
								    <Col xs={12} md={4}>
								      <Image src="./Imagens/img11.jpg" thumbnail fluid />
								    </Col>
								  </Row>
							</>
	)
}

export default Fotos;