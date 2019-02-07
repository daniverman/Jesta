let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let db = mongojs('mongodb://daniverman:d159753l@ds139841.mlab.com:39841/jesta_db', ['mission']);

router.get('/get_all', function (req, res, next) {
  db.mission.find(function (err, mission) {
    if (err) {
      res.send(json(err));
    }
    res.json(mission)
  });
});

router.post('/add_mission', function (req, res, next) {
  db.mission.insert(req.body).then(item => {
    res.send("True");
  })
    .cache(err => {
      res.send("False");
    });
});


module.exports = router;
