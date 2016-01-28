//------------------------Creacion de objetos---------------------------------//
//Funcion del objeto persona del que heredan cliente y empleado
function Persona(sNombre,sApellido,sNif){
    this.nombre = sNombre;
    this.apellido = sApellido;
    this.nif = sNif;
}

//Salida de datos en filas de persona
Persona.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td></tr>";
}

//Funcion del objeto cliente que hereda de persona.
function Cliente(sNif,sNombre,sApellido,iTelefono){
    Persona.apply(this,[sNif,sNombre,sApellido]);
    this.telefono = iTelefono;
}
//Realizacion de la herencia
Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

//Salida de datos en filas de cliente
Cliente.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td><td>" + this.telefono + "</td></tr>";
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

//Objeto principal de la aplicacion
function GestorMultas(){
    this.personas = new Array();
    this.reclamos = new Array();
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
    if(this.buscaCliente(oReclamo.id) != null)
        sCadena = "Ya existe un reclamo con la id "+oReclamo.id;
    else{
        this.reclamos.push(oReclamo);
        sCadena = "Reclamo dado de alta";
    }        
    return sCadena;	
}

//------------------------Funciones para listar----------------------------------//Solo para pruebas
GestorMultas.prototype.listadoClientes = function(){
    var sTabla = "";
    sTabla += '<table border="1" ><thead><tr><th>Nombre</th><th>Apellido</th><th>Nif</th><th>Num.Telefono</th></tr></thead>';
    sTabla += '<tbody align="center">';
    for(var i=0;i<this.personas.length;i++){
        if(this.personas[i] instanceof Cliente)
            sTabla += this.personas[i].toHTMLRow();  
    }
    sTabla += '</tbody></table>';
    return sTabla;  
}

//------------------------Funciones para borrar------------------------------//
GestorMultas.prototype.borraCliente = function(sNif){
    var oCliente;
    var sCadena = "";
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
    return sCadena;
}
//------------------------Funciones para modificar------------------------------//
GestorMultas.prototype.modificaCliente = function(sNombre,sApellido,sNif,iTelefono){
    var sCadena = "";
    for(var i=0;i < this.personas.length;i++){
        if(this.personas[i].nif == sNif && this.personas[i] instanceof Cliente){
            this.personas[i].nombre = sNombre;
            this.personas[i].apellido = sApellido;
            this.personas[i].nif = sNif;
            this.personas[i].telefono = iTelefono;
            sCadena = "Cliente con dni "+sNif+" modificado";
        }
    }
    return sCadena;
}
