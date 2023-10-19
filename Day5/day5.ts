import * as fs from 'fs';

console.log('--- Init ---')  

let rawInput: String = fs.readFileSync('./Day5/input5.txt','utf8');
let inputArray: String[] = rawInput.split("\n")
let nice: number = 0
let instructions: string[] =  ['ab', 'cd', 'pq', 'xy', 'a', 'e', 'i', 'o', 'u']


//It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

//vogais.indexOf(letra.toLowerCase()) !== -1

inputArray.forEach((item) => {
        let vowels: number = 0;
        let doubleLetter: number = 0;
        var isnaughty : boolean = false;

        for (let i: number = 0 ; i < 9 ; i++) {
            if (item.includes(instructions[i]) == false) {
                i < 4 ? isnaughty = true : vowels+= 1
            }
        }
        
        for (let i: number = 0 ; i < item.length ; i++) {
            if (item[i] == item[i+1] )  doubleLetter += 1
        }

        if (vowels > 0 && isnaughty == false || doubleLetter > 0 && isnaughty == false) nice += 1
})

console.log(nice)