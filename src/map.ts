
export class Map{
    max_x: number;
    min_x = 0
    min_y = 0;
    max_y: number

    private constructor(x: number, y: number){
        this.max_x = x;
        this.max_y = y
    }

    static createMap(coordinates: string){
        console.log(coordinates);
        throw new Error("Not implemented yet")
    }
}