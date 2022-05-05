function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: 'Black, White',
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: 'Turquoise, Purple',
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Brendan Haywood': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
            },
        },
    };
};
// helpful functions here : 
function homeTeam() {
    return gameObject().home;
}
function awayTeam() {
    return gameObject().away;
}
function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players);
}


// function numPointsScored(name) {
//     if (name in gameObject()['home']['players']) {
//         return console.log(gameObject()['home']['players'][name]['points'])
//     }
//     else {
//         return console.log(gameObject()['away']['players'][name]['points'])
//     }
// }
// numPointsScored('Jeff Adrien')

//or a better way ..

function numPointsScored(playerInput) {
    return players()[playerInput].points;
}
// console.log(numPointsScored('Brendan Haywood'))



function shoeSize(name) {
    if (name in gameObject()['home']['players']) {
        return console.log(gameObject()['home'][['players'][name]['shoe']])
    }
    else {
        return console.log(gameObject()['away'][['players'][name]['shoe']])
    }
}
// shoeSize('Brendan Haywood')

function teamColors(name) {
    if (name === gameObject()['home']['teamName']) {
        return console.log(gameObject()['home']['colors'])
    }
    else {
        return console.log(gameObject()['away']['colors'])
    }
}
// teamColors('Charlotte Hornets')

function teamNames(name) {
    if (name === gameObject()['home']['teamName']) {
        console.log(Object.keys(gameObject()['home']['players']))

    } else {
        console.log(Object.keys(gameObject()['away']['players']))
    }
}
// teamNames('Charlotte Hornets')  



function playerNumbers(teamInput) {
    let arrayNumbers = []
    if (teamInput === homeTeam().teamName) {
        Object.entries(homeTeam().players).forEach((array) => {
            arrayNumbers.push(array[1].number)
        })

    } else if (teamInput === awayTeam().teamName) {
        Object.entries(awayTeam().players).forEach((array) => {
            arrayNumbers.push(array[1].number)
        })
        console.log(arrayNumbers)
    }
};
// playerNumbers('Charlotte Hornets')

function playerStats(playerInput) {
    Object.entries(players()).forEach(playerArray => {
        if (playerInput === playerArray[0]) {
            console.log(playerArray[1]);
        }
    })
}
// playerStats('Bismak Biyombo')

//the below function is used for the solution of the last question:
function shoeSizes() {
    let newArr = []
    Object.entries(players()).forEach(array => newArr.push(array[1].shoe))
    return newArr;
}

function bigShoeRebounds() {
    const maxSize = Math.max(...shoeSizes());
    Object.entries(players()).forEach(array => {
        if (maxSize === array[1].shoe) {
            console.log(array[1].rebounds)
        }
    })
}
bigShoeRebounds()