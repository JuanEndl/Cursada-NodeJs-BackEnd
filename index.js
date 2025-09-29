

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
async function mostrarProducto() {
    try{
        const respuesta = await fetch("https://fakestoreapi.com/products/1",{
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

// mostrarProductos()
// mostrarProducto()
/*agregarProducto({
    "id": 21,
    "title": "Prueba",
    "price": 1000,
    "description": "pruebaProducto",
    "category": "string",
    "image": "http://example.com"
})*/
actualizarProducto({
    "id": 4,
    "title": "Prueba",
    "price": 1001,
    "description": "pruebaProducto",
    "category": "string",
    "image": "http://example.com"
})
//eliminarProducto(5)