module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true, 
    tableName: 'posts_categories'
  })

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  }

  return SaleProduct
}