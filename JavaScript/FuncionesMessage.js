function crearMensajes() {
    var datos = {
        id: $('#MessageID').val(),
        messagetext: $('#MessageText').val(),
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Mensaje creado con éxito ' + xhr.status);
            limpiarFormularioMensajes();
        }
    });
}

function editarMensajes() {
    var datos = {
        id: $('#MessageID').val(),
        messagetext: $('#MessageText').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado con éxito ' + xhr.status);
            limpiarFormularioMensajes();
        }
    });
}

function borrarMensajes() {
    var datos = {
        id: $('#MessageID').val(),
        messagetext: $('#MessageText').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Mensaje borrado con éxito ' + xhr.status);
            limpiarFormularioMensajes();
        }
    });
}

function consultarMensajesTodo() {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#MessageTabla").empty();
            $("#MessageTabla").append("<tr>");
            $("#MessageTabla").append("<th>Id</th>");
            $("#MessageTabla").append("<th>Mensajes</th>");
            $("#MessageTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#MessageTabla").append("<tr>");
                $("#MessageTabla").append("<td>" + json.items[i].id + "</td>");
                $("#MessageTabla").append("<td>" + json.items[i].messagetext + "</td>");
                $("#MessageTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarMensajesSeleccion(ConsultMessageID) {
    $.ajax({
        url: 'https://g4674888f4c4566-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + ConsultMessageID.val(),
        dataType: 'json',
        type: 'GET',
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#MessageTabla").empty();
            $("#MessageTabla").append("<tr>");
            $("#MessageTabla").append("<th>Id</th>");
            $("#MessageTabla").append("<th>Mensaje</th>");
            $("#MessageTabla").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#MessageTabla").append("<tr>");
                $("#MessageTabla").append("<td>" + json.items[i].id + "</td>");
                $("#MessageTabla").append("<td>" + json.items[i].messagetext + "</td>");
                $("#MessageTabla").append("</tr>");
            }
            console.log(json)
        }
    });
}

function limpiarFormularioMensajes() {
    $('#MessageID').val("");
    $('#MessageText').val("");
}
