export class Yak{
    constructor(
        name = '',
        length = 1.1,
        gender = '',
        weight = 0,
        color = 'black',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Scrounging  all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}