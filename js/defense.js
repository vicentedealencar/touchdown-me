function Defense(opt_options) {

    var options = opt_options || {},
        world = Flora.universe.first();

    Flora.Element.call(this, options);
    this.acceleration = new Flora.Vector(0, 0.1);
    this.velocity = new Flora.Vector();
    this.location = new Flora.Vector(world.width / 2, 0);
}

exports.Utils.extend(Defense, Flora.Element);
Defense.prototype.name = 'Defense';

Defense.prototype.step = function () {
    var world = Flora.universe.first();

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    if (this.location.y + this.height / 2 > world.height) {
        this.velocity.mult(-1);
        this.location.y = world.height - this.height / 2;
    }
};