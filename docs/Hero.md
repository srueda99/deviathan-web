# Sección Hero

## Descripción

La sección **Hero** es la primera impresión que los visitantes tienen de Deviathan. Está diseñada para ser visualmente impactante y transmitir inmediatamente la naturaleza innovadora y tecnológica de la empresa.

## Características Principales

- **Fondo Interactivo**: Incluye una rejilla magnética reactiva al movimiento del ratón implementada en un `<canvas>`.
- **Simulación de IA**: Un widget de chat que muestra escenarios realistas de cómo la inteligencia artificial puede ayudar en un negocio (análisis de datos, reservas, atención al cliente).
- **Simulación de Automatización**: Un widget que visualiza procesos de automatización en tiempo real (inventarios, onboarding, conciliación bancaria).
- **Efectos Visuales**: Utiliza gradientes animados, desenfoques (blur) y movimientos sutiles controlados por `framer-motion`.

## Detalles Técnicos

- **Ubicación**: `src/components/sections/Hero.tsx`
- **Dependencias**: `framer-motion`, `lucide-react`, `next-themes`.
- **Interacción**:
  - Seguimiento del ratón para efectos 3D.
  - Ciclos de animación automáticos para las simulaciones de chat y procesos.
- **Responsive**: Ajusta su diseño para móviles, ocultando las visualizaciones más complejas y centrándose en el mensaje principal.

## Contenido de las Simulaciones

### Escenarios de IA

- Análisis de ventas Q1.
- Ocupación de mesas VIP.
- Bot de atención al cliente.
- Productos más vendidos.
- Control de inventario.

### Escenarios de Automatización

- Sincronización de inventario multitienda.
- Onboarding corporativo.
- Conciliación bancaria.
