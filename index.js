const productoController = require("./producto.controller");
const ventascontroller = require("./ventas.controller");

var mongoose = require("mongoose");
var productoSchema = require("./producto.model");
var ventaSchema = require("./ventas.model");


mongoose.connect('mongodb://localhost:27017/EXAMENU2', { useNewUrlParser: true }); 
var producto = mongoose.model('producto', productoSchema, 'Producto');
var venta = mongoose.model('venta', ventaSchema, 'venta');

async function productoCreated() {
    var Producto = {
        precio: 150,
        cantidad: 50,
        minimo: 40,
        maximo:60,
        costo:100,
        nombre: "audifonos"
    };
    
    var productoCreated = await productoController.create(Producto,producto);
    console.log(" producto guardado ");
    console.log(productoCreated);
}
productoCreated();