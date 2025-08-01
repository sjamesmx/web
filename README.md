# 🎾 Padelyzer Platform V2

Plataforma integral de pádel con arquitectura dual B2C/B2B.

## 🏗️ Arquitectura

### 🎾 **B2C - Jugadores** 
- **App móvil** para análisis con IA
- **Precio**: $199 MXN/mes
- **Target**: Jugadores individuales

### 🏢 **B2B - Clubes**
- **Software de gestión** para clubes
- **Precio**: Desde $5,999 MXN/mes  
- **Target**: Negocios y clubes

### 🔀 **Router**
- **Selector inteligente** de perfil
- **Cookies**: Guarda preferencia 30 días
- **Redirige** a la app correcta

## 🚀 Deployments

Cada app se despliega desde un branch específico:

- **`deploy-jugadores`** → App de jugadores (fondo oscuro)
- **`deploy-clubes`** → App de clubes (fondo blanco)
- **`deploy-router`** → Router selector (fondo blanco)

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo - todas las apps
npm run dev

# Desarrollo - apps individuales  
npm run dev:player    # http://localhost:3000
npm run dev:club      # http://localhost:3001
npm run dev:router    # http://localhost:3002

# Build
npm run build
```

## 📁 Estructura

```
├── apps/
│   ├── web-player/     # B2C - Jugadores
│   ├── web-club/       # B2B - Clubes  
│   └── router/         # Selector de perfil
├── packages/
│   ├── ui/             # Componentes compartidos
│   └── config/         # Configuraciones
└── turbo.json          # Turborepo config
```

## 🎨 Diseño

### Jugadores (B2C)
- **Fondo**: Oscuro (#0B0F19)
- **Accent**: Verde lima (#B8FF00)
- **Logo**: Blanco
- **Enfoque**: Mobile-first

### Clubes (B2B)  
- **Fondo**: Blanco (#FFFFFF)
- **Accent**: Azul cielo (#0EA5E9)
- **Logo**: Negro
- **Enfoque**: Desktop-first

## 📋 Stack Tecnológico

- **Framework**: Next.js 14 + App Router
- **Styling**: Tailwind CSS
- **Monorepo**: Turborepo
- **Fonts**: Clash Display
- **Deploy**: Vercel
- **Icons**: Heroicons
- **State**: Cookies (js-cookie)

## 🚀 Deploy

Ver `NEW-PROJECT-SETUP.md` para instrucciones detalladas de deployment.