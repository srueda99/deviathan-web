# Sección de Contacto

## Descripción
La sección **Contact** es el punto final del embudo de ventas, proporcionando un formulario elegante y funcional para que los clientes potenciales inicien un proyecto.

## Características Principales
- **Formulario Inteligente**: Permite pre-seleccionar el servicio de interés si el usuario llega desde la sección de servicios (mediante el hash de la URL).
- **Validación de Campos**: Incluye estados visuales para los campos enfocados (focused) y feedback de envío.
- **Feedback de Éxito**: Tras enviar el formulario, se muestra un mensaje de confirmación animado.
- **Diseño Inmersivo**: Fondo con un patrón de rejilla sutil y formas abstractas animadas que refuerzan la identidad de marca.

## Campos del Formulario
- **Nombre Completo**: Texto.
- **Correo Corporativo**: Email corporativo.
- **Servicio de Interés**: Menú desplegable con las opciones principales.
- **Detalles del Proyecto**: Área de texto para descripción libre.

## Detalles Técnicos
- **Ubicación**: `src/components/sections/Contact.tsx`
- **Dependencias**: `framer-motion`, `lucide-react`.
- **Lógica de Estado**:
    - Manejo de `hashchange` para capturar parámetros de la URL.
    - Estados para controlar el proceso de envío (`isSubmitting`, `submitted`).
- **Diseño**: Utiliza `backdrop-blur` intenso y sombras para resaltar el formulario sobre el fondo animado.
