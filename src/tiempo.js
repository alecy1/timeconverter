import React from 'react'

function Anios(props){
	const Anios = props.tiempo;
	const Meses = (Anios*12);
	const TotalDiasEnAnio= 365;
	const DiasAlaSemana =7;
	const Semanas = ((Anios*TotalDiasEnAnio)/DiasAlaSemana);
	const Dias = (Anios*365);
	const Horas = ((Anios*365)*24);
	const Minutos = ((((Anios*365)*24)*60));
	const Segundos = (((((Anios*365)*24)*60)*60));
	const Milisegundos = ((((((Anios*365)*24)*60)*60)*1000));
	return (
		<div className="row estilo">
			<div className='col'>
				<span htmlFor="años" className="fw-bold textColor">Meses: </span><span htmlFor="años" className="textColor1">{Meses}</span>
				<span htmlFor="semanas" className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
				<span htmlFor="dias" className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
				<span htmlFor="horas" className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
				<span htmlFor="minutos" className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
				<span htmlFor="segundos" className="fw-bold textColor">Segundos: </span><span className="textColor1">{Segundos}</span>
				<span htmlFor="Milisegundos" className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>
			</div>
		</div>
	);
}

function Meses(props){
	const Meses=props.tiempo;
	const Anios = (Meses/12);
	const Semanas = (Meses*4);
	const Dias = ((365/12)*Meses);
	const Horas = (((365/12)*Meses)*24);
	const Minutos = ((((365/12)*Meses)*24)*60);
	const Segundos = (((((365/12)*Meses)*24)*60)*60);
	const Milisegundos = ((((((365/12)*Meses)*24)*60)*60)*1000);
	return(
		<div className="row estilo">
			<div className='col'>
				<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
				<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
				<span className="fw-bold textColor">Dias: </span><span className="textColor1"> {Dias}</span>
				<span className="fw-bold textColor">Horas: </span><span className="textColor1"> {Horas}</span>
				<span className="fw-bold textColor">Minutos: </span><span className="textColor1"> {Minutos}</span>
				<span className="fw-bold textColor">Segundos: </span><span className="textColor1"> {Segundos}</span>
				<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1"> {Milisegundos}</span>
			</div>		
		</div>
		);
}

function Semana(props){
	const Semana = props.tiempo;
	const Anios = (Semana/52.179);
	const Meses = (Semana/4);
	const Dias = (Semana*7);
	const Horas= ((Semana*7)*24);
	const Minutos= (((Semana*7)*24)*60);
	const Segundos= ((((Semana*7)*24)*60)*60);
	const Milisegundos= (((((Semana*7)*24)*60)*60)*1000);
	return (
		<div className="row estilo">
			<div className='col'>
				<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
				<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
				<span className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
				<span className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
				<span className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
				<span className="fw-bold textColor">Segundos: </span><span className="textColor1">{Segundos}</span>
				<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>	
			</div>
		</div>
	);
}

function Dias(props){
	const Dias = props.tiempo;
	const Anios = (Dias/365);
	const Meses = (Dias/(365/12));
	const Semanas = (Dias/7);
	const Horas = (Dias*24);
	const Minutos = ((Dias*24)*60);
	const Segundos = ((((Dias*24)*60)*60));
	const Milisegundos = (((((Dias*24)*60)*60)*1000));
	return (
		<div className="row estilo">
			<div className='col'>
				<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
				<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
				<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
				<span className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
				<span className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
				<span className="fw-bold textColor">Segundos: </span><span className="textColor1">{Segundos}</span>
				<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>
			</div>
		</div>
	);
}
function Horas(props){
	const Horas = props.tiempo;
	const Anios = ((Horas/24)/365);
	const Meses = ((Horas/730));
	const Semanas = ((Horas/168));
	const Dias = ((Horas/24));
	const Minutos = ((Horas*60));
	const Segundos = ((Horas*3600));
	const Milisegundos = ((Horas*3.6e+6));
	return( 
	<div className="row estilo">
		<div className='col'>
			<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
			<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
			<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
			<span className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
			<span className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
			<span className="fw-bold textColor">Segundos: </span><span className="textColor1">{Segundos}</span>
			<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>
		</div>
	</div>
	);
}
function Minutos(props){
	const Minutos=props.tiempo;
	const Anios = (Minutos/526000);
	const Meses = (Minutos/43800);
	const Semanas = (Minutos/10080);
	const Dias = (Minutos/1440);
	const Horas = (Minutos/60);
	const Segundos= (Minutos*60);
	const Milisegundos = (Minutos*60000);
	return(
	 <div className="row estilo">
		<div className='col'>
			<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
			<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
			<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
			<span className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
			<span className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
			<span className="fw-bold textColor">Segundos: </span><span className="textColor1">{Segundos}</span>
			<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>
		</div>
	</div>
	);
}

