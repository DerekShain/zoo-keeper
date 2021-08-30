import { Alligator } from "../models/Alligator";

var jack = new Alligator('Jack')
console.log('this is', jack)
export class AlligatorController{
    looseWeight(){
        jack.weight --
        if(jack.weight <=1){
            alert('need to eat')
        }
    }
}