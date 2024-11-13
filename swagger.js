const swaggerAuto = require('swagger-autogen')

const swaggerAutogen = swaggerAuto()

const doc = {
  info: {
    title: 'Ms tv Ott',
    description: 'Description'
  },
  host: '192.168.1.13:5001'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);



// npm i swagger-autogen swagger-ui-express

// index.js file 
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger-output.json");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

