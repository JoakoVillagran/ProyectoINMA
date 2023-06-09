<template>
    <NavBar tituloPag="Vender Producto"></NavBar>

    <div class="main">
        <div class="container-fluid">
            <TablaInventario :mostrarBotonesBodega="false"></TablaInventario>
        </div>



        <div class="container-fluid">
            <h3>Boleta</h3>

            <table class="table">
                <thead>
                    <tr>

                        <th>Nombre Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Quitar Producto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Helado</td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                        <td> <a class="btn btn-danger"> Eliminar </a></td>
                    </tr>
                </tbody>

            </table>


            <div style="text-align: right; ">
                <a class="btn btn-danger"> limpiar </a>
                <button type="button" class="btn btn-success"
                    style="background-color:#05EA53; border: #05EA53">Finalizar</button>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import TablaInventario from '../components/TablaInventario.vue';

export default {
    components: {
        NavBar,
        TablaInventario,
    }

};
</script>
