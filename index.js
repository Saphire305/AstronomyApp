let jupiter = {
    name: 'Jupiter',
    size: 1000,
    isRock: false,
    moons: ['Europa','Callisto'],
    explode: () => {
      console.log('Jupiter explodes')
    }
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
const throwRockAtJupiter = () => {
    num = getRandomInt(jupiter.size)

    console.log(`An asteroid with a size of ${num} hits jupiter!`)

    if(num > jupiter.size / 2){
        jupiter.size = 1;
        jupiter.explode();
        jupiter.moons = [];
        jupiter.isRock = true;
    } else{
        console.log(`Jupiter is Growing!`);
        jupiter.size += num;
    }

    if(jupiter.size >= 2000){
        console.log(`${jupiter.moons[0]} dances with ${jupiter.moons[1]} 🎶`)
    }

    console.log(`Jupiter's size is now ${jupiter.size}`);
}

throwRockAtJupiter();
