async function create(Producto,producto) {
    var ProductoCreated = await producto.create(Producto)
        .then((data) => {
            console.log("producto Guardado");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return ProductoCreated;
}

module.exports.create=create;