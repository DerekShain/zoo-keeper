export class Walrus{
    constructor(
        name = '',
        length = 3.2,
        gender = '',
        weight = 0,
        color = 'Greyish',
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