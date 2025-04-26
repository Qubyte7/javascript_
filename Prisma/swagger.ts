const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation for my application',
        },
        servers: [
            {
                url: 'http://localhost:5000', // Update with your server URL
            },
        ],
    },
    apis: ['./routes/*.route.ts'], // Path to your API docs
}

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
