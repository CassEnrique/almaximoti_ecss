# 📝 Documentación del proyecto

Para visualizar los **endpoints** nos dirigimos a un navegador y colocamos la siguiente URL:

>`http://127.0.0.1:8118/docs`

Esta nos mostrará una documentación detallada de los endpoints dispuestos en el proyecto.

---

## 🏗️ Funcionamiento del sitio

El funcionamiento del sitio consta de **dos módulos** sencillos:

* **Inicio:** Vemos un *card* con información personal y un enlace al repositorio.
* **Link "Proyecto":** Para visualizar una sección con dos *tabs*.

### 🛒 Módulo Proyecto

Este módulo contiene dos pestañas:

1.  **Proveedores** (Seleccionada por defecto): En esta sección **debemos crear los proveedores** antes de crear un producto.
2.  **Productos / Stock:** Desplegaremos todo producto creado con un **precio de ganancia** asignado.

El precio de ganancia se calcula mediante un porcentaje ingresado respecto al precio del producto por proveedor.

---

## 💰 Cálculo de Ganancia (Fórmula)

La fórmula utilizada para calcular el precio final con ganancia es:

 (( <Ganancia> / <Constante porcentual> ) + <Constante unitaria>) * <Precio Producto>

**Ejemplo Práctico:**

  (( 2.5 / 100 ) + 1) * 345.65
    = 354.29 

* Ganancia = $2.5
* Constante porcentual = $100
* Constante unitaria = $1
* Precio Producto = $345.65

---
