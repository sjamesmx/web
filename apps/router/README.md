# Padelyzer Router

Página de selección inicial para dirigir a los usuarios a la aplicación correcta según su perfil.

## Descripción

Esta aplicación sirve como punto de entrada para los usuarios de Padelyzer, permitiéndoles elegir entre:
- **Jugadores**: Acceso a la plataforma para reservar canchas y conectar con otros jugadores
- **Clubes**: Acceso al software de gestión para clubes de pádel

## Despliegue en Vercel

### Configuración del Proyecto

1. En Vercel, crea un nuevo proyecto
2. Conecta el repositorio de GitHub
3. En la configuración del proyecto:
   - **Root Directory**: `apps/router`
   - **Build Command**: `cd ../.. && npm run build --workspace=@padelyzer/router`
   - **Output Directory**: `.next`
   - **Install Command**: `cd ../.. && npm install`

### Variables de Entorno

No se requieren variables de entorno para este proyecto.

### Dominios Recomendados

- `padelyzer.com` (dominio principal)
- `www.padelyzer.com`

## Desarrollo Local

```bash
# Desde la raíz del monorepo
npm run dev --workspace=@padelyzer/router

# O directamente en la carpeta
cd apps/router
npm run dev
```

El router estará disponible en `http://localhost:3002`

## Estructura

- Página única con dos opciones
- Redirige a:
  - Jugadores: `https://padelyzer.com`
  - Clubes: `https://clubes.padelyzer.com`