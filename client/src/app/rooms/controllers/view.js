import angular from 'angular'

function RoomViewCtrl (RoomsService, room) {
  this.room = room
  this.message = {
    userId: 1,
    roomId: room.id,
    text: ''
  }
  this.addMessage = () => RoomsService
    .addMessage(this.message)
    .then()
    .then(() => RoomsService.findById(this.room.id))
    .then(room => {
      this.room.messages = [].concat(room.messages)
      this.message.text = ''
    })
}

const MODULE_NAME = 'app.rooms.controllers.view'

angular.module(MODULE_NAME, [])
  .controller('RoomViewCtrl', RoomViewCtrl)

export default MODULE_NAME
