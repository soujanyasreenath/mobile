var Men = require("../models/Men");

exports.menWorkItems = function(request, response) {
  response.json(Men.getMenWorkItems());
};