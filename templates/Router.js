const express = require('express');
const Controller = require('./PATH_TO_YOUR_CONTROLLER');
const Router = express.Router();

// Routers
Router.get('/', Controller.EXAMPLE_FUNC);

module.exports = Router;