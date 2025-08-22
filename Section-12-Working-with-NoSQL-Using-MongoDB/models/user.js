const { ObjectId } = require('mongodb');

const getDb = require('../util/database').getDb;
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('users').updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('users').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(id) {
    const db = getDb();
    return db.collection('users').find({ _id: new ObjectId(id) }).next()
      .then(user => {
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}