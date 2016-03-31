import angular from 'angular'

function RoomsService (Room, Message) {
  this.find = () => Room.find().$promise

  this.findById = (id) => Room
    .findById({
      id,
      filter: {
        include: {
          relation: 'messages',
          scope: {
            order: 'created ASC',
            include: 'user'
          }
        }
      }
    })
    .$promise

  this.addMessage = (message) => Message.upsert(message).$promise
  this.addRoom = (room) => Room.upsert(room).$promise
}

const MODULE_NAME = 'app.rooms.services.rooms-service'

angular.module(MODULE_NAME, [])
  .service('RoomsService', RoomsService)

export default MODULE_NAME
