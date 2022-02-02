let mongoose = require('mongoose');

const password = 'bYyA3eNXVT38YaUTJTg';
const mongoUri = `mongodb+srv://gnic:${password}@cluster0.uo8vs.mongodb.net/todolist?retryWrites=true&w=majority`

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(mongoUri)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()