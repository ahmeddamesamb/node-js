import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    return super.init({
      prenom: DataTypes.STRING,
      nom: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      telephone: DataTypes.STRING,
      adresse: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
  }

  static associate(models) {
    // Définissez les associations ici si nécessaire
    // Par exemple :
    // this.hasMany(models.Post);
    // this.belongsTo(models.Role);
  }
}
