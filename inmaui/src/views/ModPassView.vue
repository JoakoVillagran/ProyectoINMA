<template>
    <NavBar tituloPag="Modificar Contraseña" :mostrarSidenav="false"></NavBar>

    <div class="container justify-content-center ">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <form @submit.prevent="guardarCambios">
                        <input type="hidden" v-model="usuario._id" />
                        <div class="form-group">
                            <label class="col-form-label">Contraseña</label>
                            <input type="password" class="form-control" v-model="contrasenaData.contrasena"
                                placeholder="Ingrese su Contraseña" required />
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Confirmar Contraseña</label>
                            <input type="password" class="form-control" v-model="contrasenaData.confirmarContrasena"
                                placeholder="Confirme su Contraseña" required />
                        </div>
                        <div v-if="contrasenaData.contrasena !== contrasenaData.confirmarContrasena" class="text-danger">
                            Las contraseñas no coinciden.
                        </div>

                        <div>
                            <button type="submit" class="btn btn-primary my-3"
                                style="background-color: #00ADB5; border: #00ADB5">Aceptar</button>
                            <a href="/admin" type="button" class="btn btn-danger">Cancelar</a>
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
            usuario: {
                _id: '',
                email: '',
                contrasena: '',
                nombre: '',
                rut: '',
                roles: [],
            },
            contrasenaData: {
                contrasena: '',
                confirmarContrasena: '',
            },
        };
    },
    mounted() {
        const usuarioId = this.$route.params.id;
        console.log(usuarioId);
        this.obtenerUsuario(usuarioId);
    },
    methods: {
        obtenerUsuario(usuarioId) {
            axios
                .get(`http://localhost:3000/usuarios/${usuarioId}`)
                .then(response => {
                    this.usuario = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        guardarCambios() {
            if (this.contrasenaData.contrasena !== this.contrasenaData.confirmarContrasena) {
                return;
            }

            const data = {
                contrasena: this.contrasenaData.contrasena,
            };

            axios
                .put(`http://localhost:3000/modpass/${this.usuario._id}`, data)
                .then(() => {
                    this.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script>
  