const express = require("express");
const router = express.Router();

router.get('/api', (req, res) =>{
  res.json({
    message: 'Api is ok'
  })
})

module.exports = router;
