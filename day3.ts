import * as fs from 'fs';

console.log('--- Init ---')  

let test: String = fs.readFileSync('input3.txt','utf8');
let house: any 
let coords: String = '0.0'

// ^v<>

for ( let i:number = 0 ; i < test.length ; i++ ) {

    let x: number = parseInt(coords[0])
    let y: number = parseInt(coords[2])

    console.log(i)
    if (test[i] == "^") {
        y += 1
    }
    if (test[i] == "v") {
        y -= 1
    }
    if (test[i] == "<") {
        x -= 1
    }
    if (test[i] == ">") {
        x += 1
    }

    coords = `${x}.${y}`

    let matches:number = 0
    house.array.forEach(element: String => {
        if (coords == element) matches += 1
    });

    if (matches == 0) house.push(coords)
}

console.log(house)

