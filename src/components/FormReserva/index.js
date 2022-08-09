import {
	Button, Row, Col, Form, FloatingLabel } from 'react-bootstrap/';
import { useState } from 'react';

		
function FormReserva(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
 
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="sr-only sr-only-focusable">
      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Primeiro nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            defaultValue="Digite aqui seu nome"
            id={"nome"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sobrenome"
            defaultValue="Digite aqui seu sobrenome"
            id={"sobrenome"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Digite aqui sua Cidade" id={"cidade"} required />
          <Form.Control.Feedback type="invalido">
            Informe sua cidade corretamente.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" placeholder="Digite aqui seu Estado" id={"estado"} required />
          <Form.Control.Feedback type="invalido">
            Informe seu estado corretamente.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="9">      
			<FloatingLabel controlId="floatingTextarea2" label="Pedido de reserva.">
			 <Form.Control
			   as="textarea"
			   placeholder="Digite aqui seu pedido de reserva."
			   style={{ height: '100px' }}
			 />
			</FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} md="3">
        <Form.Check
          required
          label="Concordo com os Termos de Reserva."
          feedback="Muito obrigado."
          feedbackType="invalid"
        />
      </Form.Group>
      </Row>
      <Button type="submit">Enviar Pedido</Button>
    </Form>

  );
}

export default FormReserva;
