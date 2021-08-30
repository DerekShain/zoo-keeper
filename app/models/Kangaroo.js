export class Kangaroo{
    constructor(
        name = '',
        length = 3,
        gender = '',
        weight = 0,
        color = 'brown',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Fighting  all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}