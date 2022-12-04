const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');

const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'express-api',
            version: '1.0.0',
            description: "express-api"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: {
            bearerAuth: []
        }
    },
    apis: ['./src/routes/*route.js'],
};

const openApiSpecification = swaggerJsdoc(options);
// fs.writeFileSync('./swagger.json', JSON.stringify(openApiSpecification));

module.exports = openApiSpecification;