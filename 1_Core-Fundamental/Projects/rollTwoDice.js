
    function rollDice1(){
        let bluerol = Math.floor(Math.random() *6 +1);
        console.log("Blue Dice : ",bluerol );
        return bluerol;
    }


    function rollDice2(){
        let redrol = Math.floor(Math.random() *6 +1);
        console.log("Red Dice : ",redrol);
        return redrol;
    }


    let blue= rollDice1();
    let red = rollDice2();

    if(blue == 6 || red == 6){
        console.log("You Win");
    }else{
        console.log("Better luck next time");
    }