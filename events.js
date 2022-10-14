// const events = [{
//     id: '0',
//     name: 'Cinema event',
//     description: 'Watch this film in the cinema',
//     image: 'assets/cinema.jpg',
//     date: new Date(Math.round(Math.random() * 1665696556222)),
//     price: 879,
//     tag: 'Entertainment',
//     registered: false,
// }, {
//     id: '1',
//     name: 'Example',
//     description: 'This is an example description',
//     image: 'assets/concert.jpg',
//     date: new Date(Math.round(Math.random() * 1665696556222)),
//     price: 4500,
//     tag: 'Entertainment',
//     registered: false,
// }, {
//     id: '2',
//     name: 'Drinks',
//     description: 'Join us for drinks',
//     image: 'assets/drinks.jpg',
//     date: new Date(Math.round(Math.random() * 1665696556222)),
//     price: 0,
//     tag: 'Food & Drink',
//     registered: false,
// }, {
//     id: '3',
//     name: 'BBQ',
//     description: 'This is a BBQ party',
//     image: 'assets/hotdogs.jpg',
//     date: new Date(Math.round(Math.random() * 1665696556222)),
//     price: 200,
//     tag: 'Food & Drink',
//     registered: false,
// }, {
//     id: '4',
//     name: 'The office',
//     description: 'An office event',
//     image: 'assets/office.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 0,
//     tag: 'Work',
//     registered: false,
// }, {
//     id: '5',
//     name: 'Pizza night',
//     description: 'Come over for pizza night',
//     image: 'assets/pizza.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 450,
//     tag: 'Food & Drink',
//     registered: false,
// }, {
//     id: '6',
//     name: 'Coding',
//     description: 'Coding task',
//     image: 'assets/skeleton.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 0,
//     tag: 'Work',
//     registered: false,
// }, {
//     id: '7',
//     name: 'A Play',
//     description: 'Watch this play in the theatre',
//     image: 'assets/theatre.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 7599,
//     tag: 'Entertainment',
//     registered: false,
// }, {
//     id: '3',
//     name: 'BBQ',
//     description: 'This is a BBQ party',
//     image: 'assets/hotdogs.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 200,
//     tag: 'Food & Drink',
//     registered: false,
// }, {
//     id: '4',
//     name: 'The office',
//     description: 'An office event',
//     image: 'assets/office.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 0,
//     tag: 'Work',
//     registered: false,
// }, {
//     id: '5',
//     name: 'Pizza night',
//     description: 'Come over for pizza night',
//     image: 'assets/pizza.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 450,
//     tag: 'Food & Drink',
//     registered: false,
// }, {
//     id: '6',
//     name: 'Coding',
//     description: 'Coding task',
//     image: 'assets/skeleton.jpg',
//     date: new Date(Math.round(Math.random() * Date.now())),
//     price: 0,
//     tag: 'Work',
// }, {
//     id: '7',
//     name: 'A Play',
//     description: 'Watch this play in the theatre',
//     image: 'assets/theatre.jpg',
//     date: new Date(Math.round(Math.random() * Date.now() + 5000000)),
//     price: 7599,
//     tag: 'Entertainment',
//     registered: false,
// },]


const placeholder = {
    names: [
        'CLIVEDEN LITERARY FESTIVAL',
        'Bonfire Night',
        'Pizza Party',
        'Futures Festival 2022 - Day 2 | Pinewood Studios',
        'Theatre show',
        'New film in cinema',
        'The Horse Trust Entrance Tickets 2022',
        'Bingo Bonanza',
        'Our Woodlands - an Evening Talk',
        'Pumpkin patch',
        'Workshop',
        'The Rock Orchestra by Candlelight: London',
        'Gymbox Presents... THE NIGHT OF THE LIVING DEAD',
        'Vivaldi - The Four Seasons by Candlelight',
        'Fireworks at the Herne Hill Velodrome',
        'RIBA + Grimshaw Foundation Annual Art Lecture',
        'Kingston Vintage Second Life Fashion Pop-Up - London',
        '2022 Black History Month UK - CURLYTREATS Festival: Black Hair Stories',
        'Peckham Vintage Kilo Sale',
        'Stranger Tings Halloween Party',
        'COCOA KIDS CAREER FEST',
        'London Comic Con Winter 2022',
        'South London Preloved Vintage Kilo'
    ],
    descriptions: [
        'This is a description for the event',
        'Join the event',
        'Press the button below to join the event',
        'This is an example of the description for the event',
        'Event description',
        'Learn more about the event here',
        'This is another description',
        'Press the button below to register',
        'Join us for the event',
    ],
    images: [
        'cinema.jpg',
        'concert.jpg',
        'drinks.jpg',
        'hotdogs.jpg',
        'office.jpg',
        'pizza.jpg',
        'skeleton.jpg',
        'theatre.jpg',
        'bird.jpg',
        'car.jpg',
        'forest.jpg',
        'park.jpg',
        'field.jpg',
        'sky.jpg',
        'horse.jpg',
        'harbour.jpg'
    ],

    generateName() {
        // Gets random name from list
        return this.names[Math.floor(Math.random() * this.names.length)]
    },
    generateDescription() {
        // Get random name from list
        return this.descriptions[Math.floor(Math.random() * this.descriptions.length)]
    },
    generateImage() {
        return `assets/${this.images[Math.floor(Math.random() * this.images.length)]}`
    },
    generatePrice() {
        // 20% chance of it being free
        if (Math.random() <= 0.2) {
            return 0
        }

        // Random price up to £30
        return Math.round(Math.random() * 3000)
    },
    generateDate() {
        const min = 1665754388000 // Fri Oct 14 2022 13:33:08
        const max = 1671028388000 // Wed Dec 14 2022 14:33:08

        
        // Get random number between two dates
        const date = new Date(Math.floor(Math.random() * (max - min) + min))


        // Set seconds and minutes to make the date more natural
        date.setSeconds(0)
        return date
    }


}

const events = []
const eventsToCreate = 20
for (let i = 0; i < eventsToCreate; i++) {
    const newEvent = {
        id: i,
        name: placeholder.generateName(),
        date: placeholder.generateDate(),
        description: placeholder.generateDescription(),
        price: placeholder.generatePrice(),
        registered: false,
        image: placeholder.generateImage(),


    }

    events.push(newEvent)

}