///<reference path="route.ts" />
///<reference path="field.ts" />
///<reference path="receiver.ts" />

var qbHasBall = true;
var field = new Field();

var wr = new Receiver("purple", 60, 26, new LIn());

setInterval(function () {
    field.clear(wr.x, wr.y);
    wr.act(qbHasBall);
    field.update(wr.x, wr.y, wr.color);
},100);