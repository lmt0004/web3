function iniciarSesion(){

    var usuario =document.getElementById('usuario').value;
    var contraseña =document.getElementById('clave').value;

//HAGO LA PETICION AL SERVIDOR Y GUARDO LA RESPUESTA EN LA VARIABLE PROMISE
   var promise=$.ajax({
      type:'POST',
      url:'/identificarNueva',
      //lo que envio
      data:JSON.stringify({username:usuario,password:contraseña}),
      contentType:'application/json;charset=UTF-8',
      dataType:'json'
    });


//TRATAR LA RESPUESTA QUE ME DA EL SERVIDOR
   promise.always(function(data){   
  
    if (data.res=="login true"){
      //Si la respuesta del servidor es "login true", redirijo al usuario a la URL rutaSegura
                window.location.replace("/rutaSegura");
        }
        //Si la respuesta del servidor es "usuario no valido", significa que ese usuario no es el correcto
        else if(data.res=="usuario no valido"){
        alert("No estas autorizado, ese usuario no es valido");
        }
        //Si la respuesta del servidor es "login failed", significa que ha faltado algun parametro
        else if(data.res=="login failed"){
          alert("Debes introducir el usuario y contraseña");
          }
          //En cualquier otro caso para evitar que se quede el cliente esperando, muestro "Error"
        else {
          window.alert("Error")
        }  
   }) 
  }
  
  function registrarUsuario(){

    var usuario =document.getElementById('usuario').value;
    var contraseña =document.getElementById('clave').value;

//HAGO LA PETICION AL SERVIDOR Y GUARDO LA RESPUESTA EN LA VARIABLE PROMISE
   var promise=$.ajax({
      type:'POST',
      url:'/registrarNueva',
      //lo que envio
      data:JSON.stringify({username:usuario,password:contraseña}),
      contentType:'application/json;charset=UTF-8',
      dataType:'json'
    });


//TRATAR LA RESPUESTA QUE ME DA EL SERVIDOR
   promise.always(function(data){   
  
    if (data.res=="register true"){
      //Si la respuesta del servidor es "register true", redirijo al usuario a la URL rutaSegura
                window.location.replace("/login");
        }
        //Si la respuesta del servidor es "usuario ya existe", significa que ese usuario ya existe
        else if(data.res=="usuario ya existe"){
        alert("Ya existe ese usuario");
        }
        //Si la respuesta del servidor es "register failed", significa que ha faltado algun parametro
        else if(data.res=="register failed"){
          alert("Debes introducir el usuario y contraseña");
          }
          //En cualquier otro caso para evitar que se quede el cliente esperando, muestro "Error"
        else {
          window.alert("Error")
        }  
   }) 
  }




function mostrarListaUsuarios(){
//HAGO LA PETICION AL SERVIDOR Y GUARDO LA RESPUESTA EN LA VARIABLE PROMISE
   var promise=$.ajax({
      type:'POST',
      url:'/listaUsuarios',
      data:JSON.stringify({}),
      contentType:'application/json;charset=UTF-8',
      dataType:'json'
    });

//TRATAR LA RESPUESTA QUE ME DA EL SERVIDOR
   promise.always(function(data){   
    if (data){
      let tabla =document.getElementById("miTabla");
      //Si recibo el listado de usuarios, actualizo mi DOM
      //Para cada elemento dentro de mi respuesta, creo una fila en la tabla
      data.forEach(element => {
        //Creo la fila
        let miFila= document.createElement("tr");
        //Creo la celda
        let miCelda = document.createElement("td");
        //Meto el nombre del usuario en la celda
        miCelda.innerText = element.nombre;
        //Meto la celda en la fila
        miFila.appendChild(miCelda);
        //Meto la fila en la tabla
        tabla.appendChild(miFila);
        });
      }
    else {
      alert("Hay un error");
    }
  });
}
  
  
  
  
  