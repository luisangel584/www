function getId(id){
    return document.getElementById(id);
}

var database = firebase.database();
var ref = database.ref('encuesta');

ref.on('value', function(ss){
    var encuesta = ss.val();
    console.log(encuesta);

    getId('preg').innerHTML = encuesta.pregunta;
    getId('descript').innerHTML = encuesta.descripcion;
});



var refResp = database.ref('respuestas');

refResp.on('child_added', function(ss){
    var respuesta = ss.val();
    var item = document.createElement('li');
    console.log(respuesta);

    item.innerHTML = respuesta.respuesta;

    getId('listas').appendChild(item);
});

