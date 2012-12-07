///<reference path="route.ts" />

class Receiver {
	constructor (
        public color: string,
        public x:number,
        public y:number, 
        public route:Route) { }

	act(qbHasBall:bool) { 
        if(qbHasBall)
		    this.followRoute();
        //else
        //  this.runToBall();
    }

	private followRoute() :number[] {
	    var oldX = this.x;
	    var oldY = this.y;

	    var next = this.route.nextStep();
	    this.x += next[0];
	    this.y += next[1];
	    
	    return [oldX, oldY];
    }

}