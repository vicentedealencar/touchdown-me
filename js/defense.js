function Defense(opt_options) {

    var options = opt_options || {},
        world = Flora.universe.first();

    Flora.Element.call(this, options);
    this.accel = 0.005;
    this.vel = 0;
    this.location = new Flora.Vector(world.width / 2, 0);
}

exports.Utils.extend(Defense, Flora.Element);
Defense.prototype.name = 'Defense';

Defense.prototype.seek = function (ballCarrier) {
    this.target = ballCarrier;
}

Defense.prototype.step = function () {
    if (!this.target) return;

    var angle = Math.atan2(
        this.target.location.x - this.location.x,
        this.target.location.y - this.location.y);

    this.vel += this.accel;
    this.location.x += this.vel * Math.sin(angle);
    this.location.y += this.vel * Math.cos(angle);
};