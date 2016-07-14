var express = require('express');
var elasticsearch = require('elasticsearch');
var router = express.Router();

var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var index = "scrapy";
var type = "xiaomiapp";

router.get('/', function(req, res, next) {
  var data = req.query;

  var name = data['name'] || "";

  client.search({
    index: 'scrapy',
	  type: 'xiaomiapp',
	  body: {
	    query: {
	      match: {
	        _all: name
	      }
	    }
    }
  })
  .then(function(results) {
    console.log(results);
    res.send(200, JSON.stringify(results.hits.hits));
    //res.render('apps', {applist: results.hits.hits});
  })
  .catch(function(err) {
    console.log(err);
    res.send(err);
  })
});

module.exports = router;