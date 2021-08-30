import  {Alligator} from '../models/Alligator.js'
import  {Bison} from '../models/Bison.js'
import  {Crane} from '../models/Crane.js'
import  {Dog} from '../models/Dog.js'
import  {Eagle} from '../models/Eagle.js'
import  {Falcon} from '../models/Falcon.js'
import  {Groundhog} from '../models/Groundhog.js'
import  {Hamster} from '../models/Hamster.js'
import  {Impala} from '../models/Impala.js'
import  {Jaguar} from '../models/Jaguar.js'
import  {Kangaroo} from '../models/Kangaroo.js'
import  {Lobster} from '../models/Lobster.js'
import  {Mink} from '../models/Mink.js'
import  {Narwhal} from '../models/Narwhal.js'
import  {Ocelot} from '../models/Ocelot.js'
import  {Parrot} from '../models/Parrot.js'
import  {Quail} from '../models/Quail.js'
import  {Raccoon} from '../models/Raccoon.js'
import  {Seal} from '../models/Seal.js'
import  {Tuna} from '../models/Tuna.js'
import  {Uakari} from '../models/Uakari.js'
import  {Vulture} from '../models/Vulture.js'
import  {Walrus} from '../models/Walrus.js'
import  {Xerus} from '../models/Xerus.js'
import  {Yak} from '../models/Yak.js'
import  {Zebra} from '../models/Zebra.js'
var male =[]
var female = []

let allen = new Alligator ("Allen", 9, "M", 200, "Green")
let bobby = new Bison ("Bobby", 2, "M", 700, "brown")
let christine = new Crane ("Christine", 2, "F", 98, "white")
let diesel = new Dog ("Diesel", 0.8, "m", 63, "brown")
let edison = new Eagle ("Edison", 3, "m", 150, "gold")
let fatima = new Falcon ("Fatima", 1.3, "F", 83, "brown")
let george = new Groundhog ("George", 0.3, "m", 10, "brown")
let harold = new Hamster ("Harold", 0.1, "m", 1, "red")
let izzy = new Impala ("Izzy", 1.1, "f", 101, "brown")
let jeffry = new Jaguar ("Jeffry", 1.7, "m", 222, "black")
let karen = new Kangaroo ("Karen", 1.1, "f", 160, "brown")
let larry = new Lobster ("Larry", 1, "m", 20, "red")
let mary = new Mink("Mary", 0.9, "f", 23, "brown")
let ned = new Narwhal("Ned", 4, "m", 2000, "blue")
let olivia = new Ocelot ("Olivia", 0.5, "f", 15, "brown")
let paulie = new Parrot ("Paulie", 0.7, "m", 5, "red")
let quagmire = new Quail ("Quagmire", 0.3, "m", 2.2, "brown")
let rachael = new Raccoon ("Rachael", 1, "f", 28, "grey")
let stevie = new Seal ("Stevie", 5, "m", 780, "blue")
let tina = new Tuna ("Tina", .8, "f", 600, "blue")
let umar = new Uakari("Umar", 0.6, "m", 43, "red")
let victor = new Vulture ("Victor", 1.1, "m", 66, "black")
let wanda = new Walrus ("Wanda", 3.4, "f", 877, "blue")
let xavier = new Xerus("Xavier", 0.5, "m", 26, "brown")
let yakov = new Yak("Yakov", 2, "m", 4000, "black")
let zed = new Zebra ("Zed", 3, "m", 600, "striped")

export class ZooController{
    allenHeight(){
        if (allen.length <= 3.5){
            console.log('Average')
        }else{
            console.log('not Average')
        }
    }
    bobbyHeight(){
        if(bobby.length <=1){
            console.log('average')
        }else{
            console.log('not Average')
        }
    }
    oliviaHeight(){
        if(olivia.length <= 0.5){
            console.log('Olivia is average')
        }else{
            console.log('Olivia is out of range')
        }
    }
    sortGender(){
        male.push(zed.gender)
        console.log(`gender;${zed.gender}`)
        console.log(male)

    }
}


