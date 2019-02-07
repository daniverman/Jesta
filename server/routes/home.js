const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('on home');
});

module.exports = router;
