import * as fs from 'fs';

console.log('--- Init ---')  

let rawInput: string = fs.readFileSync('./Day5/input5.txt','utf8');
let inputArray: string[] = rawInput.split("\n")
var nice: number = 0
let vowel: string[] = ['a', 'e', 'i', 'o', 'u']

//It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

//vogais.indexOf(letra.toLowerCase()) !== -1

function isnaughtyFunction (item: string) {
    
    return /(ab|cd|pq|xy)/.test(item);

}

function howManyVowels (item: string) {
    let counter: number = 0;
    let splitted: string[] = item.split("")

    splitted.forEach((element) => {
        if (vowel.includes(element)) counter += 1
    });


    return counter
}

function howManyDouble (item:string) {
    let counter: number = 0;
    let array: string[] = item.split("")

    for (let i: number = 0 ; i < array.length -1 ; i++) {
        if (array[i] === array[i + 1] ) {
            counter += 1
            break
        } 
    }

    return counter
}

////

inputArray.forEach((item, index) => {
    let vowels: number = howManyVowels(item);
    let doubleLetter: number = howManyDouble(item);
    var isnaughty : boolean = isnaughtyFunction(item);

    if (isnaughty == false && vowels > 2  && doubleLetter > 0 ) {
        nice += 1
       // console.log(`${item} vowe: ${vowels} double: ${doubleLetter} naughty: ${isnaughty} index: ${index} join: yes`)
    } else {
        //console.log("no")
        //console.log(`${item} vowe: ${vowels} double: ${doubleLetter}`)
    }
})




/////


console.log(nice)
