var express = require("express");

var router = express.Router();

// var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.render("index", {page_name: 'home'});
});

router.get("/activities", (req, res) => {
  res.render("activities", {page_name: 'activities'});
})

router.get("/community-resources", (req, res) => {
  res.render("community-resources", {page_name: 'resources'});
})

router.get("/membership", (req, res) => {
  res.render("membership", {page_name: 'membership'});
})

router.get("/news-jobs", (req, res) => {
  res.render("news-jobs", {page_name: 'news'});
})

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
