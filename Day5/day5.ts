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

    if (item.includes('ab') || item.includes('cd') || item.includes('pq') || item.includes('xy')) {
        return true
    } else { 
        return false
    }

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

    array.forEach((element, index) => {
        if (element == array[index + 1] && index < array.length - 2) counter += 1
    })

    return counter
}

////

inputArray.forEach((item) => {
    let vowels: number = howManyVowels(item);
    let doubleLetter: number = howManyDouble(item);
    var isnaughty : boolean = isnaughtyFunction(item);

    console.log(`${item} vowe: ${vowels} double: ${doubleLetter} naughty: ${isnaughty}`)

    if (isnaughty == false && vowels > 2  && doubleLetter > 0 ) {
        nice += 1
        
    } //else {
        //console.log(`${item} vowe: ${vowels} double: ${doubleLetter}`)
    //}
})




/////


console.log(nice)
