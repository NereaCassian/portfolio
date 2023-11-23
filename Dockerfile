# Usa una imagen base de Node.js
FROM node:21

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN yarn install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Construye la aplicación
RUN yarn build

# Expón el puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
