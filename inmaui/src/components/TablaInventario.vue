<template>
    <div>
        <input class="my-3" type="text" v-model="filtroNombre" placeholder="Buscar por nombre">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productosFiltrados" :key="producto._id">
                    <td>{{ producto.nombre }}</td>
                    <td>{{ formatearFecha(producto.createdAt) }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>
                        <div class="progress" role="progressbar" :aria-valuenow="producto.cantidad" aria-valuemin="0"
                            :aria-valuemax="producto.maxCantidad">
                            <div :class="['progress-bar', getProgressColor(producto.cantidad, producto.maxCantidad)]"
                                :style="getProgressBarStyle(producto.cantidad, producto.maxCantidad)">
                                {{ producto.cantidad }}
                            </div>
                        </div>
                    </td>
                    <td v-if="mostrarBotonesBodega">
                        <button class="btn btn-secondary" style="margin-right: 5px;"
                            @click="modificarProducto(producto._id)">
                            Editar
                        </button>
                        <button class="btn btn-danger" @click="eliminarProducto(producto._id)">
                            Eliminar
                        </button>
                    </td>
                    <td v-else>
                        <div class="input-group">
                            <input type="number" class="form-control" v-model="producto.cantidadVender" min="0"
                                :max="producto.cantidad" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" @click="venderProducto(producto)">Vender</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'TablaInventario',
    props: {
        mostrarBotonesBodega: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            productos: [],
            filtroNombre: ''
        };
    },
    mounted() {
        this.obtenerProductos();
    },
    methods: {
        obtenerProductos() {
            axios.get('http://localhost:3000/bodega')
                .then(response => {
                    this.productos = response.data.map(producto => {
                        producto.maxCantidad = producto.cantidad;
                        producto.cantidadVender = 0;
                        return producto;
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getProgressColor(cantidad, maxCantidad) {
            if (cantidad === 0) {
                return 'bg-danger';
            } else if (cantidad === maxCantidad) {
                return 'bg-success';
            } else {
                return 'bg-warning';
            }
        },
        getProgressBarStyle(cantidad, maxCantidad) {
            const progress = (cantidad / maxCantidad) * 100;
            return `width: ${progress}%`;
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
        eliminarProducto(productoId) {
            axios.delete(`http://localhost:3000/bodega/${productoId}`)
                .then(response => {
                    console.log(response.data);
                    this.obtenerProductos();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        modificarProducto(productId) {
            this.$router.push(`modprod/${productId}`);
        },
        venderProducto(producto) {
            if (producto.cantidadVender > 0) {
                const productoId = producto._id;
                const cantidadVendida = producto.cantidadVender;

                axios.post('http://localhost:3000/venta', {
                    productoId,
                    cantidad: cantidadVendida,
                })
                    .then(response => {
                        console.log(response.data);
                        producto.cantidad -= cantidadVendida;
                        producto.cantidadVender = 0;
                        this.$emit('producto-vendido');
                    })
                    .catch(error => {
                        alert(error.response.data.message);
                    });
            }
        },

    },
    computed: {
        productosFiltrados() {
            if (this.filtroNombre === '') {
                return this.productos;
            } else {
                const nombreFiltrado = this.filtroNombre.toLowerCase();
                return this.productos.filter(producto =>
                    producto.nombre.toLowerCase().includes(nombreFiltrado)
                );
            }
        }
    }
};
</script>