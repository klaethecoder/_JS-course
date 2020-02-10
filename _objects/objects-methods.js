
let restaurant = {
    name: 'ASB',
    guestCap: 75,
    guestCount: 0,
    checkAvailbility: function(partySize){
        return this.guestCap - this.guestCount >= partySize;
    },
    seatParty: function(partySize){
        this.guestCount += partySize;
    },
    removeParty: function(partySize){
        this.guestCount -= partySize;
    }
}

restaurant.seatParty(72)

console.log(restaurant.checkAvailbility(6))
restaurant.removeParty(3)
console.log(restaurant.checkAvailbility(6))