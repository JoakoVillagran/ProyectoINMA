<template>
    <NavBar tituloPag="Inventario" :inventario="true"></NavBar>


    <div class="modal fade" id="popupbodega">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Nuevo Producto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>

                        <div class="mb-3">
                            <label class="col-form-label">Nombre</label>
                            <input name="nombre" type="text" class="form-control" placeholder="Ingrese Nombre Producto"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Categoria</label>
                            <input name="categoria" type="text" class="form-control" placeholder="Ingrese Categoria"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Precio</label>
                            <input name="precio" type="text" class="form-control" placeholder="Ingrese Precio" required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Cantidad</label>
                            <input name="cantidad" type="text" class="form-control" placeholder="Ingrese Cantidad" required>
                        </div>


                        <div class="modal-footer">
                            <input type="submit" class="btn btn-primary" style="background-color:#00ADB5; border:#F6648C;">

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="main">
        <div class="container-fluid">
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


                        <td>
                            <a href="/modprod" class="btn btn-secondary"> Editar </a>
                            <a class="btn btn-danger"> Eliminar </a>
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


                        <td>
                            <a href="/modprod" class="btn btn-secondary"> Editar </a>
                            <a class="btn btn-danger"> Eliminar </a>
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


                        <td>
                            <a href="/modprod" class="btn btn-secondary"> Editar </a>
                            <a class="btn btn-danger"> Eliminar </a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: {
        NavBar,
    }

};
</script>

