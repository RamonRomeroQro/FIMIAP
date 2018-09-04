{"changed":true,"filter":false,"title":"7script.js","tooltip":"/DAW/BackEnd_PHP/js/7script.js","value":"$(document).ready(function() {\n    \n    \n    \n    $('.modal').modal();\n    if ((document.getElementById('descripcionimagen')) && (document.getElementById('descripcionimagen').value == \"\") && (document.getElementById('nombrearchivo').value == \"\")) {\n        $('#ocultardescripcion').hide();\n    }\n    \n    if (document.getElementById('listaNoticias')) {\n           despliegaNoticias(1);\n    }\n    \n    if (document.getElementById('talleresDeAlumna')) {\n        $(\"#talleresDeAlumna\").hide();\n    }\n    \n    if (document.getElementById('imagenesGaleria')) {\n        cargarImagenesGaleria();\n    }\n    \n   \n    \n    if (document.getElementById('hideable')) {\n        $(\"#hideable\").hide();\n    }\n    \n    $(\"#nombreImagenGaleria\").change(function() {\n        var file = document.getElementById('imagenGaleria').files[0];\n        if(file.size > 25165824) { // 24 MB \n            alert(\"Archivo demasiado grande. El máximo es de 24 MB\");\n            document.getElementById('imagenGaleria').value=\"\";\n            document.getElementById('nomreImagenGaleria').value=\"\";\n        } else {\n            $(\"#hideable\").show(1000);\n        }\n    });\n        \n    \n    //Mostrar y ocultar descripción de imagen\n    $('#nombrearchivo').change(function() {\n        var file = document.getElementById('imagennoticia').files[0];\n        if(file.size > 25165824) { // 24 MB \n            alert(\"Archivo demasiado grande. El máximo es de 24 MB\");\n            document.getElementById('imagennoticia').value=\"\";\n            document.getElementById('nombrearchivo').value=\"\";\n        } else {\n            if (document.getElementById('imagennoticia').value == \"\") {\n               $('#ocultardescripcion').hide('fold');\n                $('#descripcionimagen').css('value', \"\");\n            } else {\n                $('#ocultardescripcion').show('fold');\n            }\n        }\n    });\n    \n    //Descartar imagen seleccionada por el usuario y limpiar campos\n    $('#descartarImagen').click(function() {\n       $('#ocultardescripcion').hide('fold');\n        document.getElementById('descripcionimagen').value =\"\";\n        document.getElementById('imagennoticia').value=\"\";\n        document.getElementById('nombrearchivo').value=\"\";\n    });\n    \n});\n\n\nfunction confirmarEliminacionNoticia(id) {\n    $('#confirmar').modal('open');\n    document.getElementById('botonEliminar').onclick = function() {eliminarNoticia(id);};\n}\n\nfunction eliminarNoticia(id) {\n    $.ajax({url: \"eliminarNoticia.php?id=\"+id, success: function(){\n            $('#exito').modal('open');\n        }\n    });\n    $.ajax({url: \"ajax/listaNoticias.php\", success: function(result){\n            $('#tablaNoticias').html(result);\n        }\n    });\n    \n}\n\n\n  /*-------------------- USUARIO --------------------------*/\n  \nfunction confirmarEliminacionUsuario(id) {\n    $('#confirmar').modal('open');\n    document.getElementById('botonEliminar').onclick = function() {eliminarUsuario(id);};\n}\n\nfunction eliminarUsuario(id) {\n    $.ajax({url: \"eliminarUsuario.php?id=\"+id, success: function(){\n            $('#exito').modal('open');\n        }\n    });\n}\n\n//regresa informacion del usuario con id = $id\nfunction mostrarUsuario(id){\n    window.location.href = 'https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/consultarInfo_usuario.php?id='+id;\n}\n\n\n   /*----------- TERMINA USUARIOS------------*/\n   \n   /*-------------ALUMNAS-------------*/\n   \nfunction confirmarEliminacionAlumna(id) {\n    $('#confirmar').modal('open');\n    document.getElementById('botonEliminar').onclick = function() {eliminarAlumna(id);};\n}\n\nfunction eliminarAlumna(id) {\n    $.ajax({url: \"eliminarAlumno.php?id=\"+id, success: function(){\n            $('#exito').modal('open');\n        }\n    });\n}\n\n\n\nfunction mostrarInformacion(id){\n    window.location.href = 'https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/mostrar_infoAlumnas.php?id='+id;\n}\n\n\n/*-----------TERMINA ALUMNAS-----------*/\n\n\nfunction despliegaNoticias(pagina) {\n    var noticiasporpagina = 5;\n    var request = getRequestObject();\n    if (request != null) {\n        var url = 'ajax/desplegarNoticias.php';\n        request.open('GET',url,true);\n        request.onreadystatechange = \n            function() {\n                if (request.readyState == 4) {\n                    var ajaxResponse = document.getElementById(\"listaNoticias\");\n                    var arregloNoticias = request.response;\n                    arregloNoticias  = JSON.parse(arregloNoticias);\n                    var noticiainicial = (pagina-1)*noticiasporpagina;\n                    var lista = \"\";\n                    var i= noticiainicial;\n                    while (i<(noticiainicial+noticiasporpagina) && arregloNoticias[i]) {\n                        lista+= arregloNoticias[i];\n                        i++;\n                    }\n                    ajaxResponse.innerHTML = lista;\n                }\n        };\n        request.send();\n    }\n    \n    $('.active').removeClass('active');\n    $('#'+pagina).addClass('active');\n}\n\nfunction siguientesPaginas() {\n    \n}\n\nfunction paginasAnteriores() {\n   \n}\n\nfunction getRequestObject() {\n  // Asynchronous objec created, handles browser DOM differences\n\n  if(window.XMLHttpRequest) { \n    // Mozilla, Opera, Safari, Chrome IE 7+\n    return (new XMLHttpRequest());\n  }\n  else if (window.ActiveXObject) {\n    // IE 6-\n    return (new ActiveXObject(\"Microsoft.XMLHTTP\"));\n  } else {\n    // Non AJAX browsers\n    return(null);\n  }\n}\n\nfunction despliegaLista(){\n    var request = getRequestObject();\n    if (request!=null) {\n        var userInput = document.getElementById(\"userInput\");\n        var url = 'ajax.php?pattern='+userInput.value;\n        request.open('GET',url,true);\n        request.onreadystatechange = \n            function() {\n                if (request.readyState == 4) {\n                    var ajaxResponse = document.getElementById(\"ajaxResponse\");\n                    ajaxResponse.innerHTML = request.responseText;\n                    ajaxResponse.style.visibility = \"visible\";\n                }\n        };\n        request.send();\n    }\n}\n\n/*TALLERES*/\n\n/*function recuperarAlumnosTaller(id){\n    \n}\n*/\n\nfunction confirmarEliminacionTaller(id) {\n    $('#confirmar').modal('open');\n    document.getElementById('botonEliminar').onclick = function() {eliminarTaller(id);};\n}\n\nfunction eliminarTaller(id) {\n    $.ajax({url: \"eliminarTaller.php?id=\"+id, success: function(){\n            $('#exito').modal('open');\n        }\n    });\n}\n\n//abrir modal para buscar alumnas\nfunction buscarAlumna() {\n    document.getElementById(\"entradaUsuario\").value = \"\";\n    $(\"#modal\").addClass(\"modalStatic\");\n    $(\"#loader\").show();\n    $('#info').hide();\n    $(\"#entradaUsuario\").show();\n    $(\"#title\").html('Buscar Alumna');\n    $(\"#listaAjax\").show();\n    document.getElementById('entradaUsuario').onkeyup = function() {actualizarListaAlumnas();};\n    $('#modal').modal('open');\n    $.ajax({url: \"ajax/listaAlumnas.php\", success: function(result){\n            $('#loader').hide();\n            $(\"#listaAjax\").html(result);\n        }\n    });\n}\n\n//la lista de actualiza de acuerdo a lo que escriba el usuario\nfunction actualizarListaAlumnas(){\n    $(\"#loader\").show();\n    var entradaUsuario = document.getElementById(\"entradaUsuario\").value;\n    $.ajax({url: \"ajax/listaAlumnas.php?filtro=\"+entradaUsuario, success: function(result){\n            $(\"#loader\").hide();\n            $(\"#listaAjax\").html(result);\n        }\n    });\n}\n\n\nfunction seleccionarAlumna(id,param) {\n    document.getElementById(\"alumnaSeleccionada\").value = param.innerHTML;\n    document.getElementById(\"entradaUsuario\").value = \"\";\n    document.getElementById(\"idAlumna\").value = id;\n    $('#modal').modal('close');\n    mostrarListaTalleresDeAlumna(id);\n}\n\n\nfunction mostrarListaTalleresDeAlumna(id) {\n    $(\"#talleresDeAlumna\").show(500);\n    $.ajax({url: \"ajax/talleresDeAlumna.php?id=\"+id, success:function(result) {\n            $(\"#listaTalleres\").html(result);\n        }\n    });\n}\n\n//abre modal con información del taller seleccionado\nfunction mostrarInfoTaller(id) {\n    $(\"#entradaUsuario\").hide();\n    $(\"#modal\").removeClass(\"modalStatic\");\n    $(\"#listaAjax\").html(\"\");\n    $(\"#title\").html(\"Información de Taller\");\n    $(\"#modal\").modal('open');\n    $(\"#loader\").show();\n    $(\"#info\").show();\n    $.ajax({url: \"ajax/infoTaller.php?id=\"+id, success:function(result) {\n            $(\"#loader\").hide();\n            $(\"#info\").html(result);\n        }\n    });\n}\n\n//abrir modal para buscar Talleres a inscribir\nfunction buscarTaller() {\n    document.getElementById(\"entradaUsuario\").value = \"\";\n    $(\"#modal\").addClass(\"modalStatic\");\n    $(\"#title\").html(\"Inscribir Taller\");\n    $(\"#info\").hide();\n    $(\"#entradaUsuario\").show();\n    $(\"#listaAjax\").show();\n    document.getElementById(\"entradaUsuario\").onkeyup = function() {actualizarListaTalleres();};\n    $(\"#loader\").show();\n    $('#modal').modal('open');\n    var id = document.getElementById(\"idAlumna\").value;\n    $.ajax({url: \"ajax/listaTalleres.php?id=\"+id, success: function(result){\n            $(\"#loader\").hide();\n            $(\"#listaAjax\").html(result);\n        }\n    });\n}\n\n//la lista de talleres se filtra con base a lo que escribe el usuario\nfunction actualizarListaTalleres() {\n    $(\"#loader\").show();\n    var entradaUsuario = document.getElementById(\"entradaUsuario\").value;\n    var id = document.getElementById(\"idAlumna\").value;\n    $.ajax({url: \"ajax/listaTalleres.php?id=\"+id+\"&input=\"+entradaUsuario, success:function(result){\n            $(\"#listaAjax\").html(result);\n            $(\"#loader\").hide();\n        }\n    });\n}\n\n//se abre un modal para inscribir a la alumna a un taller\nfunction seleccionarTaller(idTaller) {\n    $(\"#modal\").removeClass(\"modalStatic\");\n    $(\"#title\").html(\"Inscribir taller\");\n    $(\"#loader\").show();\n    $(\"#listaAjax\").hide(100);\n    $(\"#entradaUsuario\").hide(100);\n    $(\"#info\").html(\"\");\n    $.ajax({url: \"ajax/infoTaller.php?id=\"+idTaller+\"&inscribir=true\", success:function(result){\n            $(\"#loader\").hide();\n            $(\"#info\").html(result);\n            $(\"#info\").show(300);\n        }\n    });\n}\n\n//registrar en base de datos inscripción de alumna\nfunction inscribirTaller(idTaller){\n    var monto = document.getElementById(\"monto\").value\n    if (isNumeric(monto) && monto>0) {\n        var idAlumna = document.getElementById(\"idAlumna\").value;\n        $.ajax({url: \"ajax/inscripcionTaller.php?idTaller=\"+idTaller+\"&idAlumna=\"+idAlumna+\"&monto=\"+monto,\n        success: function(result) {\n            inscripcionTallerExito();\n        }\n        });\n        mostrarListaTalleresDeAlumna(idAlumna);\n    } else {\n        $(\"#msgError\").show();\n    }\n}\n\n//eliminar registro de inscripcion en la base de datos\nfunction eliminarInscripcionTaller(idTaller) {\n    var idAlumna = document.getElementById(\"idAlumna\").value;\n    $.ajax({url: \"ajax/inscripcionTaller.php?idTaller=\"+idTaller+\"&idAlumna=\"+idAlumna,\n    success: function() {inscripcionTallerExito();}\n        \n    });\n    mostrarListaTalleresDeAlumna(idAlumna);\n}\n\nfunction inscripcionTallerExito(){\n    $(\"#title\").html(\"¡Modificación realizada con éxito!\");\n    $(\"#entradaUsuario\").hide(100);\n    $(\"#info\").hide(100);\n    $(\"#listaAjax\").hide(100);\n    $(\"#regresar\").show(300);\n}\n\nfunction isNumeric(n) { \n      return !isNaN(parseFloat(n)) && isFinite(n); \n}\n\n\nfunction mostrarInscritas(id){\n    window.location.href = 'https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/consultar_Inscritas.php?id='+id;\n}\n\nfunction cargarImagenesGaleria() {\n    $(\"#loader\").hide();\n    $(\"#imagenesGaleria\").load(\"ajax/imagenesGaleria.php\", function() {\n        $(\".square\").mouseenter(function () {\n            $(this).find('.deleteicon').show(300);\n        });\n        \n         $(\".square\").mouseleave(function () {\n            $(this).find(\".deleteicon\").hide(300);\n        });\n    });\n    /*$.ajax({url: \"ajax/imagenesGaleria.php\", success: function(result){\n        $(\"#imagenesGaleria\").html(result);\n    }\n    \n    });*/\n}\n\nfunction agregarImagenAGaleria() {\n    $('#anadirImagen').modal('open');\n}\n\nfunction confirmarEliminacionImagen(id) {\n    document.getElementById('siEliminarImagen').onclick = function() {eliminarImagen(id);};\n    $('#modalEliminar').modal('open');\n}\n\nfunction eliminarImagen(id){\n    $.ajax({url: \"ajax/eliminarImagen.php?id=\"+id, success: function(result) {\n        cargarImagenesGaleria();\n    }});\n}\n\nfunction showLoader() {\n    $(\"#loader\").show(1000);\n}\n\n\n\n/*END TALLERES*/\n\n\n\n/*REPORTES*/\n\n//todo ok\nfunction descargaExcel() {\n    window.location.href='https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/reporte_excel_alumnas.php';\n}\n\n//todo ok\nfunction descargaPDF() {\n    window.location.href='https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/tcpdf/examples/reporte_pdf_alumnas.php';\n}\n\n//no se que pasa\nfunction descargaPDFgastos(fi, ff) {\n    window.location.href='https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/tcpdf/examples/reporte_pdf_gastos.php?FI='+fi+'&FF='+ff;\n}\n\n//que pasa\nfunction descargaPDFTodo(){\n    console.log(\"Descargo todo\");\n    window.location.href='https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/tcpdf/examples/reporte_pdf_gastos.php';\n}\n\n\n/*FIN REPORTES*/","undoManager":{"mark":0,"position":-1,"stack":[[{"start":{"row":26,"column":2},"end":{"row":36,"column":7},"action":"remove","lines":["  ","    $(\"#nombreImagenGaleria\").change(function() {","        var file = document.getElementById('imagenGaleria').files[0];","        if(file.size > 25165824) { // 24 MB ","            alert(\"Archivo demasiado grande. El máximo es de 24 MB\");","            document.getElementById('imagenGaleria').value=\"\";","            document.getElementById('nomreImagenGaleria').value=\"\";","        } else {","            $(\"#hideable\").show(1000);","        }","    });"],"id":1}]]},"ace":{"folds":[],"scrolltop":1486,"scrollleft":0,"selection":{"start":{"row":115,"column":66},"end":{"row":115,"column":66},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":73,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1494394416000}