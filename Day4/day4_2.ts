import * as fs from "fs";
import {Md5} from 'ts-md5';

console.log("--- Init ---");

let input: String = 'yzbqklnj';
let input_number: number = 0
var control: Boolean = true
//var retorno: string


//Md5.hashStr(input + input_number.toString())
//trye.join("")
//retorno.split("", 5)  

while (control) {

    input_number += 1

    let hash: String = Md5.hashStr(input + input_number.toString())
    let hashStart: String = hash.split("", 6).join("")

    hashStart == "000000" ? control = false : control = true
}

console.log(input_number)