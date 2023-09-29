// Importing Dependencies:
const mongodb = require('../db/connect'); // is a reference to my database connection
const ObjectId = require('mongodb').ObjectId; // is a type provided by the MongoDB driver. Allows me to work with MongoDB's unique identifiers.

// Function that handles a GET request.
// It first retrieves the collection named 
// -contacts- from the database:
const getAll = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db('cse-341').collection('contacts').find().toArray();
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
      .db('cse-341')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

// Create a POST route for creating new contacts that returns the ID 
// of the new contact and a 201 status
const createContact = async (req, res) => {
  const contact = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, favoriteColor: req.body.favoriteColor, birthday: req.body.birthday };
  const response = await mongodb.getDb().db('cse-341').collection('contacts').insertOne(contact);
  if (response.acknowledged){
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error);
  };
  
};

// Create a PUT route for updating a contact that 
// returns a 204 status
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, favoriteColor: req.body.favoriteColor, birthday: req.body.birthday };
  const response = await mongodb.getDb().db('cse-341').collection('contacts').replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error);
  };
  
};

// Create a DELETE route for deleting a contact that 
// returns a 200 status

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('cse-341').collection('contacts').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error);
  };
  
};

  
  module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };