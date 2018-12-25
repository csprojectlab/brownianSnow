let current;
let snowflake = [];
let time = 0;

function setup () {
    createCanvas (600, 600)
    current = new Particle(width / 2, random(10));
    snowflake = [];
}

function draw () {
    translate(width / 2, height / 2)
    background(0);
    
    while(!current.finished() && !current.intersects(snowflake)) {
        current.update();
    }
    snowflake.push(current);
    current = new Particle(width / 2, 0);

    for (let i = 0; i < 6; i++) {
        rotate(PI / 3)
        current.show();
        snowflake.forEach((particle) => {
            particle.show();
        })

        push();
        scale(1, -1);
        current.show();
        snowflake.forEach((particle) => {
            particle.show();
        })
        pop();
    }
    time++;
    if(time % 200 == 0) {
        setup();
    }
    
}