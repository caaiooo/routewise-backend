# RouteWise - Sistema de Logística

Este é o backend do sistema de logística da RouteWise, que calcula a distância e o tempo de percurso entre dois endereços usando a Google Maps API.

## Escolha do Framework

Escolhi o **Express.js** para construir o backend porque é um framework minimalista e flexível para Node.js, ideal para criar APIs REST de forma rápida e eficiente. Ele é leve, não impõe muitas estruturas, o que permite focar na lógica do negócio, como integrar com APIs externas. Para um projeto de cálculo de rotas, onde a simplicidade e a performance são importantes, o Express é mais adequado do que frameworks mais pesados como Django, que são melhores para aplicações mais complexas com muitas funcionalidades built-in.

## Integração com Serviço de Terceiros

Integrei o backend com a **Google Maps Distance Matrix API** usando o SDK oficial `@googlemaps/google-maps-services-js`. Esse SDK facilita a integração ao encapsular as requisições HTTP e o tratamento de respostas, tornando o código mais limpo e fácil de manter. Em vez de fazer chamadas diretas à API, que exigiriam lidar com autenticação, formatação de URLs e parsing manual de JSON, o SDK abstrai essas complexidades, reduzindo erros e acelerando o desenvolvimento. Os benefícios incluem melhor tratamento de erros, suporte a tipos (se usado com TypeScript) e atualizações automáticas conforme a API evolui.

A funcionalidade implementada é um endpoint POST `/route` que recebe origem e destino e retorna distância e tempo estimado.

## Dependências

As dependências principais do projeto são:
- **express**: Para criar o servidor web e gerenciar rotas HTTP.
- **@googlemaps/google-maps-services-js**: SDK oficial para integrar com a Google Maps API.
- **dotenv**: Para carregar variáveis de ambiente, como a chave da API, de forma segura.

Documentar as dependências no `package.json` é crucial porque permite que outros desenvolvedores instalem todas as bibliotecas necessárias com um simples `npm install`, garantindo consistência no ambiente de desenvolvimento e produção. Sem isso, seria difícil replicar o projeto ou colaborar.

## Como usar

1. Clone o repositório.
2. Crie um arquivo `.env` com sua chave do Google Maps (veja `.env.example`).
3. Rode `npm install` para instalar as dependências.
4. Inicie com `npm start`.

Teste com uma requisição POST para `http://localhost:3000/route`:

```json
{
  "origin": "São Paulo, SP",
  "destination": "Rio de Janeiro, RJ"
}
```

---

# Arquivo .env.example

```
GOOGLE_MAPS_API_KEY=SuaChaveAqui
