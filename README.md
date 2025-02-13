
# Yugioh API - Express + Docker + Kubernetes

## 📌 Descripción

Esta es una API REST en **Node.js con Express** para gestionar cartas de Yu-Gi-Oh!. Se puede desplegar con **Docker** y **Kubernetes (Minikube)**.

## 🚀 Tecnologías

- **Node.js + Express**: Node.js es una plataforma eficiente para desarrollar aplicaciones de red rápidas y escalables. Express es un framework minimalista para Node.js que facilita la creación de API RESTful. Es ideal para aplicaciones como la nuestra que necesitan manejar peticiones HTTP de forma rápida y sencilla.
  
- **Docker**: Docker permite contenerizar la aplicación y sus dependencias, lo que facilita su despliegue y ejecución en cualquier entorno. Esto garantiza que la aplicación funcione de la misma manera sin importar la máquina en la que se ejecute, simplificando la configuración y asegurando un entorno consistente.

- **Kubernetes (Minikube)**: Kubernetes se utiliza para gestionar la orquestación de contenedores, proporcionando un sistema robusto para el despliegue, escalabilidad y gestión de aplicaciones en contenedores. Minikube nos permite ejecutar Kubernetes en un entorno local de manera simplificada, ideal para desarrolladores que necesitan simular entornos de producción sin necesidad de infraestructura compleja.

- **YAML (para configuraciones de despliegue)**: YAML se utiliza para definir las configuraciones de Kubernetes (como los pods y servicios), lo que hace que el despliegue y la gestión de la infraestructura sea más sencilla y legible. Este formato facilita la automatización de tareas y el mantenimiento de la infraestructura de forma clara y precisa.

---

## 📂 Estructura del Proyecto

```
yugioh-api/
│── 📂 src/
│   ├── 📂 routes/        # Definición de rutas de la API
│   │   ├── cards.js      # Rutas de las cartas
│   ├── 📂 controller/   # Lógica de negocio
│   │   ├── cartaController.js  
│   ├── 📂 model/   # Modelos
│   │   ├── carta.js  
│   ├── 📂 routes/   # Rutas
│   │   ├── carta.js  
│   ├── app.js         # Configuración Express
│   ├── database.js     # Configuración MongoDB
│   ├── index.js         # Archivo principal de arranque
│── 📂 k8s/  
│   ├── deployment.yaml   # Configuración de Kubernetes
│   ├── service.yaml   # Configuración de Kubernetes
│   ├── mongodb-deployment.yaml   # Configuración de Mongo para Kubernetes
│── .dockerignore         # Archivos ignorados por Docker
│── Dockerfile        # Archivo para Docker
│── .gitignore            # Archivos ignorados por Git
│── package.json          # Dependencias del proyecto
│── README.md             # Documentación del proyecto
```

---

## 📦 Instalación y Ejecución

### 🔹 1. Clonar el repositorio

```sh
git clone <URL_DEL_REPO>
cd yugioh-api
```

### 🔹 2. Instalar dependencias

```sh
npm install
```

### 🔹 3. Ejecutar el servidor

```sh
node src/server.js
```

El servidor correrá en [**http://localhost:3000**](http://localhost:3000)

---

## 🛠 Endpoints

| Método | Endpoint     | Descripción              |
| ------ | ------------ | ------------------------ |
| GET    | `/api/cards` | Obtiene todas las cartas |

Ejemplo de respuesta:

```json
[
  { "id": "23423452546hgv35v56hb", "nombre": "Exodia", "atributo": "Luz", "ataque": 1000, "defensa": 1000, "imagen": "https://yugioh.fandom.com/es/wiki/Exodia?file=Foto_exodia%2C_el_prohibido.jpg"},
  { "id": "3jj8d8udfgdf8gdf87", "nombre": "Dragón Blanco de Ojos Azules", "atributo": "Luz", "ataque": 3000, "defensa": 2500, "imagen": "https://yugioh.fandom.com/es/wiki/Drag%C3%B3n_Blanco_de_Ojos_Azules?file=Foto_drag%C3%B3n_blanco_de_ojos_azules.jpg"}
]
```

---

## 🐳 Contenerización con Docker

### 🔹 1. Construir la imagen

```sh
docker build -t yugioh-api .
```

### 🔹 2. Ejecutar el contenedor

```sh
docker run -p 3000:3000 yugioh-api
```

El servicio estará disponible en [**http://localhost:3000**](http://localhost:3000)

---

## ☸️ Despliegue con Kubernetes (Minikube)

### 🔹 1. Iniciar Minikube

```sh
minikube start
```

### 🔹 2. Construir la imagen dentro de Minikube

```sh
eval $(minikube docker-env)
docker build -t yugioh-api:v1 .
```

### 🔹 3. Aplicar configuración de Kubernetes

```sh
kubectl apply -f deploy/deployment.yaml
```

### 🔹 4. Verificar pods y servicios

```sh
kubectl get pods
kubectl get services
```

### 🔹 5. Obtener la URL del servicio

```sh
minikube service yugioh-service --url
```

--- 
