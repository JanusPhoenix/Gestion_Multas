window.addEventListener("load",inicio,false);

var oGestorMultas = new GestorMultas();

function inicio(){
    document.getElementById("cli").addEventListener('click',mostrarFomularioCliente,false);
    document.getElementById("altaCliente").addEventListener('click',mostrarAltaCliente,false);
    document.getElementById("enviar").addEventListener("click",clienteN,false);
    document.getElementById("boton").addEventListener('click',ocultarMensaje,false);
}
//-----------------Funciones para mostrar formularios y mensajes--------------//
//Funcion para mostrar los mensajes
function mensaje(sMensaje){	
    var oTextoMensaje =document.getElementById("textoMensaje");
    oTextoMensaje.textContent = sMensaje;
    var oCapaMensaje = document.getElementById("mensajes");
    oCapaMensaje.style.display = "block";
    var oCapaTransparente = document.getElementById("capaTransparente");
    oCapaTransparente.style.zIndex = 1;
}
//Funcion para ocultar los mensajes
function ocultarMensaje(){
    var oCapaMensaje = document.getElementById("mensajes");
    oCapaMensaje.style.display = "none";
    var oCapaTransparente = document.getElementById("capaTransparente");
    oCapaTransparente.style.zIndex = -1;
}

function mostrarFomularioCliente(){
    var oMenu = document.getElementById("menu");
    var oUsu = document.getElementById("cliente");
    oMenu.style.display = "none";
    oUsu.style.display = "block";
}

function mostrarAltaCliente(){
    var oAlta = document.getElementById("cliente");
    var oFormularioAlta = document.altaCli;
    oAlta.style.display = "none";
    oFormularioAlta.style.display = "block";
}
//--------------------------Funciones de alta---------------------------------//
function clienteN(){
    var sNombre,sApellido,sNif,oCliente;  
    sNombre = document.altaCli.nombre.value;
    sApellido = document.altaCli.ape.value;   
    sNif = document.altaCli.nif.value;
    if(validarUsuario() == true){
        oCliente = new Cliente(sNif,sNombre,sApellido);
        mensaje(oGestorMultas.altaCliente(oCliente));
    }
}
//--------------------------Funciones de validacion---------------------------//
function validarUsuario(){
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
        sErrores += "\nNombre incorrecto";
        document.altaCli.nombre.className = "form-control error";//Marcaciones de error, si entra lo marcara, si pasa por el else lo desmarca.
    }else{
        document.altaCli.nombre.className = "form-control";	
    }
        
	//Validacion del apellido
    var sApellido = document.altaCli.ape.value.trim();
    document.altaCli.ape.value = document.altaCli.ape.value.trim();
               
    if (oExpReg.test(sApellido) == false){

        if(bValido == true){
            bValido = false;		
            document.altaCli.ape.focus();		
        }
        sErrores += "\nApellidos incorrecto";
        document.altaCli.ape.className = "form-control error";

    }
    else {
        document.altaCli.ape.className = "form-control";	
    }
        
        //validacion del campo nif
    var sNif = document.altaCli.nif.value.trim();
    document.altaCli.nif.value = document.altaCli.nif.value.trim();
        
    var oExpRegNif = /[0-9]{7}[A-Z]/;

    if (oExpRegNif.test(sNif) == false){
        if(bValido == true){
            bValido = false;		
            document.altaCli.nif.focus();		
        }
        sErrores += "\nNif incorrecto";
        document.altaCli.nif.className = "form-control error";	
    }
    else {
        document.altaCli.nif.className = "form-control";	
    }
                
    //Condicion para enviar formulario solo si todos los datos son correctos
    if (bValido == false){
        mensaje(sErrores);
    }
    return bValido;
}
