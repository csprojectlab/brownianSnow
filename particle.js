class Particle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.r = 3;
    }

    update () {
        this.x -= 1;
        this.y += random(-3, 4);
    }

    show () {
        fill(random(255), random(255), random(255));
        stroke(random(255), random(255), random(255))     
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    finished () {
        return (this.x < 0);
    }

    intersects (snowflake) {        
        for (let i = 0; i < snowflake.length; i++) {
            let d = dist(snowflake[i].x, snowflake[i].y, this.x, this.y);
            if(d < this.r * 2 + this.r) 
                return true;
        }
        return false;
    }
}