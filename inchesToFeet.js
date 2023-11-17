function inchesToFeet(inches){
    let feet = inches/12;
    return feet;
}

let tayebHeight = 80;
let tayebHeightFeet = inchesToFeet(tayebHeight);
console.log(tayebHeightFeet);