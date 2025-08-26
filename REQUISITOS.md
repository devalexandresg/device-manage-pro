# ERP Device Informática - Requisitos e Tecnologias

## 🔧 Pré-requisitos do Sistema

### Ambiente de Desenvolvimento
- **Node.js**: v18.0.0 ou superior
- **npm**: v8.0.0 ou superior
- **Git**: Para controle de versão

### Navegadores Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🛠️ Tecnologias Utilizadas

### Core Frontend
- **React**: 18.3.1 - Biblioteca principal
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **React Router DOM**: 6.30.1 - Navegação

### UI/UX
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes base
- **Lucide React**: 0.462.0 - Ícones
- **class-variance-authority**: Variantes de componentes
- **tailwind-merge**: Merge de classes CSS

### Formulários e Validação
- **React Hook Form**: 7.61.1 - Gestão de formulários
- **Zod**: 3.25.76 - Validação de schemas
- **@hookform/resolvers**: 3.10.0 - Integração

### Estado e Data Fetching
- **TanStack Query**: 5.83.0 - Gestão de estado servidor
- **Zustand**: Para estado local (futuro)

### Utilitários
- **date-fns**: 3.6.0 - Manipulação de datas
- **clsx**: 2.1.1 - Conditional classes
- **cmdk**: 1.1.1 - Command palette

## 📦 Dependências Completas

### Produção
```json
{
  "@hookform/resolvers": "^3.10.0",
  "@radix-ui/react-*": "^1.x.x",
  "@tanstack/react-query": "^5.83.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "date-fns": "^3.6.0",
  "lucide-react": "^0.462.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hook-form": "^7.61.1",
  "react-router-dom": "^6.30.1",
  "tailwind-merge": "^2.6.0",
  "zod": "^3.25.76"
}
```

### Desenvolvimento
```json
{
  "@types/react": "^18.3.1",
  "@vitejs/plugin-react-swc": "^3.x.x",
  "typescript": "^5.x.x",
  "tailwindcss": "^3.x.x",
  "postcss": "^8.x.x",
  "autoprefixer": "^10.x.x"
}
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor desenvolvimento (porta 8080)

# Build
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade de Código
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## 📁 Estrutura do Projeto

```
projeto/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── layout/      # Layout, Sidebar, Header
│   │   └── ui/          # Componentes shadcn/ui
│   ├── pages/           # Páginas do sistema
│   ├── lib/             # Utilitários
│   ├── hooks/           # Custom hooks
│   └── types/           # TypeScript types
├── docs/                # Documentação
└── config files        # Configurações (tailwind, vite, etc.)
```

## 🎨 Configurações de Design

### Tailwind Config
- Custom colors (brand orange, neutrals)
- Design tokens personalizados
- Gradientes e sombras
- Animações customizadas

### Tema Escuro/Claro
- CSS Variables para cores
- Toggle automático
- Persistência de preferência

## 📱 Recursos Implementados

### Performance
- Code splitting automático
- Tree shaking
- Asset optimization
- Lazy loading de componentes

### Acessibilidade
- Componentes acessíveis (shadcn/ui)
- Navegação por teclado
- ARIA labels
- Contraste adequado

### SEO Ready
- Meta tags configuradas
- Structured data
- Sitemap ready
- Performance otimizada

---
*Sistema desenvolvido seguindo as melhores práticas de React e TypeScript*