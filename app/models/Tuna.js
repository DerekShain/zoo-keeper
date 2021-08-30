export class Tuna{
    constructor(
        name = '',
        length = 1.5,
        gender = '',
        weight = 0,
        color = 'blue',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Surfing  all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}