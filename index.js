const app = require("express")();
const SwaggerExpress = require("swagger-express-mw");

const config = {
    appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }
    swaggerExpress.register(app);
});

app.listen('10050');
console.log('Ready to serve you, sir')