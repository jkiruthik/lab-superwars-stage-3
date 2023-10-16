const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.map((name,index) => {
        let a = index%2 ? "hero" : "villain"
        let newplayers = {
            name: name,
            type: a,
            image: `images/super-${index+1}.png`,
            strength: getRandomStrength()
        }
        detailedPlayers.push(newplayers)

    })

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildplayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    players.map((player) => {
        if (player.type==type) {
            let div = `<div class="player">
                        <img src="${player.image}" alt="">
                        <div class="name">${player.name}</div>
                        <div class="strength">${player.strength}</div>
                        </div>`;
            fragment += div
           
        }
    })

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildplayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildplayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}