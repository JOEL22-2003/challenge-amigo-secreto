//Definiendo array.

let amigos = [];

//Implementando funciones para agregar nombres.

//Función para agregar amigos.
function agregarAmigo(){
    /*1. Capturar el valor del campo de entrada
    para obtener el texto ingresado por el usuario.*/
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    
    /*2. Validar la entrada.*/
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    } 

    /*3. Actualizar el array de amigos.*/
    amigos.push(nombreAmigo);

    /*4. Limpiar el campo de entrada.*/
    inputAmigo.value = "";

    /*5. Limpia el resultado del sorteo*/
    document.getElementById("resultado").innerHTML = "";

    /*6. Llamando a la función actualizar amigo*/
    actualizarAmigo();
}

//Función para actualizar lista de amigos
function actualizarAmigo(){
    /*1. Obtener el elemento de la lista.*/
    const listaDeAmigos = document.getElementById("listaAmigos");

    /*2. Limpiar la lista existente.*/
    listaDeAmigos.innerHTML = "";

    /*3. Iterar sobre el arreglo*/
    for(let i = 0;i < amigos.length; i++){
        //Crear un nuevo elemento de la lista de amigos,
        const li = document.createElement("li");
        //Asigna el nombre al elemento <li>.
        li.textContent = amigos[i]; 
        /*4. Agregar elementos a la lista: Para cada amigo, crear un nuevo 
        elemento de lista.*/
        listaDeAmigos.appendChild(li);
    }
}

//Función para sortear 
function sortearAmigo(){
    /*1. Validar que haya amigos disponibles.*/
    if(amigos.length === 0){
        alert("No hay nombres disponibles para sortear.");
        return;
    }
    
    /*2. Generar un número aleatorio entre 0 y la longitud del arreglo.*/
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    /*3. Obtener el nombre sorteado.*/
    const nombreSorteado = amigos[indiceAleatorio];

    /*4.Mostrar el resultado.*/
    const resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `El amigo secreto sorteado es: <strong>${nombreSorteado}</strong>`;
}

//Funcion para borrar el resultado en pantalla
function borrarAmigo(){
    amigos = []; //Borrar el array de amigos
    
    //Borrar el resultado del campo de amigo
    document.getElementById("amigo").innerHTML = ""; 
    //Borrar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";
    //Borrar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";

}

