let mongoose = require('mongoose');

const cluster = '';
const username = '';
const password = '';
const db = 'todolist'

const mongoUri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority`

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