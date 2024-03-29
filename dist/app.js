"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var app = (0, _express["default"])();

//settings
app.set("port", _config["default"].port);

//middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_products["default"]);
var _default = exports["default"] = app;