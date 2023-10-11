import * as fs from 'fs';

console.log('--- Init ---')  

let test: any = fs.readFileSync('input2.txt','utf8');
let split: any = test.split("\r\n")
let foot: number = 0

// l w h  
// 2lw 2wh 2hl

split.forEach((element: any) => {
    let l: any = parseInt(element.split("x")[0])
    let w: any = parseInt(element.split("x")[1])
    let h: any = parseInt(element.split("x")[2])

    let x: number = l * w
    let y: number = w * h
    let z: number = h * l

    let low: number = 0

    if (x <= y && x <= z) low = x
    if (y <= x && y <= z ) low = y
    if (z <= x && z <= y) low = z

    let plus: number  = (2 * x + 2 * y + 2 * z) + low

    foot += plus
});

console.log (foot)
