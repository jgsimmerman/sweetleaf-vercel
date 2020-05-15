var co = require('co');
var mongoose = require('mongoose');

let conn = null;

const uri = 'mongodb+srv://jgsimmerman:k1a3fw9y@cluster0-o8uaq.mongodb.net/test?retryWrites=true&w=majority';

exports.handler = function(event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  run().
    then(res => {
      callback(null, res);
    }).
    catch(error => callback(error));
};

function run() {
  return co(function*() {

    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0
      });
      conn.model('collectionName', new mongoose.Schema({
        schedule: String,
        occupancy: Number,
        count: Number,
        price: Number,
        time: String,
        link: String
      }));
    }

    const M = conn.model('collectionName');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;
  });
}