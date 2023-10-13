import * as fs from "fs";

console.log("--- Init ---");

let test: String = fs.readFileSync("input3.txt", "utf8");
let house: Array<Object> = [];
let coords: any = [0, 0];
 
// ^v<>
//house.includes(coords)
//JSON.stringify Converte os arrays para algo 'comparavel'

for (let i: number = 0; i <= test.length - 1; i++) {
  if (test[i] == "^") coords[1] += 1;
  if (test[i] == "v") coords[1] -= 1;
  if (test[i] == "<") coords[0] -= 1;
  if (test[i] == ">") coords[0] += 1;

  let assing: any = [coords[0], coords[1]];

  if (house.includes(JSON.stringify(assing)) == false)
    house.push(JSON.stringify(assing));
}
console.log(house.length);
