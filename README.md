# Fasa Arquitetura

Site institucional da Fasa Arquitetura - Especialistas em design contemporâneo, projetos arquitetônicos, design de interiores e consultoria.

## 🚀 Stack Tecnológica

- **Next.js 16** - Framework React full-stack com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Turbopack** - Bundler de alta performance
- **React Compiler** - Memoização automática
- **shadcn/ui** - Biblioteca de componentes
- **Tailwind CSS** - Framework CSS utility-first
- **TanStack Query** - Gerenciamento de estado servidor e cache
- **Zustand** - Gerenciamento de estado cliente (UI)
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas e tipos
- **next-themes** - Gerenciamento de temas (dark/light mode)
- **lucide-react** - Ícones
- **@uidotdev/usehooks** - Hooks customizados

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd FasaArq
```

2. Instale as dependências:
```bash
cd frontend
npm install
```

## 🏃 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```
O servidor estará disponível em `http://localhost:3000`

### Build de Produção
```bash
npm run build
npm start
```

### Outros Scripts
```bash
npm run lint      # Executa o ESLint
npm run typecheck # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

```
frontend/
├── app/                    # App Router (Next.js 13+)
│   ├── actions/            # Server Actions
│   ├── layout.tsx          # Layout raiz
│   └── page.tsx            # Página inicial
├── components/             # Componentes React
│   ├── home/              # Componentes da página inicial
│   └── ui/                # Componentes shadcn/ui
├── hooks/                 # Custom hooks
│   ├── mutations/         # Hooks de mutação (TanStack Query)
│   └── queries/           # Hooks de query (TanStack Query)
├── lib/                   # Utilitários e configurações
├── providers/             # Providers React (Query, Theme)
├── schemas/               # Schemas Zod
├── services/              # Serviços e APIs
├── stores/                # Stores Zustand (Client State)
└── types/                 # Definições de tipos TypeScript
```

## 🎨 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação suave entre seções
- ✅ Formulário de contato com validação
- ✅ Seção de portfólio
- ✅ Seção de serviços
- ✅ Dark mode (preparado)
- ✅ Otimização de imagens com Next.js Image
- ✅ SEO otimizado

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na pasta `frontend/` com as variáveis necessárias:

```env
# Exemplo (ajuste conforme necessário)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📝 Convenções de Código

O projeto segue padrões rigorosos de desenvolvimento. Consulte as regras em `.cursor/rules/`:

- `frontend-core.mdc` - Princípios fundamentais
- `frontend-forms.mdc` - Formulários e validação
- `frontend-state.mdc` - Gerenciamento de estado
- `frontend-ui.mdc` - UI e componentes
- `frontend-performance.mdc` - Otimizações de performance
- `frontend-security.mdc` - Segurança
- `frontend-quality.mdc` - Qualidade de código
- `frontend-checklist.mdc` - Checklist antes de commitar

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
3. Push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto é privado e proprietário da Fasa Arquitetos.
