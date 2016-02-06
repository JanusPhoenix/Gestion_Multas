//------------------------Creacion de objetos---------------------------------//
//Funcion del objeto persona del que heredan cliente y empleado
function Persona(sNombre,sApellido,sNif){
    this.nombre = sNombre;
    this.apellido = sApellido;
    this.nif = sNif;
}

//Funcion del objeto cliente que hereda de persona.
function Cliente(sNif,sNombre,sApellido,iTelefono){
    Persona.apply(this,[sNif,sNombre,sApellido]);
    this.telefono = iTelefono;
}
//Realizacion de la herencia
Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

//-----------------------------------------------------------------------------------
//FUNCIONES DER CARLOS EMPLEADO Y FACTURA
//FUNCION OBJETO EMPLEADO
function Empleado(sNif,sNombre,sApellido,iTelefono,fSueldo){
    Persona.apply(this,[sNif,sNombre,sApellido]);
    this.telefono = iTelefono;
    this.sueldo = fSueldo;
}
//HERENCIA
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

//ALTA EMPLEADO
GestorMultas.prototype.altaEmpleado = function(oEmpleado)
{
    var sCadena = "";
    //Buscamos empleado
    if(this.buscaEmpleado(oEmpleado.nif) != null)
        sCadena = "Ya existe un empleado con el dni "+oEmpleado.nif;
    else{
        this.personas.push(oEmpleado);
        sCadena = "Empleado dado de alta";
    }
    return sCadena;
}
//BUSCAR EMPLEADO
GestorMultas.prototype.buscaEmpleado = function (sNif){
    var oEmpleado = null;
    for(var i=0;i < this.personas.length;i++){
        if(this.personas[i].nif == sNif && this.personas[i] instanceof Empleado)
            oEmpleado = this.personas[i];
    }
    return oEmpleado;
}

//BORRAR  EMPLEADO
GestorMultas.prototype.borraEmpleado = function(sNif){
    var oEmpleado;
    var sCadena = "";
    if(this.personas.length > 0) {
        for(var i=0;i < this.personas.length;i++){
            if(this.personas[i].nif == sNif && this.personas[i] instanceof Empleado)
                oEmpleado = this.personas[i];
        }
        for(var i=0;i < this.personas.length;i++){
            if(this.personas[i].nif != sNif && this.personas[i] instanceof Empleado)
                sCadena = "No existe empleado con dni "+sNif;
            else{
                this.personas.pop(oEmpleado);
                sCadena = "Empleado borrado";
            }
        }
    }else
        sCadena = "No hay empleados dados de alta";
    return sCadena;
}
//MODIFICAR EMPLEADO
GestorMultas.prototype.modificaEmpleado = function(sNombre,sApellido,sNif,iTelefono,fSueldo){
    var sCadena = "";
    for(var i=0;i < this.personas.length;i++){
        if(this.personas[i].nif == sNif && this.personas[i] instanceof Empleado){
            this.personas[i].nombre = sNombre;
            this.personas[i].apellido = sApellido;
            this.personas[i].nif = sNif;
            this.personas[i].telefono = iTelefono;
            this.personas[i].sueldo = fSueldo;
            sCadena = "Empleado con dni "+sNif+" modificado";
        }
    }
    return sCadena;
}

function Factura(sId_factura,dFecha,dImporte,oReclamo){
    this.id = sId_factura;
    this.fecha = dFecha;
    this.importe = dImporte;
    this.Reclamo = oReclamo;
}

GestorMultas.prototype.altaFactura = function (oFactura){
    var sCadena = "";
    //Buscamos que el cliente no exista
    if(this.buscaFactura(oFactura.id) != null)
        sCadena = "Ya existe un factura con la id "+oFactura.id;
    else{
        this.facturas.push(oFactura);
        sCadena = "Factura dada de alta";
    }
    return sCadena;
}

