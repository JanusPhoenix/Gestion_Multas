window.addEventListener("load",inicio,false);
var oGestorMultas = new GestorMultas();

function inicio(){
    //------------------------------------------------------------------------------------------
//                  LLAMADAS
    //------------------------------------------------------------------------------------------
    //EVENTO MOSTRAR MENU PRINCIPAL Y EMPLEADO
    document.getElementById("menuEmpleado").addEventListener("click", mostrarMenuEmpleado,false);
    document.getElementById("altaEmpleado").addEventListener("click", mostrarAltaEmpleado,false);

    oSalir = document.querySelectorAll("[name='salir']");
    for(var i= 0; i<oSalir.length; i++)
    {
        oSalir[i].addEventListener("click", mostrarMenuP, false);
    }
    //EVENTO MOSTRAR FORMULARIO MODIFICAR EMPLEADO
    document.querySelector("#modificaEmpleado").addEventListener("click", mostrarModEmpleado, false);
    //EVENTO MOSTRAR FORMULARIO BORRAR EMPLEADO
    document.querySelector("#eliminarEmpleado").addEventListener("click", mostrarMenuBorrarEmp, false);
    //EVENTOS MOSTRAR FACTURA
    document.querySelector("#menuFactura").addEventListener("click", mostrarMenuFactura, false);
    document.querySelector("#nuevaFactura").addEventListener("click", mostrarFormFactura, false);
    document.querySelector("#emiteFactura").addEventListener("click", mostrarEmitirFactura, false);
    //EMITE FACTURA
    document.querySelector("#enviarModFac").addEventListener("click", emiteFactura , false);
    //VALIDAR FACTURA
    document.querySelector("#enviarFactura").addEventListener("click", altaFactura , false);
    //Btn Alta Empleado
    document.getElementById("enviarEmp").addEventListener("click", empleadoAlta, false);
    //Btn Borra Empleado
    document.querySelector("#enviarDniEmp").addEventListener("click",borrarEmpleado, false);
    //Btn Modificar Empleado
    document.querySelector("#modDniEmp").addEventListener("click", comprobarModEmpleadoDni, false);
    document.querySelector("#enviarModEmp").addEventListener("click", modificaEmpleado, false);

    //BOTON ATRAS EMPLEADO
    document.querySelector("#atrasBorrarEmp").addEventListener("click", mostrarMenuEmpleado, false);
    document.querySelector("#atrasEmp").addEventListener("click", mostrarMenuEmpleado, false);
    document.querySelector("#atrasEmpDni").addEventListener("click", mostrarMenuEmpleado, false);
    document.querySelector("#atrasModificacionEmpleado").addEventListener("click", mostrarModEmpleado, false);
    //Btn Atras Factura
    document.querySelector("#atrasFormFactura").addEventListener("click", mostrarMenuFactura, false);
    document.querySelector("#atrasBorrarFac").addEventListener("click", mostrarEmitirFactura, false);
    document.querySelector("#atrasBorrarFac").addEventListener("click", mostrarMenuFactura, false);


    document.querySelector("#historialFacturas").addEventListener("click", muestraHistorialFacturas, false);
    document.getElementById("cli").addEventListener('click',mostrarFomularioCliente,false);
    document.getElementById("altaCliente").addEventListener('click',mostrarAltaCliente,false);
    document.getElementById("enviar").addEventListener("click",clienteN,false);
    //boton atras formulario alta cliente
    document.getElementById("atras").addEventListener('click',volverAtrasCliente,false);
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
    //Boton reclamos para mostrar menu
    document.getElementById("reclamos").addEventListener("click",mostrarReclamos,false);
    //mostrar formulario alta reclamo
    document.getElementById("nuevoReclamo").addEventListener("click",mostrarFormularioReclamo,false);
    //boton atras de formulario alta reclamos
    document.getElementById("atrasFormAltaReclamo").addEventListener("click",atrasFormularioAltaReclamo,false);
    //enviar formulario altaReclamo
    document.getElementById("enviarAltaReclamo").addEventListener("click",altaReclamoN,false);
    //click en modifica reclamo para peticion de id
    document.getElementById("actuReclamo").addEventListener("click",mostrarIdModReclamo,false);
    //boton volver atras peticion id de actualizacion de reclamo
    document.getElementById("atrasBotonModReclamo").addEventListener("click",volverAtrasPetIdActuReclamos,false);
    //enviar id para mostrar formulario modicacion reclamo
    document.getElementById("modId").addEventListener("click",comprobarModReclamo,false);
    //modificacion reclamo
    document.getElementById("enviarAltaModReclamo").addEventListener("click",modificaReclamo,false);
    //volver atras formulario mod reclamos
    document.getElementById("atrasFormAltaModReclamo").addEventListener("click",volverAtrasModReclamo,false);
    //mostrar peticion id seguimineto reclamo
    document.getElementById("seguimientoReclamo").addEventListener("click",mostrarFormIdSeguimiento,false);
    //enviar id para imprimir listado
    document.getElementById("segId").addEventListener("click",sacarListado,false);
    //boton atras reclamo
    document.getElementById("atrasBotonSegReclamo").addEventListener("click",atrasBotonMostrarReclamo,false);

    //btnCargarXML
    document.getElementById("btnCargar").addEventListener("click",cargarXML,false);

}
// ------ FUNCIONES CARGAR XML
function cargarXML() {
    var oXML = loadXMLDoc("datos.xml");
    //RECOLECCION DE DATOS CLIENTES
    var nombreCli = oXML.querySelector("clientes > nombre").textContent.trim();
    var apellidoCli = oXML.querySelector("clientes > apellido").textContent;
    var dniCli = oXML.querySelector("clientes > dni").textContent;
    var tlfnCli = oXML.querySelector("clientes > telefono").textContent;
    //RECOLLECCION DATOS EMPLEADOS
    var nombreEmp = oXML.querySelector("empleados > nombre").textContent;
    var apellidoEmp = oXML.querySelector("empleados > apellido").textContent;
    var dniEmp = oXML.querySelector("empleados> dni").textContent;
    var tlfnEmp = oXML.querySelector("empleados > telefono").textContent;
    var sueldoEmp = oXML.querySelector("empleados > sueldo").textContent;
    //RECOLLECCION DATOS RECLAMO
    var idRec = oXML.querySelector("idReclamo").textContent;
    var estadoRec = oXML.querySelector("estado").textContent;
    var fechaRec = oXML.querySelector("fecha").textContent;
    var dni = oXML.querySelector("dniCliente").textContent;
    //RECOLLECCION DATOS FACTURA
    var idFac = oXML.querySelector("idFactura").textContent;
    var fechaFac = oXML.querySelector("fechaFactura").textContent;
    var importeFac = oXML.querySelector("importe").textContent;
    var id = oXML.querySelector("idReclamoFactura").textContent;

    //OBJETOS
    var oCliente = new Cliente(nombreCli, apellidoCli,dniCli, tlfnCli);
    var oEmpleado = new Empleado(nombreEmp, apellidoEmp, dniEmp, tlfnEmp, sueldoEmp);
    var oReclamo = new Reclamo(idRec, estadoRec, fechaRec, oCliente);
    var oFactura = new Factura(idFac, fechaFac, importeFac, oReclamo);

    //FUNCIONES DE CARGA
    oGestorMultas.altaCliente(oCliente);
    oGestorMultas.altaEmpleado(oEmpleado);
    oGestorMultas.altaReclamo(oReclamo);
    oGestorMultas.altaFactura(oFactura);

}
function loadXMLDoc(xml)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",xml,false);
    xhttp.send();
    return xhttp.responseXML;
}
//-----------------Funciones para mostrar mensajes--------------//
function mensaje(sMensaje){
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
    if(sMensaje == "Cliente dado de alta" || sMensaje == "Cliente borrado" || sMensaje == "Reclamo dado de alta" || sMensaje == "Empleado dado de alta" || sMensaje == "Empleado borrado"
            || sMensaje == "Factura dada de alta" )
        toastr["success"](sMensaje, "Mensaje");
    else
        toastr["error"](sMensaje, "Mensaje");
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
//funcion para dar de alta un reclamo
function altaReclamoN(){
    var iId,sEstado,dFecha,oCliente,oReclamo;
    iId = document.altaReclamo.idReclamo.value;
    sEstado = document.altaReclamo.est.value;
    dFecha = document.altaReclamo.fecha.value;
    var sDni = document.altaReclamo.dniClienteReclamo.value;
    oCliente = oGestorMultas.buscaCliente(sDni);
    if(validaFormularioReclamo()== true){
        oReclamo = new Reclamo(iId,sEstado,dFecha,oCliente);
        mensaje(oGestorMultas.altaReclamo(oReclamo))
    }
}
//---------- Alta empleado
function empleadoAlta(){
    var sNombre,sApellido,sNif,oEmpleado,iTfn,fSueldo;
    sNombre = document.altaEmp.nombrEmp.value;
    sApellido = document.altaEmp.apelEmp.value;
    sNif = document.altaEmp.nifEmp.value;
    iTfn = document.altaEmp.telEmp.value;
    fSueldo = document.altaEmp.sueldo.value;
    if(validarEmpleado() == true){
        oEmpleado = new Empleado(sNombre,sApellido,sNif,iTfn,fSueldo);
        mensaje(oGestorMultas.altaEmpleado(oEmpleado));
    }
}
// Alta factura
function altaFactura()
{
    var iId,dFecha,iImporte,oReclamo;
    iId = document.formFactura.idFactura.value;
    dFecha = document.formFactura.fechaFactura.value;
    iImporte = document.formFactura.importeFactura.value;
    var idReclamo = document.formFactura.idFacturaReclamo.value;
    oReclamo = oGestorMultas.buscaReclamo(idReclamo);
    if(validarFactura()== true){
        if(idReclamo != ""){
            if(oGestorMultas.buscaReclamo(idReclamo) != null){
                var oFactura = new Factura(iId,dFecha,iImporte,oReclamo);
                mensaje(oGestorMultas.altaFactura(oFactura))
            }else
                mensaje("No existe reclamo con id "+idReclamo);
        }else
            mensaje("La id de reclamo no puede estar vacia");
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
    if(nif2 == ""){
        bValido = false;	
        sErrores +="El campo nif debe estar relleno";
    }else if (oExpRegNif.test(nif2) == false){
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
//funcion para validar datos de alta de reclamo nuevo
function validaFormularioReclamo(){
    var bValido = true;
    var sErrores = "";
    //validacion id
    var oExpRegId = /[0-9]{4}/
    var id = document.altaReclamo.idReclamo.value.trim();
    document.altaReclamo.idReclamo.value.value = document.altaReclamo.idReclamo.value.trim();
    if (oExpRegId.test(id) == false){
        if(bValido == true){
            bValido = false;		
            document.altaReclamo.idReclamo.focus();		
        }
        sErrores += "Id incorrecto<br>";
        document.altaReclamo.idReclamo.classList.add("error");	
    }
    else {
        document.altaReclamo.idReclamo.classList.remove("error");	
    }
    //validacion dni cliente
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;
    
    var nif = document.altaReclamo.dniClienteReclamo.value.trim();
    document.altaReclamo.dniClienteReclamo.value = document.altaReclamo.dniClienteReclamo.value.trim();
    if (oExpRegNif.test(nif) == false){
        if(bValido == true){
            bValido = false;		
            document.altaReclamo.dniClienteReclamo.focus();		
        }
        sErrores += "Dni incorrecto<br>";
        document.altaReclamo.dniClienteReclamo.classList.add("error");	
    }
    else{
        if(oGestorMultas.buscaCliente(nif)==null){
            if(bValido == true){
                bValido = false;		
                document.altaReclamo.dniClienteReclamo.focus();		
            }
            sErrores += "El dni "+nif+" no se encuentra dado de alta<br>";
            document.altaReclamo.dniClienteReclamo.classList.add("error");
        }else{
            document.altaReclamo.dniClienteReclamo.classList.remove("error");
        }   
    //document.altaReclamo.dniClienteReclamo.classList.remove("error");	
    }
    if (bValido == false){
        mensaje(sErrores);
    }
    
    return bValido;
}
//VAlidar formujlario reclamo de modificacion
function validarFormularioModificacionReclamo(){
    var bValido = true;
    var sErrores = "";
    //validacion id
    var oExpRegId = /[0-9]{4}/
    var id = document.altaModReclamo.idModReclamo.value.trim();
    document.altaModReclamo.idModReclamo.value.value = document.altaModReclamo.idModReclamo.value.trim();
    if (oExpRegId.test(id) == false){
        if(bValido == true){
            bValido = false;		
            document.altaModReclamo.idModReclamo.focus();		
        }
        sErrores += "Id incorrecto<br>";
        document.altaModReclamo.idModReclamo.classList.add("error");	
    }
    else {
        document.altaModReclamo.idModReclamo.classList.remove("error");	
    }
    //validacion dni cliente
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;
    
    var nif = document.altaModReclamo.dniClienteModReclamo.value.trim();
    document.altaModReclamo.dniClienteModReclamo.value = document.altaModReclamo.dniClienteModReclamo.value.trim();
    if (oExpRegNif.test(nif) == false){
        if(bValido == true){
            bValido = false;		
            document.altaModReclamo.dniClienteModReclamo.focus();		
        }
        sErrores += "Dni incorrecto<br>";
        document.altaModReclamo.dniClienteModReclamo.classList.add("error");	
    }
    else{
        if(oGestorMultas.buscaCliente(nif)==null){
            if(bValido == true){
                bValido = false;		
                document.altaModReclamo.dniClienteModReclamo.focus();		
            }
            sErrores += "El dni "+nif+" no se encuentra dado de alta<br>";
            document.altaModReclamo.dniClienteModReclamo.classList.add("error");
        }else{
            document.altaModReclamo.dniClienteModReclamo.classList.remove("error");
        }   
    //document.altaReclamo.dniClienteReclamo.classList.remove("error");	
    }
    if (bValido == false){
        mensaje(sErrores);
    }
    
    return bValido;
}
//validaciones de formulario modificaCLiente
function validacionFormularioModificaCliente(){
    var bValido = true;
    var sErrores = "";
    var oCliente;	       
        //Validacion del nombre
    var sNombre = document.modCli.nombreMod.value.trim();
    document.modCli.nombreMod.value = document.modCli.nombreMod.value.trim();

    var oExpReg = /[a-zA-Z\s]{3,40}/;

    if (oExpReg.test(sNombre) == false){
        if(bValido == true){
            bValido = false;		
            document.modCli.nombreMod.focus();		
        }
        sErrores += "Nombre incorrecto<br>";
        document.modCli.nombreMod.classList.add("error");//Marcaciones de error, si entra lo marcara, si pasa por el else lo desmarca.
    }else{
        document.modCli.nombreMod.classList.remove("error");
        //eliminar con el listClass.remove("error");
    }
        
	//Validacion del apellido
    var sApellido = document.modCli.apeMod.value.trim();
    document.modCli.apeMod.value = document.modCli.apeMod.value.trim();
               
    if (oExpReg.test(sApellido) == false){

        if(bValido == true){
            bValido = false;		
            document.modCli.apeMod.focus();		
        }
        sErrores += "Apellidos incorrecto<br>";
        document.modCli.apeMod.classList.add("error");

    }
    else {
        document.modCli.apeMod.classList.remove("error");	
    }
    
        //validacion del campo nif
    var sNif = document.modCli.nifMod.value.trim();
    document.modCli.nifMod.value = document.modCli.nifMod.value.trim();
        
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;

    if (oExpRegNif.test(sNif) == false){
        if(bValido == true){
            bValido = false;		
            document.modCli.nifMod.focus();		
        }
        sErrores += "Nif incorrecto<br>";
        document.modCli.nifMod.classList.add("error");	
    }
    else {
        document.modCli.nifMod.classList.remove("error");	
    }
    var sTel = document.modCli.telMod.value.trim();
    document.modCli.telMod.value = document.modCli.telMod.value.trim();
        
    var oExpRegNif = /^([9,7,6]{1})+([0-9]{8})$/;

    if (oExpRegNif.test(sTel) == false){
        if(bValido == true){
            bValido = false;		
            document.modCli.telMod.focus();		
        }
        sErrores += "Telefono incorrecto<br>";
        document.modCli.telMod.classList.add("error");	
    }
    else {
        document.modCli.telMod.classList.remove("error");	
    }
    //validacion telefono
    //Condicion para enviar formulario solo si todos los datos son correctos
    if (bValido == false){
        mensaje(sErrores);
    }
    
    return bValido;
}
//validacion de la id y comprobacion de que exista de peticion de id para modificar un reclamo
function comprobarValidarId(){
    var bValido = true;
    var sErrores = "";
    //validacion id
    var oExpRegId = /[0-9]{4}/;
    var id = document.actualizaReclamo.modiId.value.trim();
    document.actualizaReclamo.modiId.value = document.actualizaReclamo.modiId.value.trim();
    
    if (oExpRegId.test(id) == false){
        if(bValido == true){
            bValido = false;		
            document.actualizaReclamo.modiId.focus();		
        }
        sErrores += "Id incorrecto<br>";
        document.actualizaReclamo.modiId.classList.add("error");	
    }
    else {
        if(oGestorMultas.buscaReclamo(id) == null){
            if(bValido == true){
                bValido = false;		
                document.actualizaReclamo.modiId.focus();		
            }
            sErrores += "El reclamo con id "+id+" no se encuentra dado de alta<br>";
            document.actualizaReclamo.modiId.classList.add("error");
        }else
            document.actualizaReclamo.modiId.classList.remove("error");	
    }
    if (bValido == false){
        mensaje(sErrores);
    }
    return bValido;
}
function validarIdSeguiminetoReclamo(){
    var bValido = true;
    var sErrores = "";
    //validacion id
    var oExpRegId = /[0-9]{4}/;
    var id = document.seguimientoReclamo.modId.value.trim();
    document.seguimientoReclamo.modId.value = document.seguimientoReclamo.modId.value.trim();
    
    if (oExpRegId.test(id) == false){
        if(bValido == true){
            bValido = false;		
            document.seguimientoReclamo.modId.focus();		
        }
        sErrores += "Id incorrecto<br>";
        document.seguimientoReclamo.modId.classList.add("error");	
    }
    else {
        if(oGestorMultas.buscaReclamo(id) == null){
            if(bValido == true){
                bValido = false;		
                document.seguimientoReclamo.modId.focus();		
            }
            sErrores += "El reclamo con id "+id+" no se encuentra dado de alta<br>";
            document.seguimientoReclamo.modId.classList.add("error");
        }else
            document.seguimientoReclamo.modId.classList.remove("error");	
    }
    if (bValido == false){
        mensaje(sErrores);
    }
    return bValido;
}
//VALIDAR CAMPOS ALTA EMPLEADO
function validarEmpleado(){
    var bValido = true;
    var sErrores = "";

    var sNombre = document.altaEmp.nombrEmp.value.trim();
    document.altaEmp.nombrEmp.value = document.altaEmp.nombrEmp.value.trim();
    var oExpReg = /[a-zA-Z\s]{3,40}/;

    if (oExpReg.test(sNombre) == false){
        if(bValido == true){
            bValido = false;
            document.altaEmp.nombrEmp.focus();
        }
        sErrores += "Nombre incorrecto<br>";
        document.altaEmp.nombrEmp.classList.add("error");//Marcaciones de error, si entra lo marcara, si pasa por el else lo desmarca.
    }else{
        document.altaEmp.nombrEmp.classList.remove("error");
        //eliminar con el listClass.remove("error");
    }

    //Validacion del apellido
    var sApellido = document.altaEmp.apelEmp.value.trim();
    document.altaEmp.apelEmp.value = document.altaEmp.apelEmp.value.trim();

    if (oExpReg.test(sApellido) == false){

        if(bValido == true){
            bValido = false;
            document.altaEmp.apelEmp.focus();
        }
        sErrores += "Apellidos incorrecto<br>";
        document.altaEmp.apelEmp.classList.add("error");

    }
    else {
        document.altaEmp.apelEmp.classList.remove("error");
    }

    //validacion del campo nif
    var sNif = document.altaEmp.nifEmp.value.trim();
    document.altaEmp.nifEmp.value = document.altaEmp.nifEmp.value.trim();

    var oExpRegNif = /[0-9]{7}[A-Za-z]/;

    if (oExpRegNif.test(sNif) == false){
        if(bValido == true){
            bValido = false;
            document.altaEmp.nifEmp.focus();
        }
        sErrores += "Nif incorrecto<br>";
        document.altaEmp.nifEmp.classList.add("error");
    }
    else {
        document.altaEmp.nifEmp.classList.remove("error");
    }
    var sTel = document.altaEmp.telEmp.value.trim();
    document.altaEmp.telEmp.value = document.altaEmp.telEmp.value.trim();

    var oExpRegNif = /^([9,7,6]{1})+([0-9]{8})$/;

    if (oExpRegNif.test(sTel) == false){
        if(bValido == true){
            bValido = false;
            document.altaEmp.telEmp.focus();
        }
        sErrores += "Telefono incorrecto<br>";
        document.altaEmp.telEmp.classList.add("error");
    }
    else {
        document.altaEmp.telEmp.classList.remove("error");
    }
    //validacion sueldo
    var sueldo = document.altaEmp.sueldo;

    if (sueldo.value <= 0){
        if(bValido == true){
            bValido = false;
            document.altaEmp.sueldo.focus();
        }
        sErrores += "Sueldo incorrecto<br>";
        document.altaEmp.sueldo.classList.add("error");
    }
    else {
        document.altaEmp.sueldo.classList.remove("error");
    }
    //Condicion para enviar formulario solo si todos los datos son correctos
    if (bValido == false){
        mensaje(sErrores);
    }

    return bValido;
}
//VALIDAR DNI EMPLEADO
function validarDniEmp(){
    var bValido = true;
    var sErrores = "";
    var oExpRegNif = /[0-9]{7}[A-Za-z]/;

    var nif2 = document.eliminarDniEmp.nif2Emp.value.trim();
    document.eliminarDniEmp.nif2Emp.value = document.eliminarDniEmp.nif2Emp.value.trim();
    if(nif2 == ""){
        bValido = false;	
        sErrores +="El campo nif debe estar relleno";
    }else if (oExpRegNif.test(nif2) == false){
        if(bValido == true){
            bValido = false;
            document.eliminarDniEmp.nif2Emp.focus();
        }
        sErrores += "Nif incorrecto<br>";
        document.eliminarDniEmp.nif2Emp.classList.add("error");
    }
    else {
        document.eliminarDniEmp.nif2Emp.classList.remove("error");
    }


    if (bValido == false){
        mensaje(sErrores);
    }
    return bValido;
}
function validarFactura()
{
    var bValido = true;
    var sErrores = "";
    var oExpRegId = /[0-9]{4}/
    var id = document.formFactura.idFactura.value.trim();
    document.formFactura.idFactura.value = document.formFactura.idFactura.value.trim();
    var idReclamo = document.formFactura.idFacturaReclamo.value.trim();
    document.formFactura.idFacturaReclamo.value = document.formFactura.idFacturaReclamo.value.trim();
    if (oExpRegId.test(id) == false){
        if(bValido == true){
            bValido = false;
            document.formFactura.idFactura.focus();
        }
        sErrores += "Id factura incorrecto<br>";
        document.formFactura.idFactura.classList.add("error");
    }
    if(idReclamo!=""){
        if(oExpRegId.test(idReclamo) == false && oGestorMultas.buscaReclamo(idReclamo)== null){
            if(bValido == true){
                bValido = false;
                document.formFactura.idFacturaReclamo.focus();
            }
            sErrores += "El reclamo "+idReclamo+" no se encuentra dado de alta<br>";
            document.formFactura.idFacturaReclamo.classList.add("error");
        }
        else{
            document.formFactura.idFacturaReclamo.classList.remove("error");
        }
    }else{
        sErrores += "El campo id reclamo no puede estar vacio<br>";
        document.formFactura.idFacturaReclamo.classList.add("error");
    }

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
//BORRAR EMPLEADO
function borrarEmpleado(){
    var dni = document.eliminarDniEmp.nif2Emp.value;
    if(validarDniEmp() == true){
        mensaje(oGestorMultas.borraEmpleado(dni));
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
    var sDni,sNombre,sApellido,sTelefono,sAntiguo;
    if(validacionFormularioModificaCliente() == true){
        sDni = document.modCli.nifMod.value;
        sTelefono = document.modCli.telMod.value;
        sApellido = document.modCli.apeMod.value;
        sNombre = document.modCli.nombreMod.value;
        sAntiguo = document.modificaDni.modiNif.value;
        mensaje(oGestorMultas.modificaCliente(sNombre,sApellido,sDni,sTelefono,sAntiguo));
    }
}
function comprobarModReclamo(){
    var iIdModificar = document.getElementById("modiId").value;
    var oReclamo = oGestorMultas.buscaReclamo(iIdModificar);
    var iId = document.querySelector("#altaModReclamo #idModReclamo");
    var sEstado = document.querySelector("#altaModReclamo #estMod");
    var fecha = document.querySelector("#altaModReclamo #fechaMod");
    var dniCli = document.querySelector("#altaModReclamo #dniClienteModReclamo");
    
    if(comprobarValidarId() == true){
        mostrarModReclamo();
        iId.setAttribute("value",oReclamo.id);
        dniCli.setAttribute("value",oReclamo.Cliente.nif);
        fecha.setAttribute("value",oReclamo.fecha);
        sEstado.setAttribute("value",oReclamo.estado);
    }
}
function modificaReclamo(){
    if(validarFormularioModificacionReclamo() == true){
        var iId,sEstado,dFecha,sDni,iAntiguaId;
        iId = document.altaModReclamo.idModReclamo.value;
        sEstado = document.altaModReclamo.estMod.value;
        dFecha = document.altaModReclamo.fechaMod.value;
        sDni = document.altaModReclamo.dniClienteModReclamo.value;
        iAntiguaId = document.getElementById("modiId").value;
        mensaje(oGestorMultas.modificaReclamo(iId,sEstado,dFecha,sDni,iAntiguaId));
    }
}
// MODIFICAR EMPLEADO
function comprobarModEmpleadoDni(){
    var sDni = document.modificaDniEmp.modiNifEmp.value;
    var oEmpleado = oGestorMultas.buscaEmpleado(sDni);
    var sDniValor = document.querySelector("#modEmp #nifModEmp");
    var sNombreValor = document.querySelector("#modEmp #nombreModEmp");
    var sApeValor = document.querySelector("#modEmp #apeModEmp");
    var sTelValor = document.querySelector("#modEmp #telefonoModEmp");
    var sSueldo = document.querySelector("#modEmp #sueldoModEmp");

    if(oGestorMultas.buscaEmpleado(sDni) == null )
        mensaje("No existe empleado con dni: "+sDni)
    else{
        mostrarFormModEmpleado();

        sDniValor.setAttribute("value",sDni);
        sNombreValor.setAttribute("value",oEmpleado.nombre);
        sApeValor.setAttribute("value",oEmpleado.apellido);
        sTelValor.setAttribute("value",oEmpleado.telefono);
        sSueldo.setAttribute("value",oEmpleado.sueldo);
    }
}
function modificaEmpleado(){
    var sDni,sNombre,sApellido,sTelefono, sSueldo;
    sDni = document.modEmp.nifModEmp.value;
    sTelefono = document.modEmp.telModEmp.value;
    sApellido = document.modEmp.apeModEmp.value;
    sNombre = document.modEmp.nombreModEmp.value;
    sSueldo = document.modEmp.sueldoModEmp.value;
    mensaje(oGestorMultas.modificaEmpleado(sNombre,sApellido,sDni,sTelefono,sSueldo));
    mostrarMenuEmpleado();
}

//-------------------------Muestra Cliente para pruebas------------------------//
function muestraClientes(){   
    var oVentana = open("","","");
    oVentana.document.title = "Listado de reclamos"
    var oHead = oVentana.document.head;
    var oBody = oVentana.document.body;
    var oLink = document.createElement("link");
    oLink.setAttribute("href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
    oLink.setAttribute("rel","stylesheet");
    oHead.appendChild(oLink);
    var oScript1 = document.createElement("script");
    var oScript2 = document.createElement("script");
    oScript1.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
    oScript2.setAttribute("src","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js");
    oVentana.document.body.appendChild(oGestorMultas.seguimientoReclamos());
    oBody.appendChild(oScript1);
    oBody.appendChild(oScript2);
    var oTabla = oVentana.document.querySelector("#tabla");
    oTabla.style.width = "700px";
    oTabla.style.marginTop = "150px";
}
function sacarListado(){
    if(validarIdSeguiminetoReclamo()){
        muestraClientes();
    }
}
//MOSTRAR MENUS
//---------------------------------
// MOSTRAR MENU PRINCIPAL y MENUS
function mostrarMenuP(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("empleado").style.display = "none";
    document.getElementById("factura").style.display = "none";
    document.getElementById("reclamo").style.display = "none";
}
function mostrarMenuEmpleado(){
    document.getElementById("empleado").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("modEmp").style.display = "none";
    document.getElementById("altaEmp").style.display = "none";
    document.getElementById("modificaDniEmp").style.display="none";
    document.getElementById("eliminarDniEmp").style.display="none";

}

function mostrarAltaEmpleado(){
    document.getElementById("empleado").style.display = "none";
    document.getElementById("altaEmp").style.display = "block";

}
function mostrarModEmpleado(){
    document.getElementById("modificaDniEmp").style.display="block";
    document.getElementById("empleado").style.display = "none";
    document.getElementById("modEmp").style.display = "none";

}

function mostrarMenuBorrarEmp(){
    document.getElementById("empleado").style.display = "none";
    document.getElementById("eliminarDniEmp").style.display = "block";

}
function mostrarFormModEmpleado(){
    document.getElementById("modificaDniEmp").style.display="none";
    document.getElementById("empleado").style.display = "none";
    document.getElementById("modEmp").style.display = "block";
}
function mostrarMenuFactura()
{
    document.getElementById("emisionFactura").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("formFactura").style.display = "none";
    document.getElementById("factura").style.display = "block";
}
function mostrarFormFactura(){
    document.getElementById("factura").style.display = "none";
    document.getElementById("formFactura").style.display = "block";
    document.getElementById("emisionFactura").style.display = "none";
}

function mostrarEmitirFactura() {
    document.getElementById("emisionFactura").style.display = "block";
    document.getElementById("factura").style.display = "none";
}
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
//mostrar reclamos desde menu principal
function mostrarReclamos(){
    var oMenuPrincipal = document.getElementById("menu");
    oMenuPrincipal.style.display = "none";
    var oMenuReclamos = document.getElementById("reclamo");
    oMenuReclamos.style.display = "block";
}
//Mostrar formulario reclamos
function mostrarFormularioReclamo(){
    var oMenuReclamos = document.getElementById("reclamo");
    oMenuReclamos.style.display = "none";
    var oFormularioReclamos = document.altaReclamo;
    oFormularioReclamos.style.display = "block";
}
//funcion para volver atras desde el boton de alta reclamo
function atrasFormularioAltaReclamo(){
    var oForMenuReclamo = document.getElementById("reclamo");
    oForMenuReclamo.style.display = "block";
    var oForAltaReclamo = document.getElementById("altaReclamo");
    oForAltaReclamo.style.display = "none";
}
//funcion para pedir la id de un reclamo para actualizarlo
function mostrarIdModReclamo(){
    var oMenuReclamos = document.getElementById("reclamo");
    oMenuReclamos.style.display = "none";
    var oMenuPeticionIdModReclamos = document.getElementById("actuRec");
    oMenuPeticionIdModReclamos.style.display = "block";
}
//boton volver atras de peticion de id para actualizacion de reclamo
function volverAtrasPetIdActuReclamos(){
    var oMenuReclamos = document.getElementById("reclamo");
    oMenuReclamos.style.display = "block";
    var oMenuPeticionIdModReclamos = document.getElementById("actuRec");
    oMenuPeticionIdModReclamos.style.display = "none";
}
//mostrar formulario modificacion reclamo
function mostrarModReclamo(){
    var oFormMod = document.getElementById("altaModReclamo");
    oFormMod.style.display = "block";
    var oMenuPeticionIdModReclamos = document.getElementById("actuRec");
    oMenuPeticionIdModReclamos.style.display = "none";
}
//volver atras formulario modificacion reclamo
function volverAtrasModReclamo(){
    var oFormularioModREclamo = document.getElementById("altaModReclamo");
    oFormularioModREclamo.style.display = "none";
    var oMenuPeticionIdModReclamos = document.getElementById("actuRec");
    oMenuPeticionIdModReclamos.style.display = "block";
}
//funcion para mostrar formulario peticion id para seguimiento
function mostrarFormIdSeguimiento(){
    var oFormIdSeg = document.seguimientoReclamo;
    oFormIdSeg.style.display = "block";
    var oMenuReclamos = document.getElementById("reclamo");
    oMenuReclamos.style.display = "none";
}
//boton atras peticion reclamo
function atrasBotonMostrarReclamo(){
    var oBoton = document.getElementById("segRec");
    oBoton.style.display = "none";
    var oReclamos = document.getElementById("reclamo");
    oReclamos.style.display = "block";

}

function emiteFactura()
{
    var sId=document.emisionFactura.idModFactura.value;

    if(oGestorMultas.buscaFactura(sId) == null )
        mensaje("No existe Factura con id: "+sId)
    else{
        emisionFactura(sId);
    }
}
function emisionFactura(sId)
{
    var oVentana = open("","","");
    oVentana.document.title = "Factura emitida"
    var oHead = oVentana.document.head;
    var oBody = oVentana.document.body;
    var oLink = document.createElement("link");

    oLink.setAttribute("href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
    oLink.setAttribute("rel","stylesheet");
    oHead.appendChild(oLink);
    var oScript1 = document.createElement("script");
    var oScript2 = document.createElement("script");
    oScript1.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
    oScript2.setAttribute("src","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js");
    oVentana.document.body.appendChild(oGestorMultas.emitirFacturas(sId));
    oBody.appendChild(oScript1);
    oBody.appendChild(oScript2);
    var oTabla = oVentana.document.querySelector("#tabla");
    oBody.appendChild(oTabla);
    oTabla.style.width = "700px";
    oTabla.style.marginTop = "150px";

}
//MOSTRAR HISTORIAL
function muestraHistorialFacturas(){
    var oVentana = open("","","");
    oVentana.document.title = "Historial de facturas"
    var oHead = oVentana.document.head;
    var oBody = oVentana.document.body;
    var oLink = document.createElement("link");
    oLink.setAttribute("href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
    oLink.setAttribute("rel","stylesheet");
    oHead.appendChild(oLink);
    var oScript1 = document.createElement("script");
    var oScript2 = document.createElement("script");
    oScript1.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
    oScript2.setAttribute("src","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js");
    oVentana.document.body.appendChild(oGestorMultas.historialFacturas());
    oBody.appendChild(oScript1);
    oBody.appendChild(oScript2);
    var oTabla = oVentana.document.querySelector("#tabla");
    oBody.appendChild(oTabla);
    oTabla.style.width = "700px";
    oTabla.style.marginTop = "150px";
}
