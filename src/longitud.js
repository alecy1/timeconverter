import React from 'react'

const medida = { Km : 'Kilometros', Mn : 'Millas nauticas'};

function MillaNautica(kilometro){ return  kilometro/1.852;}

function Kilometro(millaNautica){ return millaNautica*1.852; }

function tryConvert(longitud,convert) {
	const input = parseFloat(longitud);
	if(Number.isNaN(input))
		{ 
			return '';
		}
	const output = convert(input);
	const output1 = output.toFixed(3);
	return output1.toString();
}

class Hijo extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.props.onLongitudChange(e.target.value);
	}
	render() {
		const longitud = this.props.longitud;
		const unidadMedida = this.props.unidadMedida;
		return(			
				<div className="input-group input-group-lg mb-3">
					<span className="input-group-text" id="basic-addon3"> {medida[unidadMedida]}</span>
					<input className="form-control" value={longitud} onChange={this.handleChange}/>
				</div>
		);
	}
}

class Ancestro extends React.Component{
	constructor(props){
		super(props);
		this.handleChangeKilometro = this.handleChangeKilometro.bind(this);
		this.handleChangeMillaNautica = this.handleChangeMillaNautica.bind(this);
		this.state = {longitud:'', unidadMedida:'km'};
	}

	handleChangeKilometro(longitud){
		this.setState({longitud: longitud, unidadMedida:"Km"});
	}

	handleChangeMillaNautica(longitud){
		this.setState({longitud:longitud, unidadMedida:"Mn"});
	}

	render() {
		const unidadMedida = this.state.unidadMedida;
		const longitud = this.state.longitud;
		const kilometro = unidadMedida === 'Mn' ? tryConvert(longitud,Kilometro):longitud;
		const millaNautica = unidadMedida === 'Km' ? tryConvert(longitud,MillaNautica): longitud;
		return(
			<div className="container text-center margen"><br/>
				<h3 className="center fs-3 text-bold textColor">Convertir unidades de longitud</h3>
				<Hijo 
					unidadMedida="Km"
					longitud = {kilometro}
					onLongitudChange={this.handleChangeKilometro}
				/>
				<Hijo 
					unidadMedida="Mn"
					longitud = {millaNautica}
					onLongitudChange={this.handleChangeMillaNautica}
				/>
			<br/><br/><br/>
			</div>
		);
	}
}

export default Ancestro;