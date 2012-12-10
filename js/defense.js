function Defense(opt_options) {

    var options = opt_options || {},
        world = Flora.universe.first();

    Flora.Element.call(this, options);
    this.accel = 0.2;
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

    this.vel += this.accel;

    this.location.x += this.vel;
    this.location.y += this.vel;
};