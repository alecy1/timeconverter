import React from 'react'

function Imprime(props){
  return( 
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br/>
      <h4 className="fs-4">Peso en libras: {props.libra.toFixed(5)}</h4>
    </div>
  );
}

class Convertidor extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state={kilogramo:'',libra:''};
  }
  
  handleChange(e){ this.setState({kilogramo:e.target.value});}
  render(){
    const kilogramo = this.state.kilogramo;
    const libra = 0.45359237;
    return(
      <div className="container text-center margen">
        <span className="center fs-3 text-bold textColor">Convertir unidades de peso</span>
          <fieldset className="mb-3">
            <legend className="form-label fs-4">Escribe el peso en kilogramos</legend>
              <input className="form-control" value={kilogramo} onChange={this.handleChange}/>
              <Imprime libra={kilogramo/libra}/>
          </fieldset>
          <br/><br/><br/>
      </div>
      );
  }
}

export default Convertidor;