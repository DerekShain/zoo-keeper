export class Seal{
    constructor(
        name = '',
        length = 6,
        gender = '',
        weight = 0,
        color = 'bluish',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Fishing  all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}