function Segundos(props){
	const Segundos=props.tiempo;
	const Anios = (Segundos/3.156e+7);
	const Meses = (Segundos/2.628e+6);
	const Semanas = (Segundos/604800);
	const Dias = (Segundos/86400);
	const Horas = (Segundos/3600);
	const Minutos = (Segundos/60);
	const Milisegundos = (Segundos*1000);
	return (
	<div className="row estilo">
		<div className='col'>
			<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
			<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
			<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
			<span className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
			<span className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
			<span className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
			<span className="fw-bold textColor">Milisegundos: </span><span className="textColor1">{Milisegundos}</span>
		</div>
	</div>
	);
}

function Milisegundos(props){
	const Milisegundos=props.tiempo;
	const Anios = Milisegundos/3.156e+10;
	const Meses = Milisegundos/2.628e+9;
	const Semanas = Milisegundos/2.628e+9;
	const Dias = Milisegundos/8.64e+7;
	const Horas = Milisegundos/3.6e+6;
	const Minutos = Milisegundos/60000;
	return(
		<div className="row estilo">
			<div className='col'>
				<span className="fw-bold textColor">Años: </span><span className="textColor1">{Anios}</span>
				<span className="fw-bold textColor">Meses: </span><span className="textColor1">{Meses}</span>
				<span className="fw-bold textColor">Semanas: </span><span className="textColor1">{Semanas}</span>
				<span className="fw-bold textColor">Dias: </span><span className="textColor1">{Dias}</span>
				<span className="fw-bold textColor">Horas: </span><span className="textColor1">{Horas}</span>
				<span className="fw-bold textColor">Minutos: </span><span className="textColor1">{Minutos}</span>
			</div>
		</div>
	);
}
function Imprime(props){
	const unidadTiempo = props.unidadTiempo;
	const tiempo = props.tiempo;
	if(unidadTiempo==="anios"||unidadTiempo==""){
		return <Anios tiempo={tiempo}/>
	}
	else if(unidadTiempo==="meses"){
		return  <Meses tiempo={tiempo}/>
	}else if(unidadTiempo==="semana"){
		return <Semana tiempo={tiempo}/>
	}
	else if(unidadTiempo==="dias"){
		return <Dias tiempo={tiempo} />
	}
	else if(unidadTiempo==="horas"){
		return <Horas tiempo={tiempo}/>
	}
	else if(unidadTiempo==="minutos"){
		return <Minutos tiempo={tiempo}/>
	}
	else if(unidadTiempo==="segundos"){
		return <Segundos tiempo={tiempo} />
	}
	else if(unidadTiempo==="milisegundos"){
		return <Milisegundos tiempo={tiempo}/>
	}
	
}

class Tiempo extends React.Component {
	constructor(props){
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {tiempo:'', unidadTiempo:''};
	}
	handleInputChange(event){
		const target = event.target;
		const name = target.name;
		this.setState({
			[name]: target.value
		});
	}

render(){
	const tiempo = this.state.tiempo;
	const unidadTiempo = this.state.unidadTiempo;
	return(
		<>
		<div className="container text-center margen">
		<span className="center fs-3 text-bold textColor">Convertir unidades de tiempo</span>
		<fieldset className="container-xxl">
			<legend className="fs-1 text-center text-bold textColor"></legend>
			<label htmlFor="tiempo" className="form-label textColor">Escribe la cantidad de tiempo</label>
				<input name="tiempo" type="text" value={this.state.tiempo} onChange={this.handleInputChange} className="form-control" />
			<label htmlFor="unidadTiempo" className="form-label textColor">Selecciona la unidad de tiempo</label>
			<select name="unidadTiempo" value={this.state.unidadTiempo} onChange={this.handleInputChange} className="form-select textColor">
				<option value="anios">Años</option>
				<option value="meses">Meses</option>
				<option value="semana">Semanas</option>
				<option value="dias">Dias</option>
				<option value="horas">Horas</option>
				<option value="minutos">Minutos</option>
				<option value="segundos">Segundos</option>
				<option value="milisegundos">Milisegundos</option>
			</select>
		</fieldset>
		<Imprime unidadTiempo={unidadTiempo} tiempo={tiempo} />
		</div>
		</>
		);
}
}

export default Tiempo;


