# Sección de Servicios

## Descripción
La sección **Services** presenta las áreas de especialización de Deviathan mediante una cuadrícula (grid) dinámica de tarjetas informativas.

## Características Principales
- **Cuadrícula Adaptable**: Utiliza un diseño de grid de CSS que varía el tamaño de las tarjetas (algunas ocupan más columnas o filas) para crear un ritmo visual interesante.
- **Interacción con Contacto**: Cada tarjeta es un enlace que redirige a la sección de contacto, pasando el nombre del servicio como parámetro en la URL para pre-seleccionar la opción correcta en el formulario.
- **Feedback Visual**: Efectos de hover que cambian bordes, sombras y revelan iconos (flechas de acción).

## Servicios Listados
1. **Inteligencia Artificial**: Conversión de datos en decisiones.
2. **Software a la Medida**: Soluciones para problemas únicos.
3. **Desarrollo Web**: Sitios enfocados en la conversión.
4. **Aplicaciones Móviles**: Presencia constante en los dispositivos del cliente.
5. **Automatización**: Eliminación de tareas repetitivas.
6. **Ciberseguridad**: Protección de activos y datos del negocio.

## Detalles Técnicos
- **Ubicación**: `src/components/sections/Services.tsx`
- **Dependencias**: `framer-motion`, `lucide-react`, `next/link`.
- **Animaciones**: Utiliza `staggerChildren` para que las tarjetas aparezcan una tras otra de forma fluida.
