export class Jaguar{
    constructor(
        name = '',
        length = 0.9,
        gender = '',
        weight = 0,
        color = 'spotted',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Hunting  all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}