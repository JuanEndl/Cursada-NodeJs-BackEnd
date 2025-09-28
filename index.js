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

mostrarProductos()