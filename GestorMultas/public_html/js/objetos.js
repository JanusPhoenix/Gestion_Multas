//------------------------Creacion de objetos---------------------------------//
//Funcion del objeto persona del que heredan cliente y empleado
function Persona(sNif,sNombre,sApellido){
    this.nif = sNif;
    this.nombre = sNombre;
    this.apellido = sApellido;
}

//Salida de datos en filas de persona
Persona.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td></tr>";
}

//Funcion del objeto cliente que hereda de persona.
function Cliente(sNif,sNombre,sApellido,dImporte){
    Persona.apply(this,[sNif,sNombre,sApellido]);
    this.importe = dImporte;
}
//Realizacion de la herencia
Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

//Salida de datos en filas de cliente
Cliente.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td><td>" + this.importe + "</td></tr>";
}

//Funcion del objeto empleado que hereda de persona
function Empleado(sNif,sNombre,sApellido,dSueldo){
    Persona.apply(this,[sNif,sNombre,sApellido]);
    this.sueldo = dSueldo;
}
//Realizacion de la herencia
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

//Salida de datos en filas de empleado
Empleado.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td><td>" + this.sueldo + "</td></tr>";
}

//Funcion del objeto reclamo
function Reclamo(sId_reclamo,sEstado,dFechaApertura,oCliente){
    this.id = sId_reclamo;
    this.estado = sEstado;
    this.fecha = dFechaApertura;
    this.Cliente = oCliente;
}

//Salida de datos en filas de reclamo
Reclamo.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.id + "</td><td>" + this.estado + "</td><td>" + this.fecha + "</td><td>" + this.Cliente.toHTMLRow + "</td></tr>";
}

//Funcion el objeto factura
function Factura(sId_factura,dFecha,dImporte,oReclamo){
    this.id = sId_factura;
    this.fecha = dFecha;
    this.importe = dImporte;
    this.Reclamo = oReclamo
}

//Salida de datos en filas de factura
Factura.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.id + "</td><td>" + this.fecha + "</td><td>" + this.importe + "</td><td>" + this.Reclamo.toHTMLRow + "</td></tr>";
}

//Objeto principal de la aplicacion
function GestorMultas(){
    this.clientes = new Array();
    this.empleados = new Array();
    this.reclamos = new Array();
    this.facturas = new Array();
}


//------------------------Funciones de busqueda-------------------------------//

//Funcion para comprobar que el cliente existe o no en el array
GestorMultas.prototype.buscaCliente = function (sNif){
    var oCliente = null;
    for(var i=0;i < this.clientes.length;i++){
        if(this.clientes[i].nif == sNif)
            oCliente = this.clientes[i];
    }
    return oCliente;
}
//Funcion para buscar un empleado en el array por el dni
GestorMultas.prototype.buscaEmple = function (sNif){
    var oEmpleado = null;
    for(var i=0;i < this.empleados.length;i++){
        if(this.empleados[i].nif == sNif)
            oEmpleado = this.empleados[i];
    }
    return oEmpleado;
}
//Funcion para buscar un reclamo en el array reclamos
GestorMultas.prototype.buscaReclamo = function (sId_reclamo){
    var oReclamo = null;
    for(var i=0;i < this.reclamos.length;i++){
        if(this.reclamos[i].id == sId_reclamo)
            oReclamo = this.reclamos[i];
    }
    return oReclamo;
}
//Funcion para buscar una factura en el array facturas
GestorMultas.prototype.buscaFactura = function (sId_factura){
    var oFactura = null;
    for(var i=0;i < this.facturas.length;i++){
        if(this.facturas[i].id == sId_factura)
            oFactura = this.facturas[i];
    }
    return oFactura;
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
        this.clientes.push(oCliente);
        sCadena = "Cliente dado de alta";
    }        
    return sCadena;	
}
//funcion para dar de alta un empleado
GestorMultas.prototype.altaEmpleado = function (oEmpleado){
    var sCadena = "";
    //Buscamos que el cliente no exista
    if(this.buscaEmple(oEmpleado.nif) != null)
        sCadena = "Ya existe un empleado con el dni "+oEmpleado.nif;
    else{
        this.empleados.push(oEmpleado);
        sCadena = "Empleado dado de alta";
    }        
    return sCadena;	
}
//funcion para crear un reclamo
GestorMultas.prototype.altaReclamo = function (oReclamo,sNif){
    var sCadena = "";
    var oCliente = this.buscaCliente(sNif);
    //Funcion para el error de que no exista un cliente con el dni introducido
    if(this.buscaCliente(oCliente) == null){
        sCadena = "Debes introducir el dni de un cliente";
    }
    //funcion para introducir el reclamo
    //Buscamos que el cliente no exista
    if(this.buscaReclamo(oReclamo.id) != null)
        sCadena = "Ya existe un reclamo con la id "+oReclamo.id;
    else{
        this.reclamos.push(oReclamo);
        sCadena = "Reclamo dado de alta";
    }        
    return sCadena;	
}
//funcion para crear una factura
GestorMultas.prototype.insertaFactura = function (oFactura){
    var sCadena = "";
    //Buscamos que el cliente no exista
    if(this.buscaFactura(oFactura.id) != null)
        sCadena = "Ya existe una factura con el numero : "+oFactura.id;
    else{
        this.facturas.push(oFactura);
        sCadena = "Factura introducida";
    }        
    return sCadena;	
}