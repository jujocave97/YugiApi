# Yugioh API - Express + MySQL + Docker + Kubernetes

## 📌 Descripción
Esta es una API REST en **Node.js con Express** para gestionar cartas de Yu-Gi-Oh!. Funciona con **MySQL** y se puede desplegar con **Docker** y **Kubernetes (Minikube)**.

## 🚀 Tecnologías

- **Node.js + Express**: Node.js es una plataforma eficiente para desarrollar aplicaciones de red rápidas y escalables. Express es un framework minimalista para Node.js que facilita la creación de API RESTful. Es ideal para aplicaciones como la nuestra que necesitan manejar peticiones HTTP de forma rápida y sencilla.
  
- **Docker**: Docker permite contenerizar la aplicación y sus dependencias, lo que facilita su despliegue y ejecución en cualquier entorno. Esto garantiza que la aplicación funcione de la misma manera sin importar la máquina en la que se ejecute, simplificando la configuración y asegurando un entorno consistente.

- **Kubernetes (Minikube)**: Kubernetes se utiliza para gestionar la orquestación de contenedores, proporcionando un sistema robusto para el despliegue, escalabilidad y gestión de aplicaciones en contenedores. Minikube nos permite ejecutar Kubernetes en un entorno local de manera simplificada, ideal para desarrolladores que necesitan simular entornos de producción sin necesidad de infraestructura compleja.

- **MySQL**: MySQL es un sistema de gestión de bases de datos relacional (RDBMS) utilizado para almacenar información estructurada. Es altamente confiable y eficiente para manejar grandes volúmenes de datos.

- **YAML (para configuraciones de despliegue)**: YAML se utiliza para definir las configuraciones de Kubernetes (como los pods y servicios), lo que hace que el despliegue y la gestión de la infraestructura sea más sencilla y legible. Este formato facilita la automatización de tareas y el mantenimiento de la infraestructura de forma clara y precisa.

---

## 📂 Estructura del Proyecto

```
yugioh-api/
│── 📂 k8s/  
│   ├── deployment.yaml   # Configuración de la API
│   ├── mysql-deployment.yaml   # Configuración de MySQL
│   ├── mysql-pv.yaml   # Volumen persistente
│   ├── mysql-pvc.yaml   # Reclamo de volumen persistente
│   ├── mysql-service.yaml   # Servicio de MySQL
│   ├── service.yaml   # Servicio de la API
│── 📂 src/
│   ├── 📂 routes/        # Definición de rutas de la API
│   │   ├── carta.js      # Rutas de las cartas
│   ├── 📂 controllers/   # Lógica de negocio
│   │   ├── carta.controller.js  
│   ├── 📂 config/        # Configuración
│   │   ├── database.js   # Configuración de MySQL
│   ├── app.js           # Configuración Express
│   ├── index.js         # Archivo principal
│── .gitignore            # Archivos ignorados por Git
│── Dockerfile            # Configuración de Docker
│── .env.example          # Variables de entorno
│── package.json          # Dependencias del proyecto
│── README.md             # Documentación del proyecto
```

---

## 🛠 Endpoints

| Método | Endpoint     | Descripción              |
| ------ | ------------ | ------------------------ |
| GET    | `/api/yugiapi` | Obtiene todas las cartas |
| POST   | `/api/yugiapi/crear` | Crea una carta |

Ejemplo de respuesta:

```json
[
  { "id": 1, "nombre": "Exodia", "atributo": "Luz", "ataque": 1000, "defensa": 1000, "imagen": "https://yugioh.fandom.com/es/wiki/Exodia?file=Foto_exodia%2C_el_prohibido.jpg"},
  { "id": 2, "nombre": "Dragón Blanco de Ojos Azules", "atributo": "Luz", "ataque": 3000, "defensa": 2500, "imagen": "https://yugioh.fandom.com/es/wiki/Drag%C3%B3n_Blanco_de_Ojos_Azules?file=Foto_drag%C3%B3n_blanco_de_ojos_azules.jpg"}
]
```

---

## 📦 Instalación y Ejecución

### 🔹 1. Clonar el repositorio

```sh
git clone https://github.com/jujocave97/YugiApi
cd yugioh-api
```

### 🔹 2. Instalar dependencias

```sh
npm install
```

### 🔹 3. Configurar variables de entorno

Copiar `.env.example` a `.env` y modificar los valores necesarios.

### 🔹 4. Ejecutar el servidor

```sh
node src/index.js
```

---

## ☸️ Despliegue con Kubernetes (Minikube)

### 🔹 1. Iniciar Minikube

```sh
minikube start
```

### 🔹 2. Aplicar configuración de Kubernetes

```sh
kubectl apply -f k8s/
```

### 🔹 3. Verificar pods y servicios

```sh
kubectl get pods
kubectl get services
```

### 🔹 4. Crear tabla Carta en MySQL

```sh
kubectl exec -it mysql-deployment-XXXXXX -- mysql -u root -p
USE yugibase;
CREATE TABLE cartas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    atributo VARCHAR(255) NOT NULL,
    ataque INT NOT NULL,
    defensa INT NOT NULL,
    imagen VARCHAR(255) NOT NULL
);
```

### 🔹 5. Obtener la URL del servicio

```sh
minikube service yugioh-service --url
```

