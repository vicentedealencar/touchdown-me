declare function canvasGrid(canvasId: string, grid: string[][]): any;

class Field { 
	grid: string[][];
	h: number;
	w: number;
	bgColor: string;

	constructor () {
	    this.h = 120;
	    this.w = 53;
	    this.bgColor = 'green';
	    this.grid = [];

        //init grid
        for (var x = 0; x < this.h; x++) {
	        this.grid.push([]);
	        for (var y = 0; y < this.w; y++) {
		        this.grid[x].push(this.bgColor);
	        }
        }

        canvasGrid("myCanvas", this.grid);
	}

	update(x: number, y: number, color: string) {
	    this.grid[x][y] = color;
	}

	clear(x: number, y: number) {
	    this.update(x, y, this.bgColor);
    }
}