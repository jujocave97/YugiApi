# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia todos los archivos al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expón el puerto que la aplicación va a usar
EXPOSE 4000

# Inicia la aplicación con nodemon
CMD ["npm", "start"]

