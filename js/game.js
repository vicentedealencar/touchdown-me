var play = {};

Flora.System.start(function () {
    play.isOver = false;

    var off = new Offense({hasBall: true});
    var def = new Defense();

    def.seek(off);
});