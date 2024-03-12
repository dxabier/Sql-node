"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
// import './database/connection.js' se utilizo para hacer prueba de conexión a la bd.
_app["default"].listen(3000);
console.log('server on port', 3000);