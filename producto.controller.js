async function create(product,product) {
    var productoCreated = await product.create(product)
        .then((data) => {
            console.log("producto Guardado");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return productoCreated;
}