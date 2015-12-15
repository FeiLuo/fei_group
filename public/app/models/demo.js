define(["can", "canfixture"],function(can, fixture) {

  var Model = can.Model.extend({
    findAll: 'GET /demos'
  }, {});

  fixture('GET /demos', "app/fixtures/demos.json");

  return Model;
});