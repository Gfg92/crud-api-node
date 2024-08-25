const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const setupSwagger = require('./config/swagger');
const categoriaRoutes = require('./routes/categorias');
const productoRoutes = require('./routes/productos');

const app = express();

app.use(bodyParser.json());

// Configurar rutas
app.use('/categorias', categoriaRoutes);
app.use('/productos', productoRoutes);

// Configurar Swagger
setupSwagger(app);

// Sincronizar base de datos y ejecutar servidor
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('Documentación Swagger en http://localhost:3000/api-docs');
  });
});
