var express = require('express');
var elasticsearch = require('elasticsearch');
var router = express.Router();

var Apps = require('../models/app');
var elasticClient = new elasticsearch.Client({  
    host: 'localhost:9200',
    log: 'info'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.param('name'))
  Apps
    .find()
    .exec()
    .then(function(apps) {
      res.render('apps', {apps: apps});
    })
    .catch(function(err) {
      res.render('404');
    });
  //res.render('apps', { name: req.param('name') });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
});

module.exports = router;
