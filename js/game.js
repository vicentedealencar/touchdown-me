var play = {};

Flora.System.start(function () {
    var world = Flora.universe.first();

    var off = new Offense({hasBall: true});
    var def = [
        new Defense({ location: new Flora.Vector(world.width / 3, world.height / 3) }),
        new Defense({ location: new Flora.Vector(2 * world.width / 3, world.height / 3) }),
        new Defense({ location: new Flora.Vector(world.width / 3,2 * world.height / 3) }),
    ];

    play.isOver = false;
    play.offensivePlayers = [off];
    play.defensivePlayers = def;
});