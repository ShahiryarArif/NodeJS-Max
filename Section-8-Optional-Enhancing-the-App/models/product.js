const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const getProductsFromFile = (cb) => {
  const filePath = path.join(rootDir, 'data', 'products.json');
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(
        path.join(rootDir, 'data', 'products.json'),
        JSON.stringify(products),
        (err) => {
          console.log(err);
        }
      );
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};