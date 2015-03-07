var Menu = require("../models/Menu");

exports.menuItems = function(request, response) {
  response.json(Menu.getMenuItems());
};