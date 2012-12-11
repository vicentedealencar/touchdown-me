function Defense(opt_options) {

    var options = opt_options || {};

    Flora.Element.call(this, options);
    this.accel = 0.005;
    this.vel = 0;
}

exports.Utils.extend(Defense, Flora.Element);
Defense.prototype.name = 'Defense';

Defense.prototype.step = function () {

    //if dont know the guy with the ball
    if (!this.target || !this.target.hasBall) {
        var self = this;
        play.offensivePlayers.some(function (each) {
            if (each.hasBall)
                self.target = each;
            return each.hasBall;
        });
    }

    //nothing to do here
    if (!this.target || play.isOver) return;

    //collision
    if (Math.abs(this.target.location.x - this.location.x) < 20 &&
        Math.abs(this.target.location.y - this.location.y) < 20)
    {
        alert("Got you!");
        play.isOver = true;
    }
        
    //calculate angle to get the target
    var angle = Math.atan2(
        this.target.location.x - this.location.x,
        this.target.location.y - this.location.y);

    //apply velocity and move
    this.vel += this.accel;
    this.location.x += this.vel * Math.sin(angle);
    this.location.y += this.vel * Math.cos(angle);
};