const express = require('express');
const cors = require('cors'); // ← IMPORTANTE
const { crearProducto, listarProductos } = require('./inventoryService');
const app = express();
app.use(cors());
app.use(express.json());
// Listar productos
// ← HABILITA CORS
// ← NECESARIO PARA PROCESAR JSON
app.get('/api/productos', (req, res) => {
const items = listarProductos();
res.json({ data: items });
});
// Crear producto
app.post('/api/productos', (req, res) => {
try {
const nuevo = crearProducto(req.body);
res.status(201).json({ data: nuevo });
} catch (err) {
res.status(400).json({
error: 'VALIDATION_ERROR',
message: err.message
});
14
}
});
module.exports = app;