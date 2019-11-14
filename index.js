var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/db2", function(err, database) {
  if(err) return console.error(err);

  db = database;

  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere.
});

// Reuse database object in request handlers
router.get("/", function(req, res, next) {
  db.collection("Movies").find({"_id":1}, function(err, docs) {
  
   if(err) return next(err);
    docs.each(function(err, doc) {
      if(doc) {
       res.json(doc);
        }
      //  res.json(JSON.stringify(docs)); 
   
  
  
});

  
});

});

router.get("/", function(req, res, next) {
  db.collection("Movies").find({"_id":2}, function(err, docs) {
  
   if(err) return next(err);
    docs.each(function(err, doc) {
      if(doc) {
       res.json(doc);
        }
      //  res.json(JSON.stringify(docs)); 
   
  
  
});

  
});

});
router.get("/", function(req, res, next) {
  db.collection("Movies").find({"_id":3}, function(err, docs) {
  
   if(err) return next(err);
    docs.each(function(err, doc) {
      if(doc) {
       res.json(doc);
        }
      //  res.json(JSON.stringify(docs)); 
   
  
  
});

  
});

});

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");