module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    customer_name: DataTypes.TEXT,
    how_many: DataTypes.INTEGER,
  });
  return Burger;
};