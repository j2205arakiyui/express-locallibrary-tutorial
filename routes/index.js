const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("index",{title:"地域図書館ホーム"});
  
});

module.exports = router;
