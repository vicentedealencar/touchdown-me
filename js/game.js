var play = {};

Flora.System.start(function () {
    var off = new Offense({hasBall: true});
    var def = new Defense();

    play.isOver = false;
    play.offensivePlayers = [off];
    play.defensivePlayers = [def];
});