export class Eagle{
    constructor(
        name = '',
        length = 2,
        gender = '',
        weight = 0,
        color = 'Brown',
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