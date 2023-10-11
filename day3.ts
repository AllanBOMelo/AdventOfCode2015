import * as fs from 'fs';

console.log('--- Init ---')  

let test: String = fs.readFileSync('input3.txt','utf8');
let house: any 
let coords: any = '0.0'
let x: number = 0
let y: number = 0

// ^v<>

for ( let i:number = 0 ; i < test.length ; i++ ) {

    console.log(i)
    if (test[i] == "^") {
        let plus = parseInt(coords[2]) + 1
        coords[2] = plus.toString()
    }
    if (test[i] == "v") {
        let plus = parseInt(coords[2]) - 1
        coords[2] = plus.toString()
    }
    if (test[i] == "<") {
        let plus = parseInt(coords[0]) - 1
        coords[2] = plus.toString()
    }
    if (test[i] == ">") {
        let plus = parseInt(coords[0]) + 1 
        coords[2] = plus.toString()
    }

    house.push(coords)
}

console.log(house)

console.log(coords[1])
