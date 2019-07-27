import React from 'react';

const climaForm = props => 
    <div className="card card-body">
        <h1 className="text-center">Clima de Ciudades</h1>
        <h4 className="text-center">Ingrese la ciudad de la que desea conocer el clima y su pais</h4>
        <h5 className="text-center">Por ejemplo: Popayán, CO</h5>
        <form onSubmit = {props.getClima}>
            <div className="form-group">
                <input type="text" name="ciudad" placeholder="Nombre de Ciudad"
                    className="form-control" autoFocus />
            </div>
            <div className="form-group">
                <input type="text" name="pais" placeholder="Nombre de Pais"
                    className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Obtener Clima
            </button>
        </form>
    </div>

export default climaForm;