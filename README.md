# AI Express App

API HTTP simples em Node.js, Express e TypeScript para enviar perguntas a um
modelo local executado pelo [Ollama](https://ollama.com/).

## Requisitos

- Node.js 20 ou superior
- npm
- Ollama em execução em `http://localhost:11434`
- Modelo `gemma2:2b` instalado no Ollama

Para instalar o modelo:

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

Para executar o modelo:
```bash
docker exec -it ollama ollama run gemma2:2b
```

## Inicialização do Projeto

```bash
npm install
```

## Execução

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor ficará disponível em `http://localhost:8000`.

## Endpoints

### `GET /`

Retorna uma mensagem para confirmar que a API está disponível.

### `POST /ai/ask`

Envia uma pergunta ao modelo configurado no Ollama.

Exemplo:

```bash
curl -X POST http://localhost:8000/ai/ask \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"Explique o que é uma API REST.\"}"
```

O corpo da requisição deve conter a propriedade `message`:

```json
{
  "message": "Explique o que é uma API REST."
}
```

## Estrutura principal

```text
src/
└── server.ts   # Configuração do Express e rotas da API
```

## Scripts

- `npm run dev`: inicia o servidor com recarregamento automático usando `tsx`.

## Status

Este é um projeto base experimental com uma API Express integrada a um
LLM local