import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const options = {
  definition: { openapi: '3.0.0', info:{ title:'Marketplace API', version:'1.0.0' }, servers:[{ url:'http://localhost:3000' }]},
  apis: ['./src/routes/*.ts','./src/controllers/*.ts']
};
export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiServe = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);
