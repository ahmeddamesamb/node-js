import User from '../models/user.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error('Erreur lors de la récupération des utilisateurs', err);
    res.status(500).send('Erreur serveur');
  }
};

const createUser = async (req, res) => {
  const { prenom, nom, email, password, telephone, adresse } = req.body;
  try {
    const newUser = await User.create({ prenom, nom, email, password, telephone, adresse });
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur', err);
    res.status(400).send('Erreur lors de la création de l\'utilisateur');
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { prenom, nom, email, password, telephone, adresse } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    await user.update({ prenom, nom, email, password, telephone, adresse });
    res.json(user);
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur', err);
    res.status(400).send('Erreur lors de la mise à jour de l\'utilisateur');
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    await user.destroy();
    res.send('Utilisateur supprimé avec succès');
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'utilisateur', err);
    res.status(500).send('Erreur serveur');
  }
};

export { getUsers, createUser, updateUser, deleteUser };
