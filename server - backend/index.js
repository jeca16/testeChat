const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://127.0.0.1:5173/'}})

const PORT = 3001

io.on('connection', socket => {
    console.log('usuario conectado', socket.id);

    socket.on('set_username', username => {
        socket.data.username = username 
        console.log(socket.data.username);
    })
})

server.listen(PORT, () => console.log('server no ar'))