export class Dog{
    constructor(
        name = '',
        length = 0.7,
        gender = '',
        weight = 0,
        color = 'multi',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Woofin all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}