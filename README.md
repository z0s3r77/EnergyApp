# API Prices
https://api.preciodelaluz.org/

# Resumen
Esta APP descarga los precios de la luz actuales y los muestra en forma de tarjetas.

# Dependencias

    "@reduxjs/toolkit": "^1.9.6",
    "axios": "^1.5.1",
    "expo": "~49.0.13",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.5",
    "react-native-progress": "^5.0.0",
    "react-native-svg": "^13.14.0",
    "react-redux": "^8.1.3",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2"

# Dev dependencias

    "@babel/core": "^7.20.0"


# Iniciar app

npm install /  bun install
npx expo start

Escaneas el codigo QR con el movil asegurandote estar en la misma red que el portatil.


# Estructura

Tenemos :
 - App.js (Donde React Native carga la app, seria el main.jsx de React)
 - Dentro del App.js tenemos un Provider (Esto es de Redux, un tipo de estructura para montar la app, sirve para compartir el estado por toda la aplicación)
 


# Cosas a implementar

Graficas para mostrar el tramo de luz más barato?
Limpiar código para que sea más eficiente y torelable a fallos?
Notificacion push con el rango más barato para poner la lavadora.
