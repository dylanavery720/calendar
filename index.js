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
    name: 'Dinner',
    location: 'Spuntino',
    start: 1800,
    end: 1950,
    slot: 'sixpm'
  }, 
  {
    name: 'Sleep',
    location: 'Home',
    start: 2100,
    end: 900,
    slot: 'ninepm'
  }
]

function Calendar (events) {
    this.events = events
}

Calendar.prototype.add = function() {
  this.events.map((event, i) => {
    $(`.events-container #${event.slot}`).append(
    `<div class="event-container"><div class="event" style="height: ${Math.abs(event.end - event.start) }px"><p>${event.name}</p><p><span>${event.location}<span></p></div></div>`
)
  })
}

var calendar = new Calendar(mockevents)

setTimeout(() => calendar.add(), 100)