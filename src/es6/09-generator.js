
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it= iterate(['David','Ulises','Jennifer','Ana']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)