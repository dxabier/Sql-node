"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = exports.queries = {
  getAllProducts: 'Select * FROM Products',
  addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES(@name, @description, @quantity)',
  getProductById: 'Select * from Products WHERE Id = @Id',
  deleteProduct: 'DELETE from Products WHERE Id = @Id',
  getTotalProducts: 'Select Count(*) FROM Products',
  updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id'
};