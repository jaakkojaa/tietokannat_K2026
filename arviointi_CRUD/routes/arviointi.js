const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

// GET all
router.get('/', function(request, response) {
  arviointi.getAll(function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// GET one
router.get('/:id', function(request, response) {
  arviointi.getOne(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// POST add
router.post('/', function(request, response) {
  arviointi.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// DELETE
router.delete('/:id', function(request, response) {
  arviointi.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// PUT update
router.put('/:id', function(request, response) {
  arviointi.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
