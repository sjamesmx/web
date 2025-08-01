# Configuración de Vercel para Padelyzer Platform

Este documento describe cómo configurar los 3 proyectos de Padelyzer en Vercel.

## Estructura del Monorepo

```
web/
├── apps/
│   ├── router/        # Página de selección inicial
│   ├── web-player/    # App para jugadores (B2C)
│   └── web-club/      # App para clubes (B2B)
└── packages/
    ├── ui/            # Componentes compartidos
    └── config/        # Configuraciones compartidas
```

## Configuración de los 3 Proyectos en Vercel

### 1. Router (Página Principal)

**Dominio**: `padelyzer.com` y `www.padelyzer.com`

#### Configuración en Vercel:
- **Repository**: `sjamesmx/web`
- **Branch**: `main` o `deploy-clubes`
- **Root Directory**: `apps/router`
- **Framework Preset**: Next.js
- **Build Settings**:
  - Build Command: `cd ../.. && npm run build --workspace=@padelyzer/router`
  - Output Directory: `.next`
  - Install Command: `cd ../.. && npm install`

### 2. Web Player (Jugadores)

**Dominio**: `app.padelyzer.com` o `jugadores.padelyzer.com`

#### Configuración en Vercel:
- **Repository**: `sjamesmx/web`
- **Branch**: `main` o `deploy-jugadores`
- **Root Directory**: `apps/web-player`
- **Framework Preset**: Next.js
- **Build Settings**:
  - Build Command: `cd ../.. && npm run build --workspace=@padelyzer/web-player`
  - Output Directory: `.next`
  - Install Command: `cd ../.. && npm install`

### 3. Web Club (Clubes)

**Dominio**: `clubes.padelyzer.com`

#### Configuración en Vercel:
- **Repository**: `sjamesmx/web`
- **Branch**: `main` o `deploy-clubes`
- **Root Directory**: `apps/web-club`
- **Framework Preset**: Next.js
- **Build Settings**:
  - Build Command: `cd ../.. && npm run build --workspace=@padelyzer/web-club`
  - Output Directory: `.next`
  - Install Command: `cd ../.. && npm install`

## Pasos para Agregar un Nuevo Proyecto en Vercel

1. **Inicia sesión en Vercel**
   - Ve a https://vercel.com/dashboard

2. **Crea un nuevo proyecto**
   - Click en "Add New..." → "Project"

3. **Importa el repositorio de GitHub**
   - Selecciona `sjamesmx/web`
   - Autoriza acceso si es necesario

4. **Configura el proyecto**
   - Nombra el proyecto (ej: `padelyzer-router`, `padelyzer-player`, `padelyzer-club`)
   - Selecciona el branch correcto
   - **IMPORTANTE**: Configura el Root Directory según el proyecto

5. **Configura Build & Development Settings**
   - Usa los comandos especificados arriba para cada proyecto
   - Vercel detectará automáticamente que es Next.js

6. **Variables de Entorno** (si aplica)
   - Para web-player y web-club podrías necesitar agregar variables como:
     - `NEXT_PUBLIC_API_URL`
     - `NEXT_PUBLIC_STRIPE_KEY`
     - etc.

7. **Deploy**
   - Click en "Deploy"
   - Espera a que termine el build

8. **Configura los dominios**
   - Ve a Settings → Domains
   - Agrega los dominios correspondientes

## Estructura de URLs Final

- `padelyzer.com` → Router (selección de perfil)
- `app.padelyzer.com` → Jugadores
- `clubes.padelyzer.com` → Clubes

## Notas Importantes

1. **Monorepo**: Todos los proyectos están en el mismo repositorio pero se despliegan por separado
2. **Dependencies**: Cada proyecto maneja sus propias dependencias pero comparten packages
3. **Build Cache**: Vercel cachea las builds, lo que hace los deploys subsecuentes más rápidos
4. **Preview Deployments**: Cada PR generará preview URLs para cada proyecto

## Comandos Útiles para Desarrollo Local

```bash
# Desarrollar todos los proyectos
npm run dev

# Desarrollar un proyecto específico
npm run dev:router
npm run dev:player
npm run dev:club

# Build de un proyecto específico
npm run build:router
npm run build:player
npm run build:club
```

## Troubleshooting

Si algún build falla en Vercel:

1. Verifica que el `Root Directory` esté correctamente configurado
2. Asegúrate de que los comandos de build incluyan `cd ../..` para volver a la raíz
3. Revisa que todas las dependencias estén instaladas
4. Verifica los logs de build en Vercel para errores específicos