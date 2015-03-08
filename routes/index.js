var express = require('express');
var router = express.Router();
var MenuController = require('../controllers/MenuController');
var WomenController = require('../controllers/WomenController');
var MenController = require('../controllers/MenController');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'LOOKON' });
});
// get menu items
router.get('/api/getMenuItems', MenuController.menuItems);
// get Women work items
router.get('/api/getWorkItems', WomenController.workItems);

// get Men work items
router.get('/api/getMenWorkItems', MenController.menWorkItems);

module.exports = router;