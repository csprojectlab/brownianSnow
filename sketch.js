let current;
let snowflake = [];

function setup () {
    createCanvas (600, 600)
    current = new Particle(width / 2, 0);
}

function draw () {
    translate(width / 2, height / 2)
    background(0);
    current.update();
    current.show();

    if(current.finished()) {
        snowflake.push(current);
        current = new Particle(width / 2, 0);
    }

    snowflake.forEach((particle) => {
        particle.show();
    })
}