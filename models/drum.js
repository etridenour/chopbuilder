'use strict';
module.exports = (sequelize, DataTypes) => {
  const drum = sequelize.define('drum', {
    rudiment: DataTypes.STRING,
    hyperlink: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  drum.associate = function(models) {
    // associations can be defined here
  };
  return drum;
};