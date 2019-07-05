const productsController = require("./producto.controller");
const saleCintroller = require("./venta.controller");

var mongoose = require("mongoose");
var productSchema = require("./producto.model");
var saleSchema = require("./ventas.model");


mongoose.connect('mongodb://localhost:27017/EXAMENU2', { useNewUrlParser: true }); 
var Product = mongoose.model('Producto', productSchema, 'producto');
var Sale = mongoose.model('venta', saleSchema, 'venta');

