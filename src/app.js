const express = require('express');
const { ping } = require('./utils/ping');
const path = require('path'); // Importar path para manejar rutas

const app = express();
const port = 3005;

// Middleware para procesar JSON
app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta POST para realizar ping
app.post('/ping', async (req, res) => {
    const { ip } = req.body;

    if (!ip) {
        return res.status(400).json({ error: 'IP address is required' });
    }

    try {
        const result = await ping(ip);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error executing ping' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});