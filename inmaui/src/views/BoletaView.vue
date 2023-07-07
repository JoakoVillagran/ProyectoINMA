<template>
    <div>
        <NavBar tituloPag="Boletas" :inventario="false"></NavBar>

        <div class="main my-3">
            <div class="container-fluid">
                <div v-for="(boleta, index) in boletas" :key="boleta.id">
                    <h4>Boleta {{ index + 1 }}</h4>
                    <p>Fecha de Creación de Boleta: {{ formatearFecha(boleta.createdAt) }}</p>

                    <h5>Productos:</h5>
                    <ul>
                        <li v-for="producto in boleta.productos" :key="producto.id">
                            Nombre de producto: {{ producto.nombre }} - Cantidad: {{ producto.cantidad }} - Precio Total: ${{
                                producto.precio*producto.cantidad }}
                        </li>
                    </ul>
                    <p>Total: ${{ boleta.totalVenta }}</p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

export default {
    components: {
        NavBar,
    },
    data() {
        return {
            boletas: [],
        };
    },
    mounted() {
        this.listarBoletas();
    },
    methods: {
        listarBoletas() {
            axios.get('http://localhost:3000/boleta')
                .then(response => {
                    this.boletas = response.data;
                    console.log(this.boletas)
                })
                .catch(error => {
                    console.error(error);
                    alert(error.response.data.message)
                });
        },
        formatearFecha(fecha) {
            const fechaObj = new Date(fecha);
            const dia = fechaObj.getDate();
            const mes = fechaObj.getMonth() + 1;
            const anio = fechaObj.getFullYear();

            const diaFormateado = dia.toString().padStart(2, '0');
            const mesFormateado = mes.toString().padStart(2, '0');

            return `${diaFormateado}/${mesFormateado}/${anio}`;
        },
    },
};
</script>
