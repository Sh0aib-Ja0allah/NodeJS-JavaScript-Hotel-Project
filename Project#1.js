console.log(" Start \n")    // The start of the code ...

class Hotel {
    #minFloor
    #maxFloor
    constructor(Address, NumberOfRooms, minFloor, maxFloor) {
      this.Address = Address
      this.NumberOfRooms = NumberOfRooms
      this.minFloor = minFloor
      this.maxFloor = maxFloor
      this.rooms = []
    }
  
    printAdvertisement() {
      console.log(`Hello everyone, Welcome to ${this.Address}!, 
        We have ${this.NumberOfRooms} rooms available, 
        From Floor ${this.minFloor} to ${this.maxFloor}.`)
    }
  
    listBookedRooms() {
      console.log('Our booked rooms is down below:')
      var bookedRooms = this.rooms.filter(rooms.isBooked)
      for (let rom = 0; rom < bookedRooms.length; rom++) {
            console.log(`\n - valid room # ${this.bookedRooms[rom].isBooked}`)
        }
    }

    get minFloor() {
        return this.minFloor
    }

    set minFloor(minFloor) {
        this.minFloor = minFloor
    }

    get maxFloor() {
        return this.maxFloor
    }

    set maxFloor(maxFloor) {
        this.maxFloor = maxFloor
    }
}

class Room {
    #isBooked
    constructor(floorNum, roomNum, price) {
      this.floorNum = floorNum
      this.roomNum = roomNum
      this.price = price
      this.isBooked = false
    }
  
    printRoom() {
      console.log(`This Room ${this.roomNum} on Floor ${this.floorNum} -
       needs $${this.price} per night and this room isBooked ??? : ${this.isBooked}`)
    }
  
    book() {
      if (this.isBooked) {
        console.log('This room is already booked.')
      } else {
        this.isBooked = true;
        console.log('Room booked successfully.')
      }
    }

    isBooked(){
        if (this.isBooked) {
            console.log('Sorry, This room is already booked.')
            return this.isBooked
        } else {
            console.log('Nice, This room is available to book.')
            return this.isBooked
        }
    }

    get isBooked() {
        return this.isBooked
    }

    set isBooked(isBooked) {
        this.isBooked = isBooked
    }
}

class RoomWithView extends Room {
    constructor(view, numberOfBeds) {
      super(floorNum, roomNum, price)
      this.view = view;
      this.numberOfBeds = numberOfBeds
    }
}
  
class SleepingRoom extends Room {
    constructor(personCapacity) {
      super(floorNum, roomNum, price)
      this.personCapacity = personCapacity
    }
}

    //  Room 1
const room1 = new Room(1, 27, 100, false)
room1.printRoom()
  
console.log(room1.isRoomBooked())
  
room1.book()
  
console.log(room1.isRoomBooked())

    //  Room 2
const room2 = new RoomWithView(2, 32, 99.9, true, "Beach View", 3)
room2.isBooked()

    //  Room 3
    const room3 = new SleepingRoom(4, 48, 150, true, 5)
    room2.printRoom()

const hotel = new Hotel('Nablus 5 Stars Hotel', 50, 1, 10)
hotel.printAdvertisement()
  
hotel.rooms.push(room1, room2, room3)
hotel.listBookedRooms()

console.log("\n End ")      // The end  of the  code ...