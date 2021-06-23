const p = require("prompt-sync")();

//Game content ====================================================================

//RNG==============================================================================
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
     return Math.floor(Math.random() * (max - min) + min)   
}
//Fish generator
let fish = {};
let bucket = [];
function getFishName (fish)  {
     fish = {};
    //Fish name ===================================================================
    const fishAdj = ['Red', 'Blue', 'Yellow', 'Black', 'Spotted', 'Striped', 'Green', 
                    'Spiny', 'Slick', 'Wide', 'Skinny', 'Frilled', 'Short', 'Triple', 'Double'];
   
    const fishPart = ['Belly', 'Finned', 'Back', 'Scaled', 'Face', 'Lip', 'Tail', 'Gill', 'Eyed', 'Head'];
   
    const fishType = ['Trout', 'Bass', 'Snapper', 'Skeever', 'Carp', 'Oarfish', 'Cod', 'Snakehead', 'Tuna', 
                     'Salmon', 'Piranha'];   

    fish.name = `${fishAdj[getRandom(0, fishAdj.length - 1)]} ${fishPart[getRandom(0, fishPart.length - 1)]} ${fishType[getRandom(0, fishType.length - 1)]}`
    // Fish Size
    fish.size = `${getRandom(0, 1000) / 100}lbs`

    //Fish Value
    fish.value = `$${getRandom(0.00, 1000.00) / 100}`

    return fish
    }

    //Game Prompt Loop ==============================================================

    console.log("==============================================")
    console.log("\nWelcome to Gone Fishing")
    const welcome = p("Press [enter] to continue!")
    let hours = 0;
    while(hours < 6 ) {
    hours ++
    bucket.push(getFishName(fish));
    console.log(bucket)
    }


console.log(getFishName(fish))