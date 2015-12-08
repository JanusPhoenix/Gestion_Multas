window.addEventListener("load",inicio,false);

var oGestorMultas = new GestorMultas();

function inicio(){
    document.getElementById("usu").addEventListener('click',mostrarFomularioCliente,false);
    document.getElementById("altaUsuario").addEventListener('click',mostrarAltaUsuario,false);
    //document.altaUsu.addEventListener("submit",validar,false);
    document.altaUsu.addEventListener("submit",clienteN,false);
    document.getElementById("boton").addEventListener('click',ocultarMensaje,false)
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
    var oUsu = document.getElementById("usuario");
    oMenu.style.display = "none";
    oUsu.style.display = "block";
}

function mostrarAltaUsuario(){
    var oAlta = document.getElementById("usuario");
    var oFormularioAlta = document.altaUsu;
    oAlta.style.display = "none";
    oFormularioAlta.style.display = "block";
}
//--------------------------Funciones de alta---------------------------------//
function clienteN(){
    var sNombre,sApellido,sNif,oCliente;  
    sNombre = document.altaUsu.nombre.value;
    sApellido = document.altaUsu.ape.value;   
    sNif = document.altaUsu.nif.value;
    
    if(validar(sNombre,sApellido,sNif) == true){
        oCliente = new Cliente(sNif,sNombre,sApellido);
        mensaje(oGestorMultas.altaCliente(oCliente));
    }    
}
//--------------------------Funciones de validacion---------------------------//
function validar(oEvento,sNombre,sApellido,sNif){
    var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
        	       
        //Validacion del nombre
//	var sNombre = document.altaUsu.nombre.value.trim();
//	document.altaUsu.nombre.value = document.altaUsu.nombre.value.trim();

	var oExpReg = /[a-zA-Z\s]{3,40}/;
    
	if (oExpReg.test(sNombre) == false){
            if(bValido == true){
                bValido = false;		
                document.altaUsu.nombre.focus();		
            }
            sErrores += "\nNombre incorrecto";
            document.altaUsu.nombre.className = "form-control error";//Marcaciones de error, si entra lo marcara, si pasa por el else lo desmarca.
	}else{
            document.altaUsu.nombre.className = "form-control";	
	}
        
	//Validacion del apellido
//	var sApellido = document.altaUsu.ape.value.trim();
//	document.altaUsu.ape.value = document.altaUsu.ape.value.trim();
               
	if (oExpReg.test(sApellido) == false){
	
            if(bValido == true){
                bValido = false;		
                document.altaUsu.ape.focus();		
            }
            sErrores += "\nApellidos incorrecto";
            document.altaUsu.ape.className = "form-control error";
	
	}
	else {
            document.contacto.ape.className = "form-control";	
	}
        
        //validacion del campo nif
//        var sNif = document.altaUsu.nif.value.trim();
//        document.altaUsu.nif.value = document.altaUsu.nif.value.trim();
        
        var oExpReg2 = /[0-9]{7}[A-Z]/;
        
        if (oExpReg2.test(sNif) == false){
            if(bValido == true){
                bValido = false;		
                document.altaUsu.nif.focus();		
            }
            sErrores += "\nNif incorrecto";
            document.altaUsu.nif.className = "form-control error";	
	}
	else {
            document.contacto.nif.className = "form-control";	
	}
                
	//Condicion para enviar formulario solo si todos los datos son correctos
	if (bValido == false){
            //Cancelar envio del formulario
            oE.preventDefault();
            //Mostrar errores
            alert(sErrores);
	}
	return bValido;
}
