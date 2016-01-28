window.addEventListener("load",inicio,false);

var oGestorMultas = new GestorMultas();

function inicio(){
    document.getElementById("cli").addEventListener('click',mostrarFomularioCliente,false);
    document.getElementById("altaCliente").addEventListener('click',mostrarAltaCliente,false);
    document.getElementById("enviar").addEventListener("click",clienteN,false);
    //Para mostrar y probar
    document.getElementById("mostrar").addEventListener('click',muestraClientes,false);
    //para eliminar cliente
    document.getElementById("enviarDni").addEventListener('click',borrarCliente,false);
    //mostrar formulario peticion dni para eliminar un cliente
    document.getElementById("eliminar").addEventListener("click",mostrarPeticionDniBorrarCliente,false);
    //Volver atras borrado Cliente
    document.getElementById("atrasBorrarCLiente").addEventListener("click",volverAtrasBorradoCliente,false);
    //Clic para mostrar dni de mod cliente
    document.getElementById("modCli").addEventListener("click",modCliDni,false);
    //volver atras del boton de peticion dni de modificar cliente
    document.getElementById("atrasModificaCLiente").addEventListener("click",volverAtrasPeticionDniModCliente,false);
    //al hacer click en enviar de dni mod clietne
    document.getElementById("modDni").addEventListener("click",comprobarModClienteDni,false);
    //modificacion de cliente
    document.modCli.enviar.addEventListener("click",modificaCliente,false);
    //atras modifica cliente
    document.getElementById("atrasFormularioModificacion").addEventListener("click",volverAtrasFormularioModCliente,false);
}
//-----------------Funciones para ocultar formularios-------------------------//

//-----------------Funciones para mostrar formularios y mensajes--------------//
//Funcion para mostrar los mensajes
function mensaje(sMensaje){         
    //modificar para quitar el textcontent
//    var oTextoMensaje =document.getElementById("textoMensaje");
//    var oTextoInsertar = document.createTextNode(sMensaje);
//    //oTextoMensaje.textContent = sMensaje;    
//    oTextoMensaje.appendChild(oTextoInsertar);
//    var oCapaMensaje = document.getElementById("mensajes");
//    oCapaMensaje.style.display = "block";
//    var oCapaTransparente = document.getElementById("capaTransparente");
//    oCapaTransparente.style.zIndex = 1;
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "3000",
        "timeOut": "3000",
        "extendedTimeOut": "3000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
        
    };
    if(sMensaje == "Cliente dado de alta" || sMensaje == "Cliente borrado")
        toastr["success"](sMensaje, "Mensaje");
    else
        toastr["error"](sMensaje, "Mensaje");
}
//Funcion para ocultar los mensajes
//function ocultarMensaje(){
//    var oTextoMensaje =document.getElementById("textoMensaje");
//    oTextoMensaje.removeChild(oTextoMensaje.firstChild);
//    var oCapaMensaje = document.getElementById("mensajes");
//    oCapaMensaje.style.display = "none";
//    var oCapaTransparente = document.getElementById("capaTransparente");
//    oCapaTransparente.style.zIndex = -1;
//}

function mostrarFomularioCliente(){
    var oMenu = document.getElementById("menu");
    var oUsu = document.getElementById("cliente");
    oMenu.style.display = "none";
    oUsu.style.display = "block";
}
function volverAtrasCliente(){
    var oUsu = document.getElementById("cliente");
    var oFormularioAlta = document.altaCli;
    oUsu.style.display = "block";
    oFormularioAlta.style.display = "none";
}

function mostrarAltaCliente(){
    var oAlta = document.getElementById("cliente");
    var oFormularioAlta = document.altaCli;
    oAlta.style.display = "none";
    oFormularioAlta.style.display = "block";
}
function mostrarPeticionDniBorrarCliente(){
    var oFormularioAlta = document.getElementById("cliente");
    oFormularioAlta.style.display = "none";
    var oFormularioDni = document.getElementById("peticionDni");
    oFormularioDni.style.display = "block";
}
//Volver atras del boton de peticion dni del borrado de cliente
function volverAtrasBorradoCliente(){
    var oUsu = document.getElementById("cliente");
    oUsu.style.display = "block";
    var oFormularioDniBorrar = document.eliminarDni;
    oFormularioDniBorrar.style.display = "none";
}
//para mostrar la peticion de dni de modificar un cliente
function modCliDni(){
    var oFormularioAlta = document.getElementById("cliente");
    oFormularioAlta.style.display = "none";
    var oModDni = document.getElementById("modificaDni");
    oModDni.style.display = "block";
}
//clic volver atras de peticion de dni de mod cliente
function volverAtrasFormularioModCliente(){
    var oUsu = document.getElementById("modCliente");
    oUsu.style.display = "none";
    var oModDni = document.getElementById("modificaDni");
    oModDni.style.display = "block";
}
//funcion para ocultar peticion dni para mod y mostrar formulario para cambiar datos
function mostrarMenuModCliente(){
    var oModDni = document.getElementById("modificaDni");
    oModDni.style.display = "none";
    var oForModCli = document.modCli;
    oForModCli.style.display = "block";
}
//volver atras formulario peticion dni de modCliente
function volverAtrasPeticionDniModCliente(){
    var oModDni = document.getElementById("cliente");
    oModDni.style.display = "block";
    var oForModCli = document.modificaDni;
    oForModCli.style.display = "none";
}


