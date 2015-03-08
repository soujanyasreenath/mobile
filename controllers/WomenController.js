var Women = require("../models/Women");

exports.workItems = function(request, response) {
  response.json(Women.getWorkItems());
};