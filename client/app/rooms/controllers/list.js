import angular from 'angular'

function RoomListCtrl (RoomsService, rooms) {
  this.rooms = rooms
  this.room = {
    name: ''
  }
  this.addRoom = () => {
    this.room.id = this.room.name
    RoomsService
      .addRoom(this.room)
      .then()
      .then(() => RoomsService.find())
      .then((rooms) => {
        this.rooms = [].concat(rooms)
        this.room.name = ''
      })
  }
}

const MODULE_NAME = 'app.rooms.controllers.list'

angular.module(MODULE_NAME, [])
  .controller('RoomListCtrl', RoomListCtrl)

export default MODULE_NAME
