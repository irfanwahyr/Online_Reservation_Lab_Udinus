# User API Spec

## Register User API
Endpoint: POST /api/users/register

Request Body :

```json
{
    "id": "id",
    "username": "xxx",
    "email": "xxx@gmail.com",
    "password": "password",
    "role": "false" // true hanya admin
}
```

Response Body Success :

```json
{
    "data": {
        "id": "id",
        "username": "xxx",
        "email": "xxx@gmail.com",
    },
}
```

Response Body Error :

```json
{
    "errors": "User already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
    "id": "id",
    "email": "xxx@gmail.com",
    "password": "password",
}

Response Body Success :

```json
{
    "data" : {
        "token" : "unique-token",
    }
}
```

Response Body Error :

```json
{
    "errors" : "email or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :

```json
{
    "id": "id",
    "username" : "xxx", // optional
    "email" : "xxx@gmail.com", // optional
    "password": "password" // optional
}
```

Response Body Success :

```json
{
    "data" : {
        "id": "id",
        "username": "xxx",
        "email": "xxx@gmail.com",
    }
}
```
Response Body Error :

```json
{
    "errors" : "username or email not allowed"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : {
        "id": "id",
        "username" : "xxx",
        "email" : "xxx@gmail.com",
    }
}
```

Response Body Error :

```json
{
    "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" "OK"
}
```

Response Body Error :

```json
{
    "errors": "Unauthorized"
}
```

