import * as fs from "fs";

console.log("--- Init ---");

let input: String = 'yzbqklnj';
let input_number: number = 11111111
var control: Boolean = true

//test.toString(16).split('',2)
//socorro.join("")

let cont: number = 0

while (control) {
    console.log(cont)

    let verify: any = input + input_number.toString()

    let hex: any = ""

    for (let i: number = 0 ; i < verify.length ; i++) {
        hex += verify[i].toString(16)
    }

    let teste: any = hex.split("", 5)

    teste == "00000" ? control = false : input_number += 1
    if (cont == 99999999) control = false

    cont += 1
}

console.log(input_number)