<template>
    <NavBar tituloPag="Modificar Producto" :mostrarSidenav="false"></NavBar>

    <div class="container justify-content-center">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <form @submit.prevent="guardarCambios">
                        <input type="hidden" v-model="producto._id" />
                        <div class="mb-3">
                            <label class="col-form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="producto.nombre"
                                placeholder="Ingrese Nombre Producto" required />
                        </div>

                        <div class="mb-3">
                            <label class="col-form-label">Categoria</label>
                            <input type="text" class="form-control" v-model="producto.categoria"
                                placeholder="Ingrese Categoria" required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Precio</label>
                            <input type="number" class="form-control" v-model="producto.precio" placeholder="Ingrese Precio"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Cantidad</label>
                            <input type="number" class="form-control" v-model="producto.cantidad"
                                placeholder="Ingrese Cantidad" required>
                        </div>

                        <div class="modal-footer">
                            <a href="/bodega" type="button" class="btn btn-danger">Cancelar</a>
                            <button type="submit" class="btn btn-primary"
                                style="background-color:#00ADB5; border:#F6648C;">Aceptar
                            </button>
                        </div>
                    </form>
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
            producto: {
                _id: '',
                nombre: '',
                categoria: '',
                precio: '',
                cantidad: ''
            },
        };
    },
    mounted() {
        const productoId = this.$route.params.id;
        this.obtenerProducto(productoId);
    },
    methods: {
        obtenerProducto(productoId) {
            axios.get(`http://localhost:3000/bodega/${productoId}`)
                .then(response => {
                    this.producto = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        guardarCambios() {
            axios.put(`http://localhost:3000/modprod/${this.producto._id}`, this.producto)
                .then(() => {
                    this.$router.push('/bodega');
                })
                .catch(error => {
                    console.error(error);
                    alert('Error al guardar los cambios');
                });
        }
    }
};
</script>
  