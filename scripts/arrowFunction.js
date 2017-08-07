let getName = kid => kid ? "Jas" : "Jan";

let getObject = () => ({firstName: "jan"});

let arr = [10,22, 12, 4, 0, 67, 34];

let gt20 = arr.filter(function (value) {
    return value > 20;
});

let gt5 = arr.filter(value => value > 5);

console.log(getName());
console.log(getObject());
console.log(gt20);
console.log(gt5);