const regex= /\b(Apple)+\b/g;
const fruit='Apple,kiwi,banana,Apple,orange,etc,etc';
for(const match of fruit.matchAll(regex)){
    console.log(match);
}