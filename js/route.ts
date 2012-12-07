///<reference path="random.ts" />

class RouteStep {
    constructor(
        public dirX: number,
        public dirY: number,
        public dist: number)
    { }
}

class Route {
    steps: RouteStep[];

    constructor() {
        this.steps = [];
    }

    nextStep() :number[] {
        var randomWalk = false;
        var x = null;
        var y = null;

        for (var i = 0; i < this.steps.length; i++) {
		    if(this.steps[i].dist < 1) continue;

		    x = this.steps[i].dirX;
		    y = this.steps[i].dirY;
		    this.steps[i].dist--;
		    randomWalk = false;
		    break;
	    }    
	    if(!x && !y) {
		    x += getRandom(x == 0? 0 : -1,x == /*h*/120-1? 0 : 1);
		    y += getRandom(y == 0? 0 : -1,y == /*w*/53-1? 0 : 1);
	    }
        return [x, y];
    }
}

class LIn extends Route {
    steps: RouteStep[];
    constructor() { 
        super();
        this.steps.push(new RouteStep(1, 0, 10));
        this.steps.push(new RouteStep(0, -1, 20));
    }
}

//class Go implements Route {
//    steps: RouteStep[];
//    constructor() { 
//        this.steps.push(new RouteStep(1, 0, 30));
//    }
//}