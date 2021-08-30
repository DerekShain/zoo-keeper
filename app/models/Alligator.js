export class Alligator{
    constructor(
        name = '',
        length = 3.5,
        gender = '',
        weight = 0,
        color = 'green',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Chomp Chomp all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}