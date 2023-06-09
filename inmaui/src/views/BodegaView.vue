<template>
    <nav class="navbar navbar-custom py-3">
    <div class="container ">
        <span class="navbar-brand mb-0 px-3" style="font-family:arial;">Inventario </span>

        <button type="button " class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popupbodega"
                style="background-color:#00ADB5; border: #00ADB5; color: #f1f1f1"><span class="bi bi-plus-lg"></span>
            Nuevo Producto
        </button>
    </div>
</nav>


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
                        <input name="nombre" type="text" class="form-control"
                               placeholder="Ingrese Nombre Producto" required>
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


<div class="sidenav d-flex flex-column justify-content-between h-100">


    <div>
        <div >
            <a href="/bodega">

                <i class="bi bi-box2 fs-3"></i>
                Bodega
            </a>
        </div>
            <a href="/caja">

                <i class="bi bi-cart2 fs-1"></i>
                Caja
            </a>
        <div >
            <a href="/admin">
                <i class="bi bi-person-square fs-2"></i>
                Admin
            </a>
        </div>
    </div>


    <div class="container justify-content-between">
        <form>
            <a href="/landing" style="background-color: #00ADB5; border-color: #00ADB5">
                <i class="bi bi-box-arrow-right fs-2"></i>
                <h6>Salir</h6>
            </a>
        </form>
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
                <td >Pepsi</td>
                <td >01/01/2023</td>
                <td >Bebidas</td>
                <td >100</td>


                <td>
                    <a href="/modprod" class="btn btn-secondary"> Editar </a>
                    <a  class="btn btn-danger"> Eliminar </a>
                </td>
            </tr>
            <tr>
                <td >2</td>
                    <td >Helado</td>
                    <td >01/01/2023</td>
                    <td >Helados</td>
                    <td >30</td>


                <td>
                    <a href="/modprod" class="btn btn-secondary"> Editar </a>
                    <a  class="btn btn-danger"> Eliminar </a>
                </td>
            </tr>
            
            </tbody>
        </table>
    </div>

</div>
</template>

<script>
</script>

<style>
</style>