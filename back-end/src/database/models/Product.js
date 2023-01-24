module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true, 
    tableName: 'posts_categories'
  })

  return Product
}