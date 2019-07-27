import React from 'react';

const climaInfo = props => {

    console.log(props);

    return (
        <div>
            {
                props.error &&

                <div className="alert alert-danger">
                    <p>
                        {props.error}
                    </p>
                </div>
            }
            {
                props.temperatura ?
                    <div className="card card-body">
                        <p>
                            Ubicación: {props.ciudad}, {props.pais}
                        </p>
                        <p>
                            Temperatura: {props.temperatura} C, {props.descripcion}
                        </p>
                        <p>
                            Humedad: {props.humedad}
                        </p>
                        <p>
                            Velocidad Viento: {props.velocidad_viento}
                        </p>
                    </div>
                    :
                    <div className="card card-body">
                        <p>No se ha hecho una petición</p>
                    </div>
            }
        </div>
    );
}

export default climaInfo;
