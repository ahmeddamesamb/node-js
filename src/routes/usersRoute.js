import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const routes = (app) => {
    app.route("/api/users")
        .get(getUsers)
        .post(createUser);
    
    app.route("/api/users/:id")
        .put(updateUser)
        .delete(deleteUser);
};

export default routes;
