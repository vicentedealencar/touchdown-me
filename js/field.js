var Field = (function () {
    function Field() {
        this.h = 120;
        this.w = 53;
        this.bgColor = 'green';
        this.grid = [];
        for(var x = 0; x < this.h; x++) {
            this.grid.push([]);
            for(var y = 0; y < this.w; y++) {
                this.grid[x].push(this.bgColor);
            }
        }
        canvasGrid("myCanvas", this.grid);
    }
    Field.prototype.update = function (x, y, color) {
        this.grid[x][y] = color;
    };
    Field.prototype.clear = function (x, y) {
        this.update(x, y, this.bgColor);
    };
    return Field;
})();
