
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
        
        const separatedCoordinates = coordinates.split(",")

        separatedCoordinates.forEach(coordinate => {
            const num = parseFloat(coordinate)
            if(isNaN(num)){
                throw new Error(coordinate + " is not a number")
            }

            if(num < 0){
                throw new Error("Coordinate cannot contain negative numbers")
            }
            
        });
        
        return new Map(0,0)
    }
}