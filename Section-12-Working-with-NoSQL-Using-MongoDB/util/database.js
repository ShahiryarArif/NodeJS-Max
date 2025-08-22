const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
  MongoClient.connect('mongodb+srv://shahiryararif:12345@cluster0.y7gpodz.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
  .then(client => {
    console.log('Connected to MongoDB');
    _db = client.db();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error('No database found!');
};

module.exports = {
  mongoConnect,
  getDb
};
