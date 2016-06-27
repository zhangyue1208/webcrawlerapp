var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosastic = require('mongoosastic');

var App = new Schema({
  title: {
    type: String,
    es_indexed: true,
    es_type: 'String'
  },
  appid: {
    type: String
  },
  category: {
    type: String,
    es_indexed: true,
    es_type: 'String'
  },
  cateid: {
    type: String,
    es_indexed: true,
    es_type: 'String'
  },
  version: {
    type: String
  },
  updatetm: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
  ratingct: {
    type: String,
    required: false
  },
  developer: {
    type: String
  },
  relatedrec: {
    type: [String],
    required: false
  },
  developerrec: {
    type: [String],
    required: false
  },
  appurl: {
    type: String
  }
});