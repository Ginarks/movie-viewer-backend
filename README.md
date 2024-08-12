# movie-viewer-backend

start the server with: node index.js 

with the routes:
  /pass-check:
    if it get the password it generate a JWT that last for 24 hours

example:
  request:
    curl -X POST -H "Content-Type: application/json" -d '{"passphrase": "********************"}' http://localhost:3000/pass-check
  response:
    {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJpYXQiOjE3MjMzNTMzMzQsImV4cCI6MTcyMzQzOTczNH0.L4SsDZIZ62uDz73sv2Vu_zY1MIHnvNEbRQzXVTyoTBw"}

you can use https://jwt.io/ to decode the token 
