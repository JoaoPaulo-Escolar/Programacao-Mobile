# App Scholar — Partes 3 e 4

Projeto React Native/Expo com CRUD real de alunos usando uma API PHP/PDO e MySQL.

## O que está pronto

- Consulta somente alunos ativos (`GET`)
- Cadastro (`POST`)
- Edição (`PUT`)
- Exclusão lógica (`PUT`, altera `status` para `I`; não usa `DELETE`)
- Pesquisa por nome, RA, curso ou turma
- Validação no aplicativo e na API
- Tratamento de falhas e de CPF/RA duplicados
- Atualização automática da consulta ao voltar do cadastro ou edição

Os demais módulos permanecem como protótipos visuais, pois o CRUD solicitado nas Partes 3 e 4 é o de alunos.

## Importar no Expo Snack pelo GitHub

1. Envie **todo o conteúdo desta pasta** para a raiz de um repositório GitHub.
2. No Expo Snack, escolha a opção de importar um repositório GitHub e cole a URL.
3. O Snack utiliza `App.js`, `package.json`, `assets/`, `components/` e `src/`.

As pastas `app_scholar_api/` e `database/` podem ficar no GitHub para compor a entrega, mas não são executadas pelo Snack.

## Configurar banco e API

1. No phpMyAdmin, importe `database/app_scholar.sql`.
2. Copie a pasta `app_scholar_api` para `C:\xampp\htdocs\`.
3. Ligue Apache e MySQL no XAMPP.
4. Abra `http://localhost/app_scholar_api/teste_conexao.php` no computador.
5. Descubra o IPv4 do computador com `ipconfig` (Windows) ou `ip addr` (Linux).
6. Troque o endereço em `src/services/api.js`. Exemplo:

```js
export const API_URL = 'http://192.168.0.105/app_scholar_api';
```

7. Celular e computador precisam estar na mesma rede Wi-Fi. Libere o Apache no firewall, se necessário.

> No celular, não use `localhost`: isso apontaria para o próprio celular, não para o computador.

## Rodar localmente

```bash
npm install
npx expo start
```

## Estrutura

```text
App.js                     interface e navegação
src/services/api.js        endereço e chamadas da API
app_scholar_api/           endpoints PHP/PDO
database/app_scholar.sql   banco, tabela e três registros
assets/                    ícones do aplicativo
```
