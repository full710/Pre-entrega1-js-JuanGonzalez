# Aplicación Web de Cine

## Descripción

Esta es una aplicación web de cine que permite a los usuarios seleccionar películas, elegir asientos, y proceder al carrito de compras para confirmar su compra de entradas. La aplicación está diseñada con HTML, CSS y JavaScript, y utiliza `localStorage` y `sessionStorage` para gestionar los datos de las películas, las butacas y la información de compra.

## Características Actuales

- **Visualización de Cartelera**: Muestra una lista de películas disponibles con su nombre, formato, costo de entrada y un afiche.
- **Selección de Butacas**: Permite a los usuarios seleccionar asientos disponibles para la película elegida.
- **Carrito de Compras**: Muestra una lista de butacas seleccionadas junto con el costo total y la opción de confirmar la compra.
- **Resumen de Compra**: Muestra un resumen de la compra con la opción de confirmar o cancelar la compra.

## Funcionalidades Planeadas

### 1. **Creación de Usuario e Ingreso**

   - **Descripción**: Se implementará un sistema de autenticación que permitirá a los usuarios crear una cuenta y acceder a la aplicación con sus credenciales.
   - **Características**:
     - Registro de nuevo usuario.
     - Inicio de sesión con nombre de usuario y contraseña.
     - Mantenimiento de sesión con `sessionStorage` o `cookies`.
     - **Estado**: Planeado para futuras versiones.

### 2. **Aplicación de Cupones de Descuento**

   - **Descripción**: Se añadirá la capacidad de aplicar cupones de descuento en la compra de entradas.
   - **Características**:
     - Introducción de un código de cupón durante el proceso de compra.
     - Validación del cupón y aplicación del descuento correspondiente al costo total.
     - **Estado**: Planeado para futuras versiones.

### 3. **Tienda de Snacks**

   - **Descripción**: Se desarrollará una tienda dentro de la aplicación donde los usuarios podrán comprar snacks y bebidas.
   - **Características**:
     - Visualización de un menú de snacks y bebidas.
     - Adición de productos al carrito de compras.
     - Confirmación de compra junto con la compra de entradas.
     - **Estado**: Planeado para futuras versiones.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página web.
- **CSS**: Estilo y diseño de la aplicación.
- **JavaScript**: Funcionalidad de la aplicación y gestión de datos.
- **localStorage**: Almacenamiento de datos persistentes (películas y butacas ocupadas).
- **sessionStorage**: Almacenamiento de datos temporales (película seleccionada y detalles de la compra).


