let eventsDisplayed = [...events]

let sortKey = 'random'
let sortDirection = 'asc'

// Get the cards container
const eventContainer = document.querySelector('.event-container')

function createEventCard({ id, name, description, image, date, price, registered }) {
    const eventArticleElement = document.createElement('article')
    eventArticleElement.classList.add('event')
    eventArticleElement.id = `event-${id}`

    const eventImgElement = document.createElement('img')
    eventArticleElement.append(eventImgElement)
    eventImgElement.src = image
    eventImgElement.classList.add('ev-image')

    const eventTitleElement = document.createElement('h3')
    eventArticleElement.append(eventTitleElement)
    eventTitleElement.classList.add('ev-name')
    eventTitleElement.innerText = name

    const eventDescriptionElement = document.createElement('p')
    eventArticleElement.append(eventDescriptionElement)
    eventDescriptionElement.classList.add('ev-description')
    eventDescriptionElement.innerText = description

    const eventPriceElement = document.createElement('p')
    eventArticleElement.append(eventPriceElement)
    eventPriceElement.classList.add('ev-price')
    eventPriceElement.innerText = price ? `£${(price / 100).toFixed(2)}` : 'Free'

    const eventTimeElement = document.createElement('time')
    eventArticleElement.append(eventTimeElement)
    eventTimeElement.classList.add('ev-time')
    eventTimeElement.dateTime = new Date(date)
    eventTimeElement.innerText = new Date(date).toLocaleString()

    const eventButtonElement = document.createElement('button')
    const eventButtonContainer = document.createElement('div')
    eventButtonContainer.classList.add('ev-button-container')
    eventButtonContainer.append(eventButtonElement)
    eventArticleElement.append(eventButtonContainer)
    eventButtonElement.classList.add('ev-button')

    eventButtonElement.innerText = 'Register'
    if (registered) {
        eventButtonElement.classList.add('registered')
        eventButtonElement.innerText = 'Cancel'
    }


    eventButtonElement.addEventListener('click', (e) => {
        const event = events.find(ev => ev.id == id)

        event.registered = !event.registered

        if (event.registered) {
            eventButtonElement.classList.add('registered')
            eventButtonElement.innerText = 'Cancel'
        }else {
            eventButtonElement.classList.remove('registered')
            eventButtonElement.innerText = 'Register'
        }
    })

    eventContainer.append(eventArticleElement)


}
function removeEventCard({ id }) {
    const eventCard = document.querySelector(`#event-${id}`)
    if (!eventCard) return false
    eventCard.remove()
}

function sortEvents(key, asc = true) {
    const multiplier = asc ? 1 : -1

    // Copy events array
    let eventsCopy = [...eventsDisplayed]

    if (key == 'random') {
        for (let i = 0; i < eventsCopy.length; i++) {
            const event = eventsCopy[i];
            eventsCopy[i].random = Math.random()
        }
    }
    const sorted = eventsCopy.sort((a, b) => {
        // Convert to uppercase if string
        let aValue = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
        let bValue = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

        if (aValue < bValue) {
            return -1 * multiplier
        }
        if (aValue > bValue) {
            return 1 * multiplier
        }

        // If equal
        return 0
    })
    removeAllCards()
    eventsDisplayed = sorted;
    eventsDisplayed.forEach(event => createEventCard(event))

    document.querySelector('#event-count').innerHTML = eventsDisplayed.length
    document.querySelector('#event-count-total').innerHTML = events.length
    return sorted
}

function fullTextSearch(query) {
    // Ignore character case
    // Ignore special characters
    //
    // Search in name or description
    query = query.toUpperCase()

    // Replace non alpha numeric characters with nothing

    const searched = events.filter(event => {
        if (new RegExp(`${query}`).test(event.name.toUpperCase())) {
            return true
        }
        if (new RegExp(`${query}`).test(event.description.toUpperCase())) {
            return true
        }
        return false

    })
    removeAllCards()
    eventsDisplayed = searched;
    eventsDisplayed.forEach(event => createEventCard(event))

    return searched
}

function resetFilters() {

}

function removeAllCards() {
    events.forEach(event => removeEventCard(event))
}

function setup() {
    // Setup buttons and stuff

    const sortSelect = document.querySelector('#sort-select')
    sortSelect.selectedIndex = 0
    sortSelect.addEventListener('input', (e) => {
        const selectedSortOption = e.target.options[e.target.selectedIndex].value

        // sort events
        sortKey = selectedSortOption.split('-')[0]
        // True for ascending, false for descending
        sortDirection = selectedSortOption.split('-')[1] === 'asc'

        sortEvents(sortKey, sortDirection)
    })

    const searchInput = document.querySelector('#search-bar')
    searchInput.value = ''
    searchInput.addEventListener('input', (e) => {
        console.log(e.target.value)
        console.log(fullTextSearch(e.target.value))
        sortEvents(sortKey, sortDirection)
    })

    const resetButton = document.querySelector('#button-reset')

    resetButton.addEventListener('click', (e) => {
        sortSelect.selectedIndex = 0
        searchInput.value = ''

        sortKey = 'random'
        sortDirection = 'asc'
        fullTextSearch('')
        sortEvents(sortKey, sortDirection)
    })
}

setup()
sortEvents('random')