const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const filePath = path.join(rootDir, 'data', 'products.json');
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const filePath = path.join(rootDir, 'data', 'products.json');
    return fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};