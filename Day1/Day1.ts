import * as fs from 'fs';

console.log('--- Init ---')  

let floor: number = 0
let test: any = fs.readFileSync('./Day1/input.txt','utf8');

for (let i: number = 0; i < test.length ; i++ ) {

   test[i] == '(' ? floor += 1 : floor -= 1

}

console.log (floor)