var mockevents = [
  {
    name: 'Breakfast',
    location: 'Luciles',
    start: 900,
    end: 1000,
    slot: 'nineam'
  }, 
  {
    name: 'Lunch',
    location: 'Ohana',
    start: 1300,
    end: 1350,
    slot: 'onepm'
  }, 
  {
    name: 'Nap',
    location: 'Home',
    start: 1700,
    end: 1800,
    slot: 'fivepm'
  }, 
  {
    name: 'Dinner',
    location: 'Spuntino',
    start: 1800,
    end: 1900,
    slot: 'sixpm'
  }, 
  {
    name: 'Guest Lecture',
    location: 'Turing',
    start: 1800,
    end: 2000,
    slot: 'sixpm'
  }
]

function Calendar (events) {
    this.events = events
}

Calendar.prototype.add = function() {
  this.events.map((event, i) => {
    $(`.events-container #${event.slot}`).append(
    `<div class="event-container" style="height: ${Math.abs(event.end - event.start) }px"><div class="event" style="height: ${Math.abs(event.end - event.start) }px"><p>${event.name}</p><p><span>${event.location}<span></p></div></div>`
)
  })
}

var calendar = new Calendar(mockevents)

setTimeout(() => calendar.add(), 100)