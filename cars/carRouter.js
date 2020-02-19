const express = require('express');

// database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  // an accounts by its id
  // select * from accounts where id = :id
  db.select('*').from('cars')
    .where({ id: req.params.id })
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to get requested car" });
    });
});

router.post('/', (req, res) => {
  // add an account
  db('cars')
    .insert(req.body, 'id')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to add the car" });
    });
});

router.put('/:id', (req, res) => {
  // update an account
  const id = req.params.id;
  const changes = req.body;
  db('cars')
    .where({ id }) // remember to filter or all records will be updated
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to update the car" });
    });
});

router.delete('/:id', (req, res) => {
  // delete an accounts
  const id = req.params.id;
  db('cars')
    .where({ id }) // remember to filter or all records will be deleted
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to delete the car" });
    });
});

router.get('/', (req, res) => {
  // list of accounts
  db.select('*').from('cars')
    .then(carRouter => {
      res.status(200).json(carRouter);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to get the list of cars" });
    });
});

module.exports = router;