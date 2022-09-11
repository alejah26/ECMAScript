var lastName = 'David';
lastName='oscar'//reasignar valor
console-console.log(lastName);

let fruit="apple"//declarar y asignar

const animal= 'perro'; //no se puede reasignar valor
console.log(animal)

const fruits = () => {
    if(true){
        var fruit1='apple';//function scope
        let fruit2='kiwi';//block scope
        const fruit3='banana';//block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();