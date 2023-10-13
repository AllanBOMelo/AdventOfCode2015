import * as fs from 'fs';

console.log('--- Init ---')  

// Ler Input

let test: any = fs.readFileSync('./Day2/input2.txt','utf8');
let split: any = test.split("\r\n")
let foot: number = 0

// l w h  
// 2lw 2wh 2hl

split.forEach((element: any) => {
    let l: any = parseInt(element.split("x")[0])
    let w: any = parseInt(element.split("x")[1])
    let h: any = parseInt(element.split("x")[2])
    let x: number = 0
    let y: number = 0

    if (l >= w && l >= h) {
        x = w
        y = h
    }

    if (w >= l && w >= h) {
        x = l
        y = h
    }

    if (h >= w && h >= l) {
        x = w
        y = l
    }

    let extra: number = x + x + y + y
    let area: number = l * w * h

    let plus: number  = extra + area

    foot += plus
});

console.log (foot)

//3737498