GestorMultas.prototype.buscaFactura = function(iId){
    var oFactura = null;
    for (var i = 0; i < this.facturas.length; i++) {
        if(this.facturas[i].id == iId)
            oFactura = this.facturas[i];
    }
    return oFactura;
}
GestorMultas.prototype.historialFacturas = function(){
    var texto;
    var oTabla = document.createElement("table");
    oTabla.setAttribute("id","tabla");
    oTabla.setAttribute("border","1");
    oTabla.setAttribute("align","center");
    var oFila = oTabla.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Historial de Facturas");
    oCelda.appendChild(texto);
    oCelda.setAttribute("colspan","6");
    oCelda.setAttribute("align","center");
    oCelda.classList.add("warning");
    oFila = oTabla.insertRow(-1);
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Id");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Fecha");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Importe");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Id reclamo");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Estado reclamo");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Fecha reclamo");
    oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");

    if(this.facturas.length > 0){
        for (var i = 0; i < this.facturas.length; i++) {
            var oFactura = oGestorMultas.buscaFactura(this.facturas[i].id);
            var oReclamo = oFactura.Reclamo;
          //  var oReclamo = oGestorMultas.buscaReclamo(idRec);
            oFila = oTabla.insertRow(-1);
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.facturas[i].id);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.facturas[i].fecha);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.facturas[i].importe);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.id);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.estado);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.fecha);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");

        }
        oTabla.classList.add("table");
    }else
        oTabla = "error";

    return oTabla;
}
GestorMultas.prototype.emitirFacturas=function (sId) {
    var oFactura = oGestorMultas.buscaFactura(sId);
    var oReclamo = oFactura.Reclamo;
    var oCliente = oReclamo.Cliente;

    if ( oFactura.id != null || this.facturas.length > 0) {
        var oTabla = document.createElement("table");
            oTabla.setAttribute("id", "tabla");
        var oFila = oTabla.insertRow(-1);
        var oCelda = oFila.insertCell(-1);


            oTabla.setAttribute("border", "1");
            oTabla.setAttribute("align", "center");
                  texto = document.createTextNode("Factura Id: " + oFactura.id);
            oCelda.appendChild(texto);
            oCelda.setAttribute("colspan", "6");
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("warning");
            oFila = oTabla.insertRow(-1);
            oCelda = oFila.insertCell(-1);
                  texto = document.createTextNode("Nombre cliente");
            oCelda.appendChild(texto);
            oCelda.setAttribute("colspan", "3");
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            oCelda.setAttribute("colspan", "1");
                  texto = document.createTextNode("Nif");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            oCelda.setAttribute("colspan", "1");
                  texto = document.createTextNode("Telefono");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oFila = oTabla.insertRow(-1);
            oCelda = oFila.insertCell(-1);
            oCelda.setAttribute("colspan", "3");
            texto = document.createTextNode(oCliente.nombre + " " + oCliente.apellido);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oCliente.nif);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oCliente.telefono);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oFila = oTabla.insertRow(-1);
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode("Fecha");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode("Importe");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode("Id reclamo");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode("Estado reclamo");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode("Fecha reclamo");
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("active");


            oFila = oTabla.insertRow(-1);
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oFactura.fecha);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oFactura.importe);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.id);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.estado);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(oReclamo.fecha);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align", "center");
            oCelda.classList.add("success");

        oTabla.classList.add("table");
       }
    return oTabla;
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Funcion del objeto reclamo
function Reclamo(sId_reclamo,sEstado,dFechaApertura,oCliente){
    this.id = sId_reclamo;
    this.estado = sEstado;
    this.fecha = dFechaApertura;
    this.Cliente = oCliente;
}

//Objeto principal de la aplicacion
function GestorMultas(){
    this.personas = new Array();
    this.reclamos = new Array();
    this.facturas = new Array();
}

//------------------------Funciones de busqueda-------------------------------//

//Funcion para comprobar que el cliente existe o no en el array
GestorMultas.prototype.buscaCliente = function (sNif){
    var oCliente = null;
    for(var i=0;i < this.personas.length;i++){
        if(this.personas[i].nif == sNif && this.personas[i] instanceof Cliente)
            oCliente = this.personas[i];
    }
    return oCliente;
}
//Funcion para buscar un reclamos en el array reclamos por su id,DEVUELVE UN RECLAMO.
GestorMultas.prototype.buscaReclamo = function(iId){
    var oReclamo = null;
    for (var i = 0; i < this.reclamos.length; i++) {
        if(this.reclamos[i].id == iId)
            oReclamo = this.reclamos[i];
    }
    return oReclamo;
}

//------------------------Funciones de altas----------------------------------//
//Todas las funciones de alta daran error si ya existe, IMPORTANTEEEEE!!!!
//La variable sCadena es la que recogera la capa mensaje, de momento dejaremos el toaster hasta preguntar
//a carlos si lo quito o no por ser jquery.

