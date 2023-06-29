const { Shopping, ShoppingSchema } = require('./shoppings.model');

function setupModels(db) {
  db.model('Shopping', ShoppingSchema);
}

module.exports = setupModels;