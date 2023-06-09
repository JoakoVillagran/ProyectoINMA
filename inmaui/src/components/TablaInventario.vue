<template>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Pepsi</td>
                <td>01/01/2023</td>
                <td>Bebidas</td>
                <td>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning" style="width: 25%">25</div>
                    </div>
                </td>
                <td v-if="mostrarBotonesBodega">
                    <a href="/modprod" class="btn btn-secondary">Editar</a>
                    <a class="btn btn-danger">Eliminar</a>
                </td>
                <td v-else>
                    <a class="btn btn-secondary"> Vender </a>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Helado</td>
                <td>01/01/2023</td>
                <td>Helados</td>
                <td>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 100%">100</div>
                    </div>
                </td>


                <td v-if="mostrarBotonesBodega">
                    <a href="/modprod" class="btn btn-secondary"> Editar </a>
                    <a class="btn btn-danger"> Eliminar </a>
                </td>
                <td v-else>
                    <a class="btn btn-secondary"> Vender </a>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Papas fritas</td>
                <td>01/01/2023</td>
                <td>Snack</td>
                <td>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style="width: 5%">0</div>
                    </div>
                </td>

                <td v-if="mostrarBotonesBodega">
                    <a href="/modprod" class="btn btn-secondary"> Editar </a>
                    <a class="btn btn-danger"> Eliminar </a>
                </td>
                <td v-else>
                    <a class="btn btn-secondary"> Vender </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    name: 'TablaInventario',
    props: {
        mostrarBotonesBodega: {
            type: Boolean,
            default: true
        },
    }
};
</script>
  