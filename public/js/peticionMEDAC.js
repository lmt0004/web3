function peticionHTTP(){
    var peticion_http = new XMLHttpRequest();
    //Hago que la peticion quede a la espera de respuesta y cuando llegue, ejecute la funcion muestraContenido
    peticion_http.onreadystatechange = muestraContenido;
    //Defino mi peticion, de tipo POST, a la ruta identificar y asincrona
    peticion_http.open('POST', "/identificar", true);
    //Establezco en las cabeceras el tipo de fichero que usare para pasar parametros
    peticion_http.setRequestHeader('Content-Type', 'application/json');
    //Envio la peticion pasando en el body el JSON con los parametros
    peticion_http.send(JSON.stringify({username:"paco",password:"1234"}));

    function muestraContenido(){
        //Compruebo que el estado de las peticion sea 4, es decir, finalizada
        if (peticion_http.readyState==4){
            //Compruebo que el estado de la respuesta sea 200, es decir, exito!!
            if (peticion_http.status==200){
              //Muestro el texto de la respuesta en un alert
              window.location.replace("/rutaSegura");
            }
        }

    }
    }