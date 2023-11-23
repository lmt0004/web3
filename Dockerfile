# Usa la imagen base oficial de Node.js
FROM node:16
# Crea el directorio de la aplicación
WORKDIR /usr/src/app
# Instala las dependencias de la aplicación
# Un patrón de wildcard se utiliza para asegurar que tanto el archivo package.json
# Y package-lock.json sean copiados donde estén disponibles
COPY package*.json ./
RUN npm install
# Empaqueta el código fuente de tu aplicación dentro de la imagen de Docker
COPY . .
# Tu aplicación se une al puerto 3000, así que expondrás ese puerto.
EXPOSE 3000
# Define el comando para correr tu aplicación
CMD [ "node", "server.js" ]