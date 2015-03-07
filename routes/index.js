var express = require('express');
var router = express.Router();
var MenuController = require('../controllers/MenuController');
// var HomeController = require('../controllers/HomeController');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'LOOKON' });
});
// get menu items
router.get('/api/getMenuItems', MenuController.menuItems);
// get home items
// router.get('/api/getHomeItems', HomeController.homeItems);


module.exports = router;