//funcion para dar de alta un cliente
GestorMultas.prototype.altaCliente = function (oCliente){
    var sCadena = "";
    //Buscamos que el cliente no exista
    if(this.buscaCliente(oCliente.nif) != null)
        sCadena = "Ya existe un cliente con el dni "+oCliente.nif;
    else{
        this.personas.push(oCliente);
        sCadena = "Cliente dado de alta";
    }        
    return sCadena;	
}
//Funcion para insertar un reclamo
GestorMultas.prototype.altaReclamo = function (oReclamo){
    var sCadena = "";
    //Buscamos que el cliente no exista
    if(this.buscaReclamo(oReclamo.id) != null)
        sCadena = "Ya existe un reclamo con la id "+oReclamo.id;
    else{
        this.reclamos.push(oReclamo);
        sCadena = "Reclamo dado de alta";
    }        
    return sCadena;	
}

//funcion para mostrar el seguimiento de un reclamo
GestorMultas.prototype.seguimientoReclamos = function(){
    var oTabla = document.createElement("table");
    oTabla.setAttribute("id","tabla");
    oTabla.setAttribute("border","1");
    oTabla.setAttribute("align","center");
    var oFila = oTabla.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Seguimiento de reclamo");
            oCelda.appendChild(texto);
    oCelda.setAttribute("colspan","7");
    oCelda.setAttribute("align","center");
    oCelda.classList.add("warning");
    oFila = oTabla.insertRow(-1);
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Id");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Estado");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Fecha");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Nombre");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Apellido");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Dni");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oCelda = oFila.insertCell(-1);
    texto = document.createTextNode("Telefono");
            oCelda.appendChild(texto);
    oCelda.setAttribute("align","center");
    oCelda.classList.add("active");
    oFila = oTabla.insertRow(-1);
    if(this.reclamos.length > 0){
        for (var i = 0; i < this.reclamos.length; i++) {
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].id);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].estado);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].fecha);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].Cliente.nombre);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].Cliente.apellido);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].Cliente.nif);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
            oCelda = oFila.insertCell(-1);
            texto = document.createTextNode(this.reclamos[i].Cliente.telefono);
            oCelda.appendChild(texto);
            oCelda.setAttribute("align","center");
            oCelda.classList.add("success");
        }
        oTabla.classList.add("table");
    }else
        oTabla = "error";
    return oTabla;
}

//------------------------Funciones para borrar------------------------------//
GestorMultas.prototype.borraCliente = function(sNif){
    var oCliente;
    var sCadena = "";
    if(this.personas.length > 0){
        for(var i=0;i < this.personas.length;i++){
            if(this.personas[i].nif == sNif && this.personas[i] instanceof Cliente)
                oCliente = this.personas[i];        
        }
        for(var i=0;i < this.personas.length;i++){
            if(this.personas[i].nif != sNif && this.personas[i] instanceof Cliente)
                sCadena = "No existe cliente con dni "+sNif;
            else{
                this.personas.pop(oCliente);
                sCadena = "Cliente borrado";
            }
        } 
    }else
        sCadena = "No hay clientes dados de alta";
    return sCadena;
}
//------------------------Funciones para modificar------------------------------//
GestorMultas.prototype.modificaCliente = function(sNombre,sApellido,sNif,iTelefono,sAntiguoNif){
    var sCadena = "";
    for(var i=0;i < this.personas.length;i++){
        if(this.personas[i].nif == sAntiguoNif && this.personas[i] instanceof Cliente){
            this.personas[i].nombre = sNombre;
            this.personas[i].apellido = sApellido;
            this.personas[i].nif = sNif;
            this.personas[i].telefono = iTelefono;
            sCadena = "Cliente con dni "+sNif+" modificado";
        }
    }
    return sCadena;
}

GestorMultas.prototype.modificaReclamo = function(sId,sEstado,dFecha,sDni,sAntiguoId){
    var sCadena = "";
    for (var i = 0; i < this.reclamos.length; i++) {
        if(this.reclamos[i].id == sAntiguoId){
            this.reclamos[i].id = sId;
            this.reclamos[i].estado = sEstado;
            this.reclamos[i].fecha = dFecha;
            this.reclamos[i].Cliente.nif = sDni;
            sCadena = "Reclamo con id "+sId+" modificado";  
        }
    }
    return sCadena;
}
