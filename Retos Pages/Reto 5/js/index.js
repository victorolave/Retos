new Vue({
	el: '#app',
	data: {
		celulares: [
			{
				'celular': 34589612,
				'nombre': 'IPHONE 8',
				'precio': '1500000'
			},
			{
				'celular':32478594,
				'nombre': 'IPHONE X',
				'precio': '2000000'
			},
			{
				'celular': 35681207,
				'nombre': 'HUAWEI P30 L',
				'precio': '1480000'
			},
            {
				'celular':35468990,
				'nombre': 'HUAWEI MATE PRO',
				'precio': '2200000'
            },
            {
				'celular':33980102,
				'nombre': 'SAMSUNG A30',
				'precio': '700000'
            },
            {
				'celular':33908654,
				'nombre': 'SAMSUNG S10',
				'precio': '2300000'
			},

		],

		factura: {
			celularSeleccionado: {
				celular: '',
				cantidad: 0
			},
		celularesAgregados: []
		},
		total: 0
	},
	methods: {
		infoProductoSeleccionado: function () {
			var celular = this.factura.celularSeleccionado.celular;

			if (celular) {
				info = this.celulares.find(function (lista) {
					if (lista.celular == celular) {
						return lista;
					}
				});

				this.factura.celularSeleccionado.nombre = info.nombre;
				this.factura.celularSeleccionado.precio = info.precio;
			}
		},

		agregarALista: function () {
			var celularSeleccionado = this.factura.celularSeleccionado,
				existe = this.factura.celularesAgregados.find(function (el) {
					return el.celular == celularSeleccionado.celular;
				});

			if (!existe) {
				this.factura.celularesAgregados.push({
					celular: celularSeleccionado.celular,
					nombre: celularSeleccionado.nombre,
					precio: celularSeleccionado.precio,
					cantidad: celularSeleccionado.cantidad
				});
				this.calcularTotal();
			}
		},

		calcularTotal: function () {
			if (this.factura) {

				let self = this;

				this.factura.celularesAgregados.forEach(function (el) {
					self.total += el.cantidad * el.precio;

				});
				console.log("total " + this.total);

			}
		}

	}, filters: {
		calcularIva: function (precio) {
			return (precio * 0.19) + precio
		}
	}
});
