

let inputUsuario = document.getElementById("input-usuario");
let inputContrasena = document.getElementById("input-pass")
let boton = document.getElementById("btnPrincipal");

inputUsuario.addEventListener('input', () => {
    usuario = inputUsuario.value;
})

inputContrasena.addEventListener('input', () => {
    contrasena = inputContrasena.value;
})

let nombre = localStorage.getItem('nombre');
let pass= localStorage.getItem('pass');    
document.getElementById('input-usuario').value = nombre;
document.getElementById('input-pass').value = pass;




boton.addEventListener('click', () => {
    document.getElementById("registrado").innerHTML = "Felicitaciones " + usuario +" te has registrado exitosamente";
    document.getElementById("registrado").style.backgroundColor =  "#47654d";
    document.getElementById("registrado").style.color =  "white";

    let nombre = document.getElementById('input-usuario').value;
    let pass = document.getElementById('input-pass').value;
    let date = new Date();
    let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    let registro = [{nombre:nombre, contraseña:pass ,fecha: fecha}];
    let registroJson = JSON.stringify(registro);




    localStorage.setItem("nombre", nombre);
    localStorage.setItem("pass", pass);
    localStorage.setItem("Registro", registroJson);

    //mostrare en el html objeto de nuevo en su forma normal sin formato json
    let registroNormal = JSON.parse(localStorage.getItem('Registro'));

    document.getElementById("fechaRegistro").innerHTML = "Su fecha de registro fue: " + registroNormal[0].fecha ;

    Swal.fire({
        title: "BIENVENIDO "+  nombre.toUpperCase(),
        text: "Gracias Por Preferirnos!!!",
        icon: "success",
        confirmButtonText: "ACEPTAR",
    });

})

