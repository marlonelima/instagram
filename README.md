# Documentação da API Rest

[![Coverage Status](https://coveralls.io/repos/github/marlonelima/instagram/badge.svg?branch=main)](https://coveralls.io/github/marlonelima/instagram?branch=main)

Todos os dados devem ser passados como application/json, exceto em casos explícitos.

## Usuários

#### Cadastro `POST`

`/users`
<br>
Entrada:

```json
{
  "full_name": "John Doe",
  "email": "johndoe@email.com",
  "username": "johndoe",
  "password": "123a2323234"
}
```

Saída:

```json
{
  "email": "johndoe@email.com",
  "full_name": "John Doe",
  "username": "johndoe",
  "created_at": "2021-06-15T03:05:27.217Z",
  "updated_at": "2021-06-15T03:05:27.217Z",
  "token": "jwt_token"
}
```
