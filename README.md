# Movie Interface

Uma aplicação web para visualização de informações sobre filmes.
Desenvolvida com objetivo de atualizar e aprimorar conhecimentos do framework Angular e desenvolvimento web.

## 🚀 Tecnologias Utilizadas

### Frontend Framework
- **Angular**: `^21.0.0`
- **Angular CLI**: `^21.0.0`
- **TypeScript**: `~5.9.2`
- **RxJS**: `~7.8.0`

### UI/UX
- **Bootstrap**: `^5.3.8`
- **Bootstrap Icons**: `^1.13.1`
- **ngx-mask**: `^20.0.3`

### Testes
- **Vitest**: `^4.0.8`
- **jsdom**: `^27.1.0`
- **Jasmine Types**: `^5.1.13`

### Build e Desenvolvimento
- **Angular Build**: `^21.0.0`
- **Node.js**: `20.19.5`
- **npm**: `10.8.2`

## 🛠️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (vem com Node.js)

## 📦 Instalação e Execução Local

### 1. Clone o repositório
```bash
git clone https://github.com/MarcosAnt/movie-interface.git
cd movie-interface
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o servidor de desenvolvimento
```bash
npm start
# ou
ng serve
```

### 4. Acesse a aplicação
Abra seu navegador e navegue até `http://localhost:4200/`

A aplicação será recarregada automaticamente sempre que você modificar os arquivos fonte.

## 🧪 Executando Testes Unitários

### Executar todos os testes
```bash
npm test
# ou
ng test
```

## 🏗️ Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
ng build
```

Os artefatos de build serão armazenados no diretório `dist/`.

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run watch` - Build em modo watch para desenvolvimento
- `npm test` - Executa testes unitários

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes principais
│   ├── shared/             # Componentes e serviços compartilhados
│   ├── services/           # Serviços da aplicação
│   └── app.config.ts       # Configurações da aplicação
└── styles.scss            # Estilos globais
```

## 🌐 API

A aplicação consome dados da API: `https://challenge.outsera.tech/api/movies`

## 📚 Recursos Adicionais

Para mais informações sobre o Angular CLI, visite a [documentação oficial](https://angular.dev/tools/cli).
