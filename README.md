# Ping App

Este proyecto es una aplicación simple que permite hacer ping a direcciones IP en el entorno local y devuelve los resultados en formato JSON.

## Estructura del Proyecto

```
ping-app
├── src
│   ├── app.js          # Punto de entrada de la aplicación
│   └── utils
│       └── ping.js     # Función para ejecutar el comando de ping
├── package.json        # Archivo de configuración de npm
├── .gitignore          # Archivos y directorios a ignorar por Git
└── README.md           # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd ping-app
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para ejecutar la aplicación, utiliza el siguiente comando:

```
node src/app.js <DIRECCION_IP>
```

Reemplaza `<DIRECCION_IP>` con la dirección IP que deseas hacer ping.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.