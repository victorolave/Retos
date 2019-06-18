import React, { Component } from 'react';

import ClimaInfo from './Components/ClimaInfo';
import ClimaForm from './Components/ClimaForm';

class App extends Component {

    state = {
        temperatura: '',
        descripcion: '',
        humedad: '',
        velocidad_viento: '',
        ciudad: '',
        pais: '',
        error: ''

    };

    getClima = async e => {
        e.preventDefault();

        const { ciudad, pais } = e.target.elements;

        const ciudadValue = ciudad.value;
        const paisValue = pais.value;

        if (ciudadValue && paisValue) {
            const key = require("./keys").climaKey;

            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appId=${key}&units=metric`;

            const res = await fetch(API_URL);
            const data = await res.json();

            this.setState({
                temperatura: data.main.temp,
                descripcion: data.weather[0].description,
                humedad: data.main.humidity,
                velocidad_viento: data.wind.speed,
                ciudad: data.name,
                pais: data.sys.country,
                error: null
            })
        }
        else
        {
            this.setState({error: 'Por favor ingrese una ciudad y su pais'})
        }


    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <ClimaForm getClima={this.getClima} />
                        <ClimaInfo {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;