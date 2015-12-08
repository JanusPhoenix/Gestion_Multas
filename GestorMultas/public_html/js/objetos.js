//------------------------Creacion de objetos---------------------------------//

//Funcion del objeto cliente.
function Cliente(sNif,sNombre,sApellido){
    this.nif = sNif;
    this.nombre = sNombre;
    this.apellido = sApellido;
}

//Salida de datos en filas de cliente
Cliente.prototype.toHTMLRow = function (){
    return "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td></tr>";
}


//Objeto principal de la palicacion
function GestorMultas(){
    this.clientes = new Array();
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


//------------------------Funciones de altas----------------------------------//

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