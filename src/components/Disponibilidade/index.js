import React from 'react';
import { Container, Badge } from 'react-bootstrap/';

function VerificarDisponibilidade(props) {
    if (props.estadia <= 0) {
    return <p>Informe acima o total de diárias.</p>;
  }else if(props.estadia <= 5){
    return <p>Temos disponibilidade.</p>
  }else if(props.estadia > 5){
    return <p>Não temos disponibilidade.</p>;
  }
    return <p>Informe acima o total de diárias.</p>;
}

class Disponibilidade extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {diarias: ''};
  }
  handleChange(e){
    this.setState({diarias: e.target.value});

  }
  render(){
    const diarias = this.state.diarias;
    return (
            <fieldset>
            <Container>
              <Badge><legend>Verificar Disponibilidade</legend>
              </Badge>
            </Container>
            <input
              value={diarias}
              onChange={this.handleChange} />
            <VerificarDisponibilidade
              estadia={parseFloat(diarias)} />
            </fieldset>
            );
        }
}

export default Disponibilidade;
