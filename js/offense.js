var keyIsDown = {};

function Offense(opt_options) {

    var options = opt_options || {},
        world = Flora.universe.first();

    Flora.Element.call(this, options);
    this.accel = 0.1;
    this.vel = 0;
    this.location = new Flora.Vector(world.width / 2, world.height / 2);
    this.hasBall = !!options.hasBall;
    this.userControl = !!options.userControl;

    if (this.userControl) {
        exports.Utils.addEvent(document, 'keydown', function (e) {
            keyIsDown[String.fromCharCode(e.keyCode)] = true;
        });
        exports.Utils.addEvent(document, 'keyup', function (e) {
            keyIsDown[String.fromCharCode(e.keyCode)] = false;
        });
    }
}

exports.Utils.extend(Offense, Flora.Element);
Offense.prototype.name = 'Offense';

Offense.prototype.step = function () {
    var directionVector = null;

    if (this.userControl) {
        if ( keyIsDown['W'] || keyIsDown['A'] || keyIsDown['S'] || keyIsDown['D'] )
        {
            directionVector = {
                x: (keyIsDown['A'] ? 1 : 0) + (keyIsDown['D'] ? -1 : 0),
                y : (keyIsDown['W'] ? 1 : 0) + (keyIsDown['S'] ? -1 : 0)};
        }
    } else {
        var sum = { x: 0, y: 0 };
        var anyPlayer = false;
        var self = this;
        play.defensivePlayers
            .filter(function (each) {
                //igonora jogadores lentos
                return each.vel > 1;
            })
            .forEach(function (each) {
                //soma vetores dos def
                anyPlayer = true;
                sum.x -= self.location.x - each.location.x
                sum.y -= self.location.y - each.location.y
            });

        if (play.isOver) return;

        if (anyPlayer) {
            directionVector = sum;
        }
    }

    if (directionVector) {
        var angle = Math.atan2(directionVector.x, directionVector.y);

        this.vel += this.accel;
        this.location.x += this.vel * Math.sin(angle) * -1;
        this.location.y += this.vel * Math.cos(angle) * -1;
    }
};