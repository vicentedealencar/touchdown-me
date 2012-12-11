function Offense(opt_options) {

    var options = opt_options || {},
        world = Flora.universe.first();

    Flora.Element.call(this, options);
    this.accel = 0.1;
    this.vel = 0;
    this.location = new Flora.Vector(world.width / 2, world.height / 2);
    this.hasBall = !!options.hasBall;
}

exports.Utils.extend(Offense, Flora.Element);
Offense.prototype.name = 'Offense';

Offense.prototype.step = function () {

    //soma vetores dos def
    var sum = { x: 0, y: 0 };
    var anyPlayer = false;
    var self = this;
    play.defensivePlayers
        .filter(function (each) {
            return each.vel > 1;
        })
        .forEach(function (each) {
            anyPlayer = true;
            sum.x -= self.location.x - each.location.x
            sum.y -= self.location.y - each.location.y
        });

    if (play.isOver) return;

    if (anyPlayer){
        var angle = Math.atan2(sum.x, sum.y);

        this.vel += this.accel;
        this.location.x += this.vel * Math.sin(angle) * -1;
        this.location.y += this.vel * Math.cos(angle) * -1;
    }
};