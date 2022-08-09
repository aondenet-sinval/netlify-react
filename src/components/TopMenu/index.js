import {
	Container, Navbar, Nav } from 'react-bootstrap/';
	
const TopMenu = () =>{
	return(
			<Container fluid>  
					<>
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						  <Container>
						  <Navbar.Brand href="#HOME" className="sr-only sr-only-focusable">HOME</Navbar.Brand>
						  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
						  <Navbar.Collapse id="responsive-navbar-nav">
						    <Nav className="me-auto">
						      <Nav.Link href="#DuasColunas" className="sr-only sr-only-focusable">DuasColunas</Nav.Link>
						      <Nav.Link href="#Fotos" className="sr-only sr-only-focusable">Fotos</Nav.Link>
						      <Nav.Link href="#Reserva" className="sr-only sr-only-focusable">Reserva</Nav.Link>
						      <Nav.Link href="#Termos" className="sr-only sr-only-focusable">Termos</Nav.Link>
						    </Nav>
						  </Navbar.Collapse>
						  </Container>
						</Navbar>
					</>
			</Container>	
	)
}

export default TopMenu;