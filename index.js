const app = require("express")();
const SwaggerExpress = require("swagger-express-mw");
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Booster'
const PORT = '10050'

const config = {
    appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }
    swaggerExpress.register(app);
});

mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT);
console.log(`Server is running on port ${PORT}`)