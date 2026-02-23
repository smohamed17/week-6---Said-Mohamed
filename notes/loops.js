let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach(function(bird, index){
    //repeat once during an array, it will called for each object through a function
    console.log(index, bird.toUpperCase())
})

for (let x= 0; x < birds.length; x++) {
    let bird = birds[x];
    console.log(bird.toUpperCase())
}

