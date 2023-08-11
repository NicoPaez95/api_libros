const express = require('express');
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require('./routes/libros');

app.use('/libros', librosRouter)

// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');




app.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000');
});