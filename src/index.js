import express from 'express';
import routes from './routes/usersRoute.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Définition des routes
routes(app);

app.get("/", (req, res) => {
    res.status(200).send(`Serveur Node.js et Express.js en cours d'exécution sur le port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
