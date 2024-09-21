# Mouse Movement and Scroll Recorder

Este projeto usa Puppeteer para gravar e reproduzir movimentos de rolagem e movimentos de mouse em uma página da web. A gravação é salva em um arquivo JSON e pode ser reproduzida posteriormente para simular interações humanas.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- Puppeteer (instalado como uma dependência do projeto)

## Instalação

1. Clone o repositório:

```bash
    git clone https://github.com/apenasgabs/MauseMovementRecord.git
    cd MauseMovementRecord
```

2. Instale as dependências:

```bash
    npm install
```

## Uso

### Passo 1: Gravar Movimentos de Rolagem e Mouse

Para gravar os movimentos de rolagem e mouse, execute o script `record.js`:

```bash
    node record.js
```

Isso abrirá uma página no navegador, onde os movimentos de rolagem e do mouse serão gravados por 30 segundos e salvos no arquivo `interactionData.json`.

### Passo 2: Reproduzir Movimentos de Rolagem e Mouse

Para reproduzir os movimentos gravados, execute o script `test.js`:

```bash
    node test.js
```

Isso abrirá uma página no navegador e simulará os movimentos de rolagem e mouse conforme gravados no arquivo `interactionData.json`.

## Estrutura do Projeto

```plaintext
.
├── interactionData.json  # Arquivo de dados gravados
├── package.json          # Arquivo de configuração do npm
├── record.js             # Script para gravar os movimentos
├── test.js           # Script para reproduzir os movimentos
└── README.md             # Este arquivo
```

## Contribuição

1. Faça um fork do repositório.
2. Crie um branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para o branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a Licença "COMO ESTÁ". Isso significa que você pode usar, modificar e distribuir o código, mas ele é fornecido "como está", sem garantias de qualquer tipo.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.

Feito com ❤️‍🔥 por @ApenasGabs
