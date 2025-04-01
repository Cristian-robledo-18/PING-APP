const { exec } = require('child_process');

function ping(ipAddress) {
    return new Promise((resolve, reject) => {
        console.log(`Ejecutando comando: ping -n 4 ${ipAddress}`); // Log para depuración
        exec(`ping -n 4 ${ipAddress}`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error ejecutando ping:', error.message); // Log del error
                console.error('stderr:', stderr); // Log del stderr
                reject({ error: stderr || error.message });
                return;
            }

            console.log('stdout:', stdout); // Log del stdout para verificar la salida

            // Procesar la salida del comando ping
            const lines = stdout.split('\r\n');

            // Extraer las respuestas
            const replies = lines.filter(line => line.includes('Respuesta desde') || line.includes('Reply from'));

            // Extraer estadísticas de paquetes perdidos
            const statsLine = lines.find(line => line.includes('Estadísticas de ping') || line.includes('Ping statistics'));
            const packetLossLine = lines.find(line => line.includes('perdidos') || line.includes('Lost'));

            // Extraer tiempos mínimos, máximos y promedio
            const timesLine = lines.find(line => line.includes('Tiempos aproximados') || line.includes('Approximate round trip times'));

            // Construir el objeto JSON con la misma información que la consola
            const result = {
                ip: ipAddress,
                replies: replies.map(reply => reply.trim()), // Respuestas individuales
                statistics: statsLine ? statsLine.trim() : 'N/A', // Estadísticas generales
                packetLoss: packetLossLine ? packetLossLine.trim() : 'N/A', // Paquetes perdidos
                times: timesLine ? timesLine.trim() : 'N/A' // Tiempos aproximados
            };

            resolve(result);
        });
    });
}

module.exports = { ping };