var Receiver = (function () {
    function Receiver(color, x, y, route) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.route = route;
    }
    Receiver.prototype.act = function (qbHasBall) {
        if(qbHasBall) {
            this.followRoute();
        }
    };
    Receiver.prototype.followRoute = function () {
        var oldX = this.x;
        var oldY = this.y;
        var next = this.route.nextStep();
        this.x += next[0];
        this.y += next[1];
        return [
            oldX, 
            oldY
        ];
    };
    return Receiver;
})();
