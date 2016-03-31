import angular from 'angular'

function RoomViewCtrl (RoomsService, room, socket) {
  this.room = room
  this.user = this.room.messages[ 0 ].user
  this.message = {
    userId: 1,
    roomId: room.id,
    text: ''
  }
  this.addMessage = () => RoomsService
    .addMessage(this.message)
    .then(() => RoomsService.findById(this.room.id))
    .then(() => {
      socket.emit('sendMessage', this.room.id, this.user, this.message.text)
      // this.room.messages.push(Object.assign({}, this.message))
      this.message.text = ''
    })

  socket.emit('join', this.room.id, this.user)

  socket.on('message', (msg) => {
    console.log('socket.message', msg)
    this.room.messages.push(msg)
  })
}

const MODULE_NAME = 'app.rooms.controllers.view'

angular.module(MODULE_NAME, [])
  .controller('RoomViewCtrl', RoomViewCtrl)

export default MODULE_NAME
