import * as fs from 'fs';

console.log('--- Init ---')  

let floor: number = 0
let test: any = fs.readFileSync('input.txt','utf8');
let position: number

for (let i: number = 0; i < test.length ; i++ ) {

   test[i] == '(' ? floor += 1 : floor -= 1
   position = i + 1

   console.log(floor + ' em ' + position)
   
   if (floor == -1) break
}

