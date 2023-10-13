import * as fs from "fs";

console.log("--- Init ---");

let input: String = fs.readFileSync("./Day3/input3.txt", "utf8");
let instructions = new Map([
["^", [0, 1]],
[ "v", [0, -1]],
[ ">", [1, 0]],
["<" , [-1, 0]]
])

class Coords {
    x: number;
    y: number;

    constructor(x: number, y:number) {
        this.x = x
        this.y = y
    }
}


let santa: any = [0, 0]
let houses: Array<Object> = [];

for (let i:number = 0 ; i < input.length ; i++) {

    let to_change: any = instructions.get(input[i])
    santa[0] += to_change[0]
    santa[1] += to_change[1]

    let new_coord = new Coords(santa[0], santa[1])

    if (houses.includes(JSON.stringify(new_coord)) == false) houses.push(JSON.stringify(new_coord))

}

console.log(houses.length)