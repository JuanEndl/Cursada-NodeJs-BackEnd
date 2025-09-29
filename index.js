// obterner todos los pruductos
async function mostrarProductos() {
    try{
        const respuesta = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })

        const data = await respuesta.json()
        console.log(data)

    }catch(err){
        console.error("Error cargando productos:", err);
    }
}


// obterner solo un pruducto
async function mostrarProducto(id) {
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "GET"
        })

        const data = await respuesta.json()
        console.log(data)

    }catch(err){
        console.error("Error cargando productos:", err);
    }
}

// agregar productos
async function agregarProducto(producto) {
    try{
        const respuesta = await fetch("https://fakestoreapi.com/products",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })

        const data = await respuesta.json()
        console.log(data)

    }catch(err){
        console.error("Error cargando productos:", err);
    }
}

// actualizar producto
async function actualizarProducto(producto) {
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/products/${producto.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })

        const data = await respuesta.json()
        console.log(data)

    }catch(err){
        console.error("Error cargando productos:", err);
    }
}


// eliminar producto
async function eliminarProducto(id) {
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "DELETE",
        })

        const data = await respuesta.json()
        console.log(data)

    }catch(err){
        console.error("Error cargando productos:", err);
    }
}

const accion = process.argv[2]; // primer argumento después del archivo
const valor = process.argv[3];  // segundo argumento

switch (accion) {
    case "mostrarTodo":
        mostrarProductos(); //primer argumento
        break;
    case "mostrar":
        mostrarProducto(valor); // segundo argumento
        break;
    case "agregar":
        agregarProducto({
            title: "Prueba Producto agregar",
            price: 500,
            description: "Agregado"
        });
        break;
    case "actualizar":
        actualizarProducto({
            id: valor,
            title: "Prueba Producto actualizado",
            price: 600,
            description: "Actualizado"
        });
        break;
    case "eliminar":
        eliminarProducto(valor);
        break;
    default:
        console.log("Error en la consulta");
}