# 💻 Proyecto: almaximoti_ecss

El proyecto consta de dos estructuras principales: **Frontend** y **Backend**.

---

## 📋 Requisitos

Para la ejecución, desarrollo y despliegue del proyecto, son necesarios los siguientes componentes instalados en su sistema:

* **Node.js:** Para la ejecución de la parte del cliente (Frontend).
* **NPM:** Gestor de paquetes de Node.js, necesario para instalar dependencias del Frontend.
* **Python:** Para la ejecución del servidor (Backend).
* **Docker:** Utilizado para la contenerización y orquestación del entorno de desarrollo y producción (base de datos, caché, etc.).

---

## 🏗️ Estructura del Proyecto

| Estructura | Tecnología Principal | Propósito |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js (asumido) | Interfaz de Usuario (UI) y Lógica de Presentación. |
| **Backend** | Python / Django (asumido) | API RESTful, Lógica de Negocio y Persistencia de Datos. |

## 🚀 Guía de Instalación y Ejecución

Sigue estos pasos para poner en marcha el entorno de desarrollo.

## 1. Base de Datos (Docker)

Primero, usaremos Docker para crear la base de datos PostgreSQL. Ejecuta el siguiente script en tu terminal:

```bash
docker run --name almaximoti -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=almaximoti -p 2345:5432 -d postgres
```
    Nota Importante: Si has cambiado la configuración de la base de datos (usuario, contraseña, puerto, etc.), esta debe actualizarse en el archivo bkd/drf/settings.py.

## 2. Backend (Directorio bkd/)

Abre una terminal, sitúate en el directorio bkd/ y ejecuta los siguientes comandos:
Bash

#### 1. Crear un entorno virtual
python -m venv venv

#### 2. Activar el entorno virtual
#### (En Windows usa: venv\Scripts\activate)
source ./venv/bin/activate

#### 3. Instalar dependencias
pip install -r requirements.txt

#### 4. Ejecutar el servidor de Django
python manage.py runserver 8118

El backend ahora estará corriendo en http://127.0.0.1:8118/.

## 3. Frontend (Directorio fnd/)

Abre una nueva terminal, sitúate en el directorio fnd/ y ejecuta:
Bash

#### 1. Instalar dependencias
npm install

#### 2. Iniciar el servidor de desarrollo
npm run dev

El frontend ahora estará corriendo (generalmente en http://localhost:3000/).
