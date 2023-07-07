<template>
    <NavBar tituloPag="Vender Producto"></NavBar>

    <div class="main">
        <div class="container-fluid">
            <TablaInventario :mostrarBotonesBodega="false"></TablaInventario>
        </div>

        <div class="container-fluid">
            <h3>Carrito de Compra</h3>

            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Quitar Producto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto in productos" :key="producto._id">
                        <td>{{ producto.nombre }}</td>
                        <td>{{ producto.cantidad }}</td>
                        <td>{{ producto.precio }}</td>
                        <td>${{ calcularTotal(producto) }}</td>
                        <td>
                            <a class="btn btn-danger">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style="text-align: right;">
                <a class="btn btn-danger">Limpiar</a>
                <button type="button" class="btn btn-success" style="background-color:#05EA53; border: #05EA53"
                    @click="guardarBoleta">
                    Finalizar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import TablaInventario from '../components/TablaInventario.vue';
import axios from 'axios';

export default {
    components: {
        NavBar,
        TablaInventario,
    },
    data() {
        return {
            productos: [], 
        };
    },
    mounted() {
        this.obtenerProductosCarrito();
    },
    methods: {
        obtenerProductosCarrito() {
            axios.get('http://localhost:3000/carrito') 
                .then(response => {
                    this.productos = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        calcularTotal(producto) {
            return producto.precio * producto.cantidad;
        },
        guardarBoleta() {
            axios.post('http://localhost:3000/guardarBoleta') 
                .then(response => {
                    console.log(response.data);
                    
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script>
