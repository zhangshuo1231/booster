const bunyan = require('bunyan')
const log = bunyan.createLogger({name: "booster"});
const Swagger = require("../../lib/swagger.js");
const clients = require('../../lib/persistence/model/client')

module.exports = {
    greeting,
    addClients
};

function greeting(req, res) {
    log.info("Entering greeting method")
    res.status(200).send('Hi Shawn!');
    log.info("Exiting greeting method")
}

async function addClients(req, res) {
    log.info("Entering addClient method")
    const jsonObj = Swagger.getBody(req);
    const result = await clients.insertMany(jsonObj);
    res.status(200).send(result);
    log.info("Exiting addClient method")
}