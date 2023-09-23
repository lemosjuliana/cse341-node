// Importing Dependencies:
const mongodb = require('../db/connect'); // is a reference to my database connection
const ObjectId = require('mongodb').ObjectId; // is a type provided by the MongoDB driver. Allows me to work with MongoDB's unique identifiers.

// Function that handles a GET request.
// It first retrieves the collection named 
// -contacts- from the database:
// const getAll = async (req, res, next) => {
//   try {
//     const result = await mongodb.getDb().db().collection('contacts').find({}).toArray();
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const getAll = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection('contacts').find({}).toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

  
// Similar to -getAll- function.
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
  module.exports = { getAll, getSingle };