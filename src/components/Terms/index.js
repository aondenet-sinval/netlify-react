import Accordion from 'react-bootstrap/Accordion';
	
function Terms(){
	return(
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h3 className="sr-only sr-only-focusable" id={"Termos"}>Termos de Reserva</h3></Accordion.Header>
    <Accordion.Body>
    <h5 className="sr-only sr-only-focusable">Descreva aqui os termos de sua hospedagem...</h5>
      <p className="sr-only sr-only-focusable">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  
	)

}

export default Terms;