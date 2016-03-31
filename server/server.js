import loopback from 'loopback'
import boot from 'loopback-boot'

const app = module.exports = loopback()

app.use(loopback.token({ model: app.models.AccessToken, currentUserLiteral: 'me' }))

// start the web server
app.start = () => app.listen(() => {
  app.emit('started')
  const baseUrl = app.get('url').replace(/\/$/, '')
  console.log('Web server listening at: %s', baseUrl)
  if (app.get('loopback-component-explorer')) {
    const explorerPath = app.get('loopback-component-explorer').mountPath
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
  }
})

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
  if (err) throw err

  // start the server if `$ node server.js`
  if (require.main === module) {
    // app.start()
    app.io = require('socket.io')(app.start())
    app.io.on('connection', (socket) => {
      console.log('a user connected')

      socket.on('join', (roomId, user) => {
        console.log('joining roomId', roomId)
        socket.join(roomId)
        app.io.to(roomId).emit('message', {
          roomId,
          user,
          userId: user.id,
          text: 'A user joined this room!',
          created: new Date()
        })
      })

      socket.on('sendMessage', (roomId, user, text) => {
        console.log('sendMessage roomId', roomId, 'userId', user.id, 'text', text)
        app.io.to(roomId).emit('message', {
          roomId,
          user,
          userId: user.id,
          text: text,
          created: new Date()
        })
      })

      socket.on('disconnect', () => {
        console.log('user disconnected')
      })
    })
  }
})
