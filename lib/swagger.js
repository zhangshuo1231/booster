/**
* Swagger related helper functions
* @module swagger
* 
*/

const _ = require('lodash')

/**
* Returns the Parameter from the request URL.
* 
* @param {object} req The request.
* @param {string} parameterName The name of the swagger parameter in the URL or the body.
* @return {string}
*/
exports.getParameter = function (req, parameterName) {
  return _.get(req, `swagger.params.${parameterName}.value`);
};

/**
* Returns true if Parameter is defined for the request and is a non-blank value
* 
* @param {object} req The request.
* @param {string} parameterName The name of the swagger parameter in the URL or the body.
* @return {string}
*/
exports.hasParameter = function (req, parameterName) {
  if ( _.has(req, `swagger.params.${parameterName}.value`) ) {
    let value = _.get(req, `swagger.params.${parameterName}.value`);
    if ( value !== '' && typeof value !== 'undefined' ) {
      return true;
    }
  }
  return false;
};

/**
* Returns the body from the request URL.
* 
* @param {object} req The request.
* @param {string} parameterName The name of the swagger parameter in the URL or the body.
* @return {string}
*/
exports.getBody = function (req) {
  return _.get(req, `body`);
};

/**
* Returns true if body is defined for the request and is a non-blank value
* 
* @param {object} req The request.
* @return {string}
*/
exports.hasBody = function (req) {
  if ( _.has(req, `body`) ) {
    let value = _.get(req, `body`);
    if ( value !== '' && typeof value !== 'undefined' ) {
      return true;
    }
  }
  return false;
};


/**
* Returns the Parameter from the request Header.
* 
* @param {object} req The request.
* @param {string} parameterName The name of the swagger parameter in the Header.
* @return {string}
*/
exports.getHeader = function (req, parameterName) {
  return _.get(req, ['headers', parameterName]);
};


/**
* Returns true if Header is defined for the request and is a non-blank value
* 
* @param {object} req The request.
* @param {string} parameterName The name of the swagger parameter in the Header.
* @return {string}
*/
exports.hasHeader = function (req, parameterName) {
  if ( _.has(req, ['headers', parameterName]) ) {
    let value = _.get(req, ['headers', parameterName]);
    if ( value !== '' && typeof value !== 'undefined' ) {
      return true;
    }
  }
  return false;
};