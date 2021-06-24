const p = require("prompt-sync")();

//Game content ====================================================================

//containers ======================================================================
let fish = {};
let bucket = [];
let caught = [];
let player = {};
let weight = 0;
let money = 0;

//RNG==============================================================================
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
     return Math.floor(Math.random() * (max - min) + min)   
}
//Fish generator and dice roll


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
    fish.size = getRandom(0, 700) / 100;

    //Fish Value
    fish.value = getRandom(0.00, 1000.00) / 100;

    return fish
    }

    //Game Prompt Loop ===========================================================================

    console.log("==============================================")
    console.log("\nWelcome to Gone Fishing")
    const welcome = p("Press [enter] to to start fishing!")
    let hours = 0;
    
    while(hours < 6) {
        //Time updates every iteration
        ++hours


        if (hours === 6 ) {
            console.log("\n==============================================\n")
            console.log(`it is currently ${hours + 6}:00pm. You curentley have ${caught.length} fish`)
        }
        else{
        
        console.log("\n==============================================\n")
        console.log(`it is currently ${hours + 6}:00am. You curentley have ${caught.length} fish`)}
        // Begin Fishing =============================================================
        
        caught.push(getFishName(fish));
            console.log(`you caught a ${caught[caught.length - 1].name} weight : ${caught[caught.length - 1].size}lbs valued at $${caught[caught.length - 1].value}`)
            
            
            //Catch or release option =============================================================
            const keep = p("Press [k] to keep or any [enter] to release")
                
                if (keep === 'k') {
                    console.log(`\nYou added ${caught[caught.length - 1].name} to your bucket!\n`)
                    bucket.push(caught[caught.length - 1])
                
            //Loop through current catch and retrive values =======================================
               let currCartch = Object.values(bucket[bucket.length - 1]);
                    for (let i = 0; i < currCartch.length; i++) {
                  
                    }
                    weight += Math.round(currCartch[1] * 100) / 100;
                    money += currCartch[2];
        
                    if (hours < 6) {
                         const endTurn = p(`Press enter to fish again`)}

                         if (weight >= 10) {
                             console.log('\n==============================================\n')
                             console.log(`Your bucket is too full to keep this fish.`)
                             console.log(`you released ${bucket[bucket.length - 1].name }`)
                             bucket.pop()
                         }

                         else {
                            console.log(`\nYour current weight is at ${Math.round(weight * 100) / 100}lbs and you have $${money} worth of fish\n`)
                        
                         }
                }
            }
            console.log(`\nYour catch for the day is ${bucket.length} fish(es)\nwith a total weight of ${weight}lbs and a value of $${money}`)
            
            console.log(`==========================================================`)
            console.log(`Thanks for playing!`)
            console.log(`==========================================================`)

