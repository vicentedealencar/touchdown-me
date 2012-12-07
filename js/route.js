var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RouteStep = (function () {
    function RouteStep(dirX, dirY, dist) {
        this.dirX = dirX;
        this.dirY = dirY;
        this.dist = dist;
    }
    return RouteStep;
})();
var Route = (function () {
    function Route() {
        this.steps = [];
    }
    Route.prototype.nextStep = function () {
        var randomWalk = false;
        var x = null;
        var y = null;
        for(var i = 0; i < this.steps.length; i++) {
            if(this.steps[i].dist < 1) {
                continue;
            }
            x = this.steps[i].dirX;
            y = this.steps[i].dirY;
            this.steps[i].dist--;
            randomWalk = false;
            break;
        }
        if(!x && !y) {
            x += getRandom(x == 0 ? 0 : -1, x == 120 - 1 ? 0 : 1);
            y += getRandom(y == 0 ? 0 : -1, y == 53 - 1 ? 0 : 1);
        }
        return [
            x, 
            y
        ];
    };
    return Route;
})();
var LIn = (function (_super) {
    __extends(LIn, _super);
    function LIn() {
        _super.call(this);
        this.steps.push(new RouteStep(1, 0, 10));
        this.steps.push(new RouteStep(0, -1, 20));
    }
    return LIn;
})(Route);
