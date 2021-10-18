function crearCubiculo() {
    var datos = {
        id: $('#CubID').val(),
        target: $('#CubTarget').val(),
        capacity: $('#CubCapacity').val(),
        category_id: $('#CubCategory').val(),
        name: $('#CubName').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Cubículo creado con éxito ' + xhr.status);
            limpiarFormularioCubiculo();
        }
    });
}

function editarCubiculo() {
    var datos = {
        id: $('#CubID').val(),
        target: $('#CubTarget').val(),
        capacity: $('#CubCapacity').val(),
        category_id: $('#CubCategory').val(),
        name: $('#CubName').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado con éxito ' + xhr.status);
            limpiarFormularioQuadbike();
        }
    });
}
function borrarCubiculo() {
    var datos = {
        id: $('#CubID').val(),
        target: $('#CubTarget').val(),
        capacity: $('#CubCapacity').val(),
        category_id: $('#CubCategory').val(),
        name: $('#CubName').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library',
        data: datosEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Cubículo borrado con éxito ' + xhr.status);
            limpiarFormularioCubiculo();
        }
    });
}

function consultarCubiculoTodo() {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#CubTabla").empty();
            $("#CubTabla").append("<tr>");
            $("#CubTabla").append("<th>Id</th>");
            $("#CubTabla").append("<th>Destinatario</th>");
            $("#CubTabla").append("<th>Capacidad</th>");
            $("#CubTabla").append("<th>Categoria</th>>");
            $("#CubTabla").append("<th>Nombre</th>>");
            $("#CubTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#CubTabla").append("<tr>");
                $("#CubTabla").append("<td>" + json.items[i].id + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].target + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].capacity + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].category_id + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].name + "</td>");
                $("#CubTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarCubiculoSeleccion(CubConsultaID) {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library/' + CubConsultaID.val(),
        dataType: 'json',
        type: 'GET',
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#CubTabla").empty();
            $("#CubTabla").append("<tr>");
            $("#CubTabla").append("<th>Id</th>");
            $("#CubTabla").append("<th>Destinatario</th>");
            $("#CubTabla").append("<th>Capacidad</th>");
            $("#CubTabla").append("<th>Categoria</th>>");
            $("#CubTabla").append("<th>Nombre</th>>");
            $("#CubTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#CubTabla").append("<tr>");
                $("#CubTabla").append("<td>" + json.items[i].id + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].target + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].capacity + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].category_id + "</td>");
                $("#CubTabla").append("<td>" + json.items[i].name + "</td>");
                $("#CubTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function limpiarFormularioCubiculo() {
    $("#CubID").val("");
    $("#CubTarget").val("");
    $("#CubCapacity").val("");
    $("#CubCategory").val("");
    $("#CubName").val("");
}