//--------------------------Funciones de alta---------------------------------//
function clienteN(){
    var sNombre,sApellido,sNif,oCliente,sTel;  
    sNombre = document.altaCli.nombre.value;
    sApellido = document.altaCli.ape.value;   
    sNif = document.altaCli.nif.value;
    sTel = document.altaCli.tel.value
    if(validarCliente() == true){
        oCliente = new Cliente(sNombre,sApellido,sNif,sTel);
        mensaje(oGestorMultas.altaCliente(oCliente));
    }
}

//--------------------------Funciones de validacion---------------------------//
function validarCliente(){
    //var oE = oEvento || window.event;
    var bValido = true;
    var sErrores = "";
    var oCliente;	       
        //Validacion del nombre
    var sNombre = document.altaCli.nombre.value.trim();
    document.altaCli.nombre.value = document.altaCli.nombre.value.trim();

    var oExpReg = /[a-zA-Z\s]{3,40}/;

    if (oExpReg.test(sNombre) == false){
        if(bValido == true){
            bValido = false;		
            document.altaCli.nombre.focus();		
        }
        sErrores += "Nombre incorrecto<br>";
        document.altaCli.nombre.classList.add("error");//Marcaciones de error, si entra lo marcara, si pasa por el else lo desmarca.
    }else{
        document.altaCli.nombre.classList.remove("error");
        //eliminar con el listClass.remove("error");
    }
        
	//Validacion del apellido
    var sApellido = document.altaCli.ape.value.trim();
    document.altaCli.ape.value = document.altaCli.ape.value.trim();
               
    if (oExpReg.test(sApellido) == false){

        if(bValido == true){
            bValido = false;		
            document.altaCli.ape.focus();		
        }
        sErrores += "Apellidos incorrecto<br>";
        document.altaCli.ape.classList.add("error");

    }
    else {
        document.altaCli.ape.classList.remove("error");	
    }
    
        //validacion del campo nif
    var sNif = document.altaCli.nif.value.trim();
    document.altaCli.nif.value = document.altaCli.nif.value.trim();
        
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;

    if (oExpRegNif.test(sNif) == false){
        if(bValido == true){
            bValido = false;		
            document.altaCli.nif.focus();		
        }
        sErrores += "Nif incorrecto<br>";
        document.altaCli.nif.classList.add("error");	
    }
    else {
        document.altaCli.nif.classList.remove("error");	
    }
    var sTel = document.altaCli.tel.value.trim();
    document.altaCli.tel.value = document.altaCli.tel.value.trim();
        
    var oExpRegNif = /^([9,7,6]{1})+([0-9]{8})$/;

    if (oExpRegNif.test(sTel) == false){
        if(bValido == true){
            bValido = false;		
            document.altaCli.tel.focus();		
        }
        sErrores += "Telefono incorrecto<br>";
        document.altaCli.tel.classList.add("error");	
    }
    else {
        document.altaCli.tel.classList.remove("error");	
    }
    //validacion telefono
    //Condicion para enviar formulario solo si todos los datos son correctos
    if (bValido == false){
        mensaje(sErrores);
    }
    
    return bValido;
}
//funcion parar validar solo el dni
function validarDni(){
    var bValido = true;
    var sErrores = "";
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;
    
    var nif2 = document.eliminarDni.nif2.value.trim();
    document.eliminarDni.nif2.value = document.eliminarDni.nif2.value.trim();
    
    if (oExpRegNif.test(nif2) == false){
        if(bValido == true){
            bValido = false;		
            document.eliminarDni.nif2.focus();		
        }
        sErrores += "Nif incorrecto<br>";
        document.eliminarDni.nif2.classList.add("error");	
    }
    else {
        document.eliminarDni.nif2.classList.remove("error");	
    }
    //validacion telefono
    //Condicion para enviar formulario solo si todos los datos son correctos
    if (bValido == false){
        mensaje(sErrores);
    }
    return bValido;
}
//--------------------------Funciones de borrado-------------------------------//
function borrarCliente(){
    var dni = document.eliminarDni.nif2.value;
    if(validarDni() == true){
        mensaje(oGestorMultas.borraCliente(dni));
    }
}
//--------------------------Funciones de modificacion--------------------------//
function comprobarModClienteDni(){
    var sDni = modificaDni.modiNif.value;
    var oCliente = oGestorMultas.buscaCliente(sDni);
    var sDniValor = document.querySelector("#modCliente #nifMod");
    var sNombreValor = document.querySelector("#modCliente #nombreMod");
    var sApeValor = document.querySelector("#modCliente #apeMod");
    var sTelValor = document.querySelector("#modCliente #telefonoMod");
    
    if(oGestorMultas.buscaCliente(sDni) == null )
        mensaje("No existe cliente con dni: "+sDni)
    else{
        mostrarMenuModCliente();
        sDniValor.setAttribute("value",sDni);
        sNombreValor.setAttribute("value",oCliente.nombre);
        sApeValor.setAttribute("value",oCliente.apellido);
        sTelValor.setAttribute("value",oCliente.telefono);
    }
}
function modificaCliente(){
    var sDni,sNombre,sApellido,sTelefono;
    sDni = document.modCli.nifMod.value;
    sTelefono = document.modCli.telMod.value;
    sApellido = document.modCli.apeMod.value;
    sNombre = document.modCli.nombreMod.value;
    mensaje(oGestorMultas.modificaCliente(sNombre,sApellido,sDni,sTelefono));
}
//-------------------------Muestra Cliente para pruebas------------------------//
function muestraClientes(){
    var oVentana = open("","","");
    oVentana.document.title = "Listado de clientes"
    oVentana.document.body.innerHTML = "<h2>Listado de clientes</h2>";
    oVentana.document.body.innerHTML += oGestorMultas.listadoClientes();
}
