{"filter":false,"title":"validacionesyotros2.js","tooltip":"/DAW/BackEnd_PHP/js/validacionesyotros2.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":72,"column":1},"action":"insert","lines":["$(document).ready(function() {","    if ((document.getElementById('descripcionimagen')) && (document.getElementById('descripcionimagen').value == \"\")) {","           $('#ocultardescripcion').hide();","    }","    ","    //Mostrar y ocultar descripción de imagen","    $('#ocultardescripcion').change(function() {","        var file = document.getElementById('imagennoticia').files[0];","        if(file.size > 8388608) { // 8 MB ","            alert(\"Archivo demasiado grande. El máximo es de 8 MB\");","            document.getElementById('imagennoticia').value=\"\";","            document.getElementById('nombrearchivo').value=\"\";","        } else {","            if (document.getElementById('imagennoticia').value == \"\") {","               $('#ocultardescripcion').hide('fold');","                $('#descripcionimagen').css('value', \"\");","            } else {","                $('#ocultardescripcion').show('fold');","            }","        }","    });","    ","    //Descartar imagen seleccionada por el usuario y limpiar campos","    $('#descartarImagen').click(function() {","       $('#ocultardescripcion').hide('fold');","        document.getElementById('descripcionimagen').value =\"\";","        document.getElementById('imagennoticia').value=\"\";","        document.getElementById('nombrearchivo').value=\"\";","    });","    ","});","","","function confirmarEliminacionNoticia(id) {","    $( function() {","    $(\"#dialog-confirm\" ).dialog({","      resizable: false,","      height: \"auto\",","      width: 400,","      modal: true,","      buttons: {","        \"Eliminar Noticia\": function() {","            window.location.href= 'https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/eliminarNoticia.php?id=' + id;","          $( this ).dialog( \"close\" );","        },","        \"Cancelar\": function() {","          $( this ).dialog( \"close\" );","        }","      }","    });","  } );","}","","","function confirmarEliminacionUsuario(id) {","    $( function() {","    $( \"#dialog-confirm\" ).dialog({","      resizable: false,","      height: \"auto\",","      width: 400,","      modal: true,","      buttons: {","        \"Eliminar Usuario\": function() {","            window.location.href= 'https://msft3c-ramonromerotec.c9users.io/DAW/BackEnd_PHP/eliminarUsuario.php?id=' + id;","          $( this ).dialog( \"close\" );","        },","        \"Cancelar\": function() {","          $( this ).dialog( \"close\" );","        }","      }","    });","  } );","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":1024,"scrollleft":0,"selection":{"start":{"row":72,"column":1},"end":{"row":72,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":52,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1490990083938,"hash":"433c891022c8ea3cca8dc20deb196e3ee9785dd6"}