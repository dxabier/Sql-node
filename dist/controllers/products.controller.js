"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getTotalProducts = exports.getProducts = exports.getProductById = exports.deleteProductById = exports.createNewProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var _query = require("../database/query");
var getProducts = exports.getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(_query.queries.getAllProducts);
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().query(_query.queries.getAllProducts);
        case 7:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 12]]);
  }));
  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewProduct = exports.createNewProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, quantity, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, description = _req$body.description;
          quantity = req.body.quantity;
          if (!(name == null || description == null)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad request. Fill all fields'
          }));
        case 4:
          if (quantity == null) quantity = 0;
          _context2.prev = 5;
          _context2.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context2.sent;
          _context2.next = 11;
          return pool.request().input("name", _connection.sql.VarChar, name).input("description", _connection.sql.Text, description).input('quantity', _connection.sql.Int, quantity).query(_query.queries.addNewProduct);
        case 11:
          res.json({
            name: name,
            description: description,
            quantity: quantity
          });
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](5);
          res.status(500);
          res.send(_context2.t0.message);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 14]]);
  }));
  return function createNewProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getProductById = exports.getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input('Id', id).query(_query.queries.getProductById);
        case 6:
          result = _context3.sent;
          res.json(result.recordset[0]);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteProductById = exports.deleteProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input('Id', id).query(_query.queries.deleteProduct);
        case 6:
          result = _context4.sent;
          res.sendStatus(204);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getTotalProducts = exports.getTotalProducts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context5.sent;
          _context5.next = 5;
          return pool.request().query(_query.queries.getTotalProducts);
        case 5:
          result = _context5.sent;
          res.json(result.recordset[0]['']);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getTotalProducts(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateProductById = exports.updateProductById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, name, description, quantity, id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, quantity = _req$body2.quantity;
          id = req.params.id;
          if (!(name == null || description == null, quantity === null)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Please fill all fields'
          }));
        case 4:
          _context6.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input('name', _connection.sql.VarChar, name).input('description', _connection.sql.Text, description).input('quantity', _connection.sql.Int, quantity).input('id', _connection.sql.Int, id).query(_query.queries.updateProductById);
        case 9:
          res.json({
            name: name,
            description: description,
            quantity: quantity
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateProductById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();