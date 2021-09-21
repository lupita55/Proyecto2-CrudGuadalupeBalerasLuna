    
    const addAgregar = document.getElementById('agregar')
    const ListaProd = document.getElementById('lista-productos')

addAgregar.addEventListener("click",function(){
    
    const addProducto=document.getElementById('producto');
    const addCantidad=document.getElementById('cantidad');
    const addDetalles=document.getElementById('detalles');
    
    var Jason = {'producto':addProducto.value,'cantidad':addCantidad.value,'detalles':addDetalles.value};
    guardarProducto(Jason);
    
    const addLista = document.createElement('li')
    addLista.innerHTML = "<div id="+addProducto.value+"> Producto: "+addProducto.value+" Cantidad: "+addCantidad.value+" Detalles: "+addDetalles.value+"<button id='editar' class='editar' type='button' onclick='funEditar("+addProducto.value+");'>Editar</button><button id='eliminar' class='eliminar' type='button' onclick='funEliminar("+addProducto.value+"\');'>Eliminar</button></div>";
    ListaProd.appendChild(addLista)

    addProducto.value="";
    addCantidad.value="";
    addDetalles.value="";

    
});

function guardarProducto(parametro){
    window.localStorage.setItem("producto",JSON.stringify(parametro));
 
}

function funEditar(){
    console.log("Entró función editar");
}

function funEliminar(producto){
    console.log(producto);
    document.getElementById(producto).innerHTML="";
}