function FruitEater() {
    var apples = 0;
    var apple = "apple";

    var pears = 0;
    var pear = "pear";

    function eat(fruit) {
        if (fruit === "apple") {
            apple = fruit;
            apples++
            // return;
        } else if (fruit === "pear") {
            pear = fruit;
            pears++
            // return;
        }
    }

    function applesEaten() {
        return apples;
    }
    // function eat(fruit) {


    // }
    function pearsEaten() {
        return pears;
    }
    return {
        eat,
        pearsEaten,
        applesEaten,
        pearsEaten
    }
}