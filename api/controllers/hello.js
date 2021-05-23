module.exports = {
    greeting
};

function greeting(req, res) {
    res.status(200).send('Hi Shawn!');
}