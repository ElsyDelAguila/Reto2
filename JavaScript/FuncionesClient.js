function crearClientes() {
    var datos = {
        id: $('#ClientID').val(),
        name: $('#ClientName').val(),
        email: $('#ClientEmail').val(),
        age: $('#ClientAge').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Cliente creado con éxito ' + xhr.status);
            limpiarFormularioClientes();
        }
    });
}

function editarClientes() {
    var datos = {
        id: $('#ClientID').val(),
        name: $('#ClientName').val(),
        email: $('#ClientEmail').val(),
        age: $('#ClientAge').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado con éxito ' + xhr.status);
            limpiarFormularioClientes();
        }
    });
}
function borrarClientes() {
    var datos = {
        id: $('#ClientID').val(),
        name: $('#ClientName').val(),
        email: $('#ClientEmail').val(),
        age: $('#ClientAge').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Cliente borrado con éxito ' + xhr.status);
            limpiarFormularioClientes();
        }
    });
}

function consultarClienteTodo() {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#ClientTabla").empty();
            $("#ClientTabla").append("<tr>");
            $("#ClientTabla").append("<th>Id</th>");
            $("#ClientTabla").append("<th>Nombre</th>");
            $("#ClientTabla").append("<th>Correo</th>");
            $("#ClientTabla").append("<th>Edad</th>>");
            $("#ClientTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#ClientTabla").append("<tr>");
                $("#ClientTabla").append("<td>" + json.items[i].id + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].name + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].email + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].age + "</td>");
                $("#ClientTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarClientesSeleccion(ClientConsultaID) {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + ClientConsultaID.val(),
        dataType: 'json',
        type: 'GET',
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#ClientTabla").empty();
            $("#ClientTabla").append("<tr>");
            $("#ClientTabla").append("<th>Id</th>");
            $("#ClientTabla").append("<th>Nombre</th>");
            $("#ClientTabla").append("<th>Correo</th>");
            $("#ClientTabla").append("<th>Edad</th>>");
            $("#ClientTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#ClientTabla").append("<tr>");
                $("#ClientTabla").append("<td>" + json.items[i].id + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].name + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].email + "</td>");
                $("#ClientTabla").append("<td>" + json.items[i].age + "</td>");
                $("#ClientTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function limpiarFormularioClientes() {
    $('#ClientID').val("");
    $('#ClientName').val("");
    $('#ClientEmail').val("");
    $('#ClientAge').val("");
}
