## MusicApp

##  A link to the live app
 https://musicappbackend101.herokuapp.com/api 

## Documentation of API.

### https://musicappbackend101.herokuapp.com/api/users/:userId

Request:

Query Parameters:

`userId: number`

Response body:

`{
    "id": number,
    "fullname": string,
    "email": string,
    "password": string,
    "created_at": date,
    "updated_at": date
}`