# Documentación del Proyecto

## Descripción

Este proyecto es una API REST básica construida con Node.js, Express, Sequelize, y PostgreSQL. Utilizada para gestionar categorías de productos y productos a modo de CRUD. La API también incluye documentación interactiva usando Swagger.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

## Configuración del Proyecto

### 1. Clonar el Proyecto

Primero, clonar el proyecto y navega hacia él:

```bash
git clone https://github.com/Gfg92/crud-api-node.git
```

```bash
cd crud-api-node
```

Inicializa un nuevo proyecto Node.js con:
```bash
npm init -y
```

### 2. Instalación de Dependencias
Instala las dependencias necesarias para el proyecto utilizando el siguiente comando:
```bash
npm install express sequelize pg pg-hstore body-parser swagger-ui-express swagger-jsdoc
```

### 3. Configuración de la Base de Datos con Docker
Para configurar una instancia de PostgreSQL, utiliza Docker. Ejecuta el siguiente comando para iniciar un contenedor de PostgreSQL:
```bash
docker run --name postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=postgres \
    -p 5432:5432 \
    -d postgres
```
Esto creará un contenedor de Docker llamado postgres que ejecuta una base de datos PostgreSQL en el puerto 5432. Las credenciales de acceso son:

    · Usuario: postgres
    · Contraseña: postgres
    · Base de datos: postgres

### 4. Ejecutar el Proyecto
Para ejecutar el proyecto, utiliza el siguiente comando:
```bash
node index.js
```
Esto iniciará el servidor en http://localhost:3000. Puedes acceder a la documentación de la API generada por Swagger en http://localhost:3000/api-docs.