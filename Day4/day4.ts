import * as fs from "fs";
import {Md5} from 'ts-md5';

console.log("--- Init ---");

let input: String = 'yzbqklnj';
let input_number: number = 1
var control: Boolean = true
//var retorno: string

//test.toString(16).split('',2)
//socorro.join("")
let retorno: string = input + input_number.toString()

while (control)

console.log(Md5.hashStr(retorno))