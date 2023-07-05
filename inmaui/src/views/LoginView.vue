<template>
    <NavBar tituloPag="Inicio de sesion" :mostrarSidenav="false"></NavBar>

    <div class="container justify-content-center ">
        <div class="row justify-content-center">
            <div class="col-md-6 5">
                <div class="login-wrap p-4 p-md-5">
                    <form @submit.prevent="login">
                        <label class="label">Correo</label>
                        <div class="form-group">
                            <input type="text" class="form-control rounded-left" v-model="email"
                                placeholder="Ingrese su Email" required />
                        </div>
                        <p></p>

                        <div class="form-group mb-3">
                            <label class="label">Contrase&ntilde;a</label>
                            <input type="password" class="form-control" v-model="contrasena" name="contrasena"
                                placeholder="Ingrese su Contrase&ntilde;a" required />
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-outline-danger">
                                Iniciar Sesion
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
            email: '',
            contrasena: ''
        }
    },
    methods: {
        login() {
            const loginData = {
                email: this.email,
                contrasena: this.contrasena
            };

            axios.post('http://localhost:3000/login', loginData)
                .then(response => {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    this.$router.push('/admin');
                })
                .catch(error => {
                    if (error.response) {
                        // Manejar errores de respuesta del servidor
                        if (error.response.status === 404) {
                            alert('Usuario no encontrado');
                        } else if (error.response.status === 400) {
                            alert('Contraseña inválida');
                        } else {
                            console.error(error);
                        }
                    } else {
                        // Manejar errores de solicitud
                        console.error(error);
                    }
                });
        }
    }
};
</script>

<style></style>
