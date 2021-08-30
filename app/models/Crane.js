export class Crane{
    constructor(
        name = '',
        length = 2.3,
        gender = '',
        weight = 0,
        color = 'grey',
    ){
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }
    eat(food){
        console.log('Fishin all the ${food}ies.')
    }
    speak(noise){
        alert('The ${this.constructor.name} says ${noise}!')
    }